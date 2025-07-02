'use client'
// app/(protected)/layout.tsx

import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { usePathname } from 'next/navigation';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const navbarTheme =
    pathname === '/contact' ||
    pathname === '/excursions' ||
    pathname === '/private-tours' ||
    pathname === '/booking' ||
    pathname === '/booking-details'
      ? 'light'
      : 'dark';
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar theme={navbarTheme} />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}