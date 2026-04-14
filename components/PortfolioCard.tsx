import Image from "next/image";
import Link from "next/link";
import { youngSerif } from "@/lib/fonts";
import type { PortfolioItem } from "@/lib/portfolio_data";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="rounded-[16px] border-[2px] border-[#a8deea] bg-[#f8f8f8] px-6 py-6 shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
      <div className="mx-auto max-w-[460px]">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] bg-[#ddd]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-4 text-center">
          <h2
            className={`text-[22px] leading-none text-[#2b0f0f] md:text-[24px] ${youngSerif.className}`}
          >
            {item.title}
          </h2>

          {item.year && (
            <div className="mt-4 text-[12px] font-bold text-black">
              [{item.year}]
            </div>
          )}

          {item.subtitle && (
            <div className="mt-4 text-[12px] font-bold text-black">
              {item.subtitle}
            </div>
          )}

          {item.dateLocation && (
            <p className="mx-auto mt-4 max-w-[500px] text-[14px] font-semibold leading-[1.15] text-black">
              {item.dateLocation}
            </p>
          )}

          {item.description && (
            <p className="mx-auto mt-4 max-w-[500px] text-[14px] font-semibold leading-[1.15] text-black">
              {item.description}
            </p>
          )}

          {item.credits && (
            <p className="mx-auto mt-4 max-w-[500px] text-[14px] font-semibold leading-[1.15] text-black">
              {item.credits}
            </p>
          )}

          {item.youtubeUrl && item.category === "video-projects" && (
            <div className="mt-4 flex justify-end">
              <a
  href={item.youtubeUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="text-[16px] font-bold text-[#2a7f84] underline underline-offset-2 hover:opacity-80"
>
  {"> watch this on youtube"}
</a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
