import Link from "next/link";

interface BookingHeroProps {
  title: string;
  onBack?: () => void;
  backLink?: string;
}

const BookingHero = ({ title, onBack, backLink }: BookingHeroProps) => (
  <div className="flex items-center gap-4 pt-24 lg:px-20 px-5 md:px-8">
    {backLink ? (
      <Link href={backLink} className="w-12 h-12 border-2 border-[#101010] rounded-md flex items-center justify-center bg-white hover:bg-gray-100 transition" aria-label="Go Back">
        <img src="/assets/images/left-chevron.svg" alt="go back" />
      </Link>
    ) : (
      <button
        onClick={onBack}
        className="w-12 h-12 border-2 border-[#101010] rounded-md flex items-center justify-center bg-white hover:bg-gray-100 transition"
        aria-label="Go Back"
        type="button"
      >
        <img src="/assets/images/left-chevron.svg" alt="go back" />
      </button>
    )}
    <h1 className="font-anton text-3xl md:text-4xl lg:text-5xl font-normal uppercase text-[#101010] tracking-tight">
      {title}
    </h1>
  </div>
);

export default BookingHero;
