import { Button } from "@/components/ui/button";
import BookingTourCard from "./BookingTourCard";
import { useEffect, useMemo, useRef, useState } from "react";
import { staticExperiences } from "@/components/experiences/static-experiences";

import { useSearchParams } from "next/navigation";

const BookingDetailsContent = () => {
  const search = useSearchParams();
  const selected = (search.get('selected') || '').split(',').filter(Boolean);
  const people = Number(search.get('people') || '0');
  const experienceId = search.get('experienceId') || '';
  const priceId = search.get('priceId') || '';
  const dateStr = search.get('date') || '';
  const timeStr = search.get('time') || '';

  const { title, unitAmount, currency } = useMemo(() => {
    const exp = staticExperiences.find(e => e.id === experienceId);
    const p = exp?.prices?.find(pr => String(pr.id) === String(priceId));
    const unit = p ? Math.round(parseFloat(p.value) * 100) : 0; // convert to minor units
    const curr = (p?.currency || '£').replace('£','GBP');
    return { title: exp?.title || 'Booking', unitAmount: unit, currency: curr };
  }, [experienceId, priceId]);

  const [loadingPay, setLoadingPay] = useState(false);
  const [customerEmail, setCustomerEmail] = useState<string | null>(null);

  // On success, generate PDF ticket and redirect to index
  useEffect(() => {
    const status = (search.get('status') || '').toLowerCase();
    if (status === 'success' && typeof window !== 'undefined') {
      const sid = search.get('session_id') || 'no-session';
      const doneKey = `ticket_done_${sid}`;
      if (sessionStorage.getItem(doneKey) === '1') {
        return;
      }
      sessionStorage.setItem(doneKey, '1');
      (async () => {
        try {
          // Optionally fetch Stripe session for customer info
          let stripeEmail: string | null = null;
          let stripeName: string | null = null;
          if (sid && sid !== 'no-session') {
            try {
              const r = await fetch(`/api/get-session?session_id=${encodeURIComponent(sid)}`);
              const j = await r.json();
              const s = j?.session;
              stripeEmail = s?.customer_details?.email || s?.customer?.email || null;
              stripeName = s?.customer_details?.name || null;
              setCustomerEmail(stripeEmail);
            } catch {}
          }

          const { jsPDF } = await import('jspdf');
          const doc = new jsPDF();
          try { doc.setProperties({ title: `Luxe Ticket - ${title}` }); } catch {}

          // Header bar (custom #2C2F2F)
          doc.setFillColor(44, 47, 47);
          doc.rect(0, 0, 210, 30, 'F');
          // Header text color: rgb(224,196,105)
          doc.setTextColor(224, 196, 105);
          doc.setFontSize(18);

          // Always draw site title text so header is visible
          doc.text('Luxe Excursions Tenerife', 80, 20);
          // Try to draw logo (prefer PNG, fallback to simple SVG->canvas without external libs)
          try {
            // Prefer PNG if present
            const pngRes = await fetch('/assets/images/Header-2-Logo.png');
            if (pngRes.ok) {
              const blob = await pngRes.blob();
              const url = URL.createObjectURL(blob);
              await new Promise<void>((resolve, reject) => {
                const img = new Image();
                img.onload = () => {
                  try { doc.addImage(img, 'PNG', 14, 6, 50, 20); resolve(); }
                  catch (e) { reject(e as any); }
                  finally { URL.revokeObjectURL(url); }
                };
                img.onerror = () => { URL.revokeObjectURL(url); resolve(); };
                img.src = url;
              });
            } else {
              // Fallback: inline SVG to canvas then to PNG
              const svgRes = await fetch('/assets/images/Header-2-Logo.svg');
              if (svgRes.ok) {
                const svgText = await svgRes.text();
                const svgBlob = new Blob([svgText], { type: 'image/svg+xml' });
                const svgUrl = URL.createObjectURL(svgBlob);
                await new Promise<void>((resolve) => {
                  const img = new Image();
                  img.onload = () => {
                    try {
                      const canvas = document.createElement('canvas');
                      const scale = 2;
                      canvas.width = (img.width || 200) * scale;
                      canvas.height = (img.height || 50) * scale;
                      const ctx = canvas.getContext('2d');
                      if (ctx) {
                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                        const dataUri = canvas.toDataURL('image/png');
                        doc.addImage(dataUri, 'PNG', 14, 6, 50, 20);
                      }
                    } catch {}
                    URL.revokeObjectURL(svgUrl);
                    resolve();
                  };
                  img.onerror = () => { URL.revokeObjectURL(svgUrl); resolve(); };
                  img.src = svgUrl;
                });
              }
            }
          } catch {}
          // Ticket title on right
          doc.text('Ticket', 196, 20, { align: 'right' });

          // Body (centered)
          doc.setFontSize(12);
          doc.setTextColor(0, 0, 0);
          let y = 48;
          const centerX = 105;
          doc.text(`Experience: ${title}`, centerX, y, { align: 'center' }); y += 8;
          doc.text(`People: ${people || '-'}`, centerX, y, { align: 'center' }); y += 8;
          if (dateStr || timeStr) { doc.text(`Schedule: ${dateStr || '-'} • ${timeStr || '-'}`, centerX, y, { align: 'center' }); y += 8; }
          doc.text(`Selected: ${selected.length ? selected.join(', ') : '-'}`, centerX, y, { align: 'center' }); y += 8;
          doc.text(`Amount: ${currency} ${(unitAmount/100).toFixed(2)}`, centerX, y, { align: 'center' }); y += 8;
          if (stripeName) { doc.text(`Name: ${stripeName}`, centerX, y, { align: 'center' }); y += 8; }
          if (stripeEmail) { doc.text(`Email: ${stripeEmail}`, centerX, y, { align: 'center' }); y += 8; }
          doc.text(`Ref: ${experienceId}-${priceId}`, centerX, y, { align: 'center' });

          // Footer
          doc.setFontSize(10);
          doc.setTextColor(120, 120, 120);
          doc.text('Thank you for booking with Luxe Excursions Tenerife.', 105, 280, { align: 'center' });

          const fileName = `luxe-ticket-${Date.now()}.pdf`;
          try {
            doc.save(fileName);
          } catch (e) {
            const blob = doc.output('blob');
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(a);
          }
        } catch (e) {
          console.error('Failed to generate PDF', e);
        } finally {
          setTimeout(() => {
            window.location.href = '/';
          }, 2000);
        }
      })();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const payWithStripe = async () => {
    try {
      setLoadingPay(true);
      const qs = search.toString();
      const origin = typeof window !== 'undefined' ? window.location.origin : '';
      const success_url = `${origin}/booking-details?${qs}${qs ? '&' : ''}status=success`;
      const cancel_url = `${origin}/booking-details?${qs}${qs ? '&' : ''}status=cancelled`;
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currency,
          amount: unitAmount,
          success_url,
          cancel_url,
          metadata: {
            title,
            people: String(people || ''),
            selected: selected.join(','),
            experienceId,
            priceId,
          },
        }),
      });
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url as string;
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingPay(false);
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-8">
      <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-[24px] justify-center items-stretch">
        {/* Left Column - Trip Details */}
        <div className="w-full lg:w-[737px] space-y-6">
          {/* Top Card: BookingTourCard */}
          <BookingTourCard
            image="/assets/images/private-tour.svg"
            alt="London Gourmet Food Tour"
            title="London Gourmet Food Tour"
            days="4 Days"
            location="London, Borough Market"
            type="Culinary"
            buttonText="View Itinerary and Map"
            buttonIcon="/assets/images/map-itin.svg"
          />
          {/* Trip Details */}
          <div className="w-full h-auto min-h-[541px] bg-white border-2 border-[#0A1805] rounded-[12px] shadow-lg p-6 flex flex-col items-start gap-6">
            <h4 className="font-anton text-[24px] leading-[29px] text-[#101010] font-normal uppercase mb-0">Trip Details</h4>
            <div className="flex flex-col gap-4 w-full">
              {selected.length > 0 && (
                <div className="flex flex-col gap-2 w-full">
                  <span className="font-inter text-base leading-normal tracking-normal font-medium text-[#878787]">Selected Options</span>
                  <ul className="list-disc pl-5 text-[#101010] font-inter text-[16px] leading-[24px]">
                    {selected.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
              {(dateStr || timeStr) && (
                <div className="flex flex-col gap-2 w-full">
                  <span className="font-inter text-base leading-normal tracking-normal font-medium text-[#878787]">Schedule</span>
                  <span className="font-inter text-[16px] leading-[24px] font-semibold text-[#101010]">{dateStr || '-'} • {timeStr || '-'}</span>
                </div>
              )}
              {people > 0 && (
                <div className="flex flex-col gap-2 w-full">
                  <span className="font-inter text-base leading-normal tracking-normal font-medium text-[#878787]">People</span>
                  <span className="font-inter text-[16px] leading-[24px] font-semibold text-[#101010]">{people}</span>
                </div>
              )}
              {/* Guest */}
              <div className="flex flex-col gap-2 w-full">
                <span className="font-inter text-base leading-normal tracking-normal font-medium text-[#878787]">Guest</span>
                <span className="font-inter text-[16px] leading-[24px] font-semibold text-[#101010]">1 Adult + 1 Child</span>
              </div>
              {/* Reservation Room Type */}
              <div className="flex flex-col gap-2 w-full">
                <span className="font-inter text-base leading-normal tracking-normal font-medium text-[#878787]">Reservation Room Type</span>
                <span className="font-inter text-[16px] leading-[24px] font-semibold text-[#101010]">1 Room for 1 Adult</span>
              </div>
              {/* Meeting Point */}
              <div className="flex flex-col gap-2 w-full">
                <span className="font-inter text-base leading-normal tracking-normal font-medium text-[#878787]">Meeting Point</span>
                <span className="font-inter text-[16px] leading-[24px] font-semibold text-[#101010]">Gatwick Airport (LGW), South of Central London</span>
              </div>
              {/* Contact */}
              <div className="flex flex-col gap-2 w-full">
                <span className="font-inter text-base leading-normal tracking-normal font-medium text-[#878787]">Contact</span>
                <span className="font-inter text-[16px] leading-[24px] font-semibold text-[#101010]">+6285287564872 or robbidarwis@flowforge.com</span>
              </div>
              {/* Cancellation cost */}
              <div className="flex flex-col gap-2 w-full">
                <span className="font-inter text-base leading-normal tracking-normal font-medium text-[#878787]">Cancellation cost</span>
                <span className="font-inter text-[16px] leading-[24px] font-semibold text-[#F14141]">This booking is non-refundable. Changing the dates of your stay isn&apos;t possible.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Confirmation & Payment */}
        <div className="w-full lg:w-[519px] space-y-6">
          {/* Booking Confirmed Section */}
          <div className="border-2 border-[#0A1805] rounded-xl bg-white p-6">
            <h2 className="text-2xl font-anton font-normal text-[#101010] uppercase mb-2">YOUR BOOKING IS CONFIRMED.</h2>
            <p className="text-base font-inter text-[#878787] tracking-normal leading-normal mb-4">Your payment was verified, you can use your booking trips in your dashboard now!</p>
            <div className="flex flex-col gap-4 text-base mb-4">
              {(dateStr || timeStr) && (
                <div className="flex justify-between items-center">
                  <span className="text-[#101010] text-base font-inter font-medium leading-normal tracking-normal">Schedule</span>
                  <span className="text-[#101010] text-base font-inter font-semibold leading-normal tracking-normal">{dateStr || '-'} • {timeStr || '-'}</span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="text-[#101010] text-base font-inter font-medium leading-normal tracking-normal">Payment Method</span>
                <span className="text-[#101010] text-base font-inter font-semibold leading-normal tracking-normal">Visa</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#101010] text-base font-inter font-medium leading-normal tracking-normal">Payment amount</span>
                <span className="text-[#101010] text-base font-inter font-semibold leading-normal tracking-normal">{currency} {(unitAmount/100).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
            </div>
            {customerEmail && (
              <p className="text-base font-normal font-inter text-[#101010] mb-4">We sent your confirmation email to <span className="text-[#101010] font-medium">{customerEmail}</span></p>
            )}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button variant="outline" className="flex-1 border-[#E0C469] font-inter text-base h-14 rounded-md flex items-center justify-center gap-2">
                <img src="/assets/images/printer.svg" alt="printer" />
                Print Full Version
              </Button>
              <Button onClick={payWithStripe} disabled={loadingPay || !unitAmount} className="flex-1 bg-[#E0C469] text-[#101010] hover:bg-[#E0C469]/90 font-inter text-base h-14 rounded-md flex items-center justify-center gap-2">
                <img src="/assets/images/booking.svg" alt="printer" />
                {loadingPay ? 'Processing…' : 'Pay with Stripe'}
              </Button>
            </div>
          </div>

          {/* Contact Host Section */}
          <div className="border-2 border-[#0A1805] rounded-xl bg-white p-6">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div className="lg:max-w-[500px] max-w-auto">
                <h3 className="text-xl font-anton text-[#101010] uppercase mb-2">Contact Your Host</h3>
                <p className="text-base font-inter text-[#878787]">Have a question or special request? Chat with your host</p>
              </div>
              <Button variant="outline" className="border-[#0A1805] font-inter text-base h-14 rounded-md px-6">Contact Host</Button>
            </div>
          </div>

          {/* Travel with Peace of Mind Section */}
          <div className="border-2 border-[#0A1805] rounded-xl bg-white p-6">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div className="lg:max-w-[500px] max-w-auto">
                <h3 className="text-xl font-anton text-[#101010] uppercase mb-2">Travel With Peace of Mind</h3>
                <p className="text-base font-inter text-[#878787]">Find info about traveling safely in our Safety Resource Center</p>
              </div>
              <Button variant="outline" className="border-[#0A1805] font-inter text-base h-14 rounded-md px-6">Resource Center</Button>
            </div>
          </div>

          
        </div>
      </div>
      
    </div>
  );
};

export default BookingDetailsContent;
