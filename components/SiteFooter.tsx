import { Inter, Young_Serif } from "next/font/google";
import Image from "next/image";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

export default function SiteFooter() {
  return (
    // <footer className={`bg-[#123434] ${inter.className}`}> // default font already
    <footer className={`bg-[#123434]`}>
      <div className="mx-auto max-w-6xl px-6 py-6 text-white/80"> 
        <div className="text-sm font-semibold text-white">WAMNAM Dance Crew</div>

        <div className="mt-5 space-y-3 text-sm">
          <a
            className="flex items-center gap-3 hover:text-white"
            href="https://www.instagram.com/wamnam.official/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <span className="h-5 w-5 rounded bg-white/20" aria-hidden /> */}
            <Image
              src="/ins_logo.png"
              alt="Instagram logo"
              width={30}
              height={30}
              className="h-7.5 w-7.5 object-contain"
            />
            <span>@wamnam.official</span>
          </a>

          <a
            className="flex items-center gap-3 hover:text-white"
            href="https://www.youtube.com/@WAMNAM"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <span className="h-5 w-5 rounded bg-white/20" aria-hidden /> */}
            <Image
              src="/youtube_logo.png"
              alt="Instagram logo"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
            <span>@WAMNAM</span>
          </a>
        </div>
      </div>
    </footer>
  );
}