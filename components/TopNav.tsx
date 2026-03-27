import Image from "next/image";
import Link from "next/link";


export default function TopNav() {
  return (
    <header className="bg-pink-200/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-0">
        <a href="/" className="block">
          <Image
            src="/images/logo.png"
            alt="WAMNAM"
            width={80}
            height={80}
          />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link className="opacity-80 hover:opacity-100" href="/portfolio">
            Portfolio
          </Link>

          <Link className="opacity-80 hover:opacity-100" href="/members">
            Members
          </Link>
        </nav>

        <button
          className="inline-flex items-center rounded-lg border border-slate-900/10 bg-white/30 px-3 py-1 text-sm font-semibold md:hidden"
          type="button"
        >
          Menu
        </button>
      </div>
    </header>
  );
}


