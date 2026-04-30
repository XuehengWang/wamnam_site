import Image from "next/image";
import Link from "next/link";
import { youngSerif } from "@/lib/fonts";

export default function TopNav() {
  return (
    <header className={`sticky top-0 z-50 bg-pink-200/90 ${youngSerif.className}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        
        {/* Logo */}
        <Link href="/" className="block">
          <Image
            src="/images/logo1.png"
            alt="WAMNAM"
            width={60}
            height={40}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          
          {/* Portfolio Dropdown */}
          <div className="group relative">
            <Link
              href="/portfolio"
              className="opacity-80 hover:opacity-100"
            >
              Portfolio
            </Link>

            <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-40 -translate-x-1/2 rounded-2xl border border-[#2e5960]/20 bg-white/95 p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <Link
                href="/portfolio/video_project"
                className="block rounded-xl px-2 py-2 text-sm text-slate-800 hover:bg-[#9bd4e1]/40"
              >
                Video Projects
              </Link>

              <Link
                href="/portfolio/live"
                className="block rounded-xl px-2 py-2 text-sm text-slate-800 hover:bg-[#9bd4e1]/40"
              >
                Theatre & Live
              </Link>

              <Link
                href="/portfolio/teach"
                className="block rounded-xl px-2 py-2 text-sm text-slate-800 hover:bg-[#9bd4e1]/40"
              >
                Teaching
              </Link>

              <Link
                href="/portfolio/kow"
                className="block rounded-xl px-2 py-2 text-sm text-slate-800 hover:bg-[#9bd4e1]/40"
              >
                KOW
              </Link>
            </div>
          </div>

          <Link href="/members" className="opacity-80 hover:opacity-100">
            Members
          </Link>

          <Link href="/about" className="opacity-80 hover:opacity-100">
            About Us
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <nav className="flex items-center gap-4 text-sm md:hidden">
          <Link href="/portfolio" className="opacity-80">
            Portfolio
          </Link>
          <Link href="/members" className="opacity-80">
            Members
          </Link>
          <Link href="/about" className="opacity-80">
            About
          </Link>
        </nav>

      </div>
    </header>
  );
}
