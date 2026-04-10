import Link from "next/link";
import TopNav from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";
import PortfolioCard from "@/components/PortfolioCard";
import { youngSerif } from "@/lib/fonts";
import { portfolioItems } from "@/lib/portfolio_data";

const videoProjects = portfolioItems.filter(
  (item) => item.category === "video-projects"
);

const theatreLive = portfolioItems.filter(
  (item) => item.category === "theatre-live-performances"
);

const teachingExperience = portfolioItems.filter(
  (item) => item.category === "teaching-experience"
);

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#efefef] text-black">
    {/* <main className="min-h-screen bg-white text-black"> */}
      <TopNav />

      <section className="mx-auto max-w-6xl px-8 py-12 md:px-10">
        <h1
          className={`text-center text-3xl font-normal tracking-tight text-black md:text-4xl ${youngSerif.className}`}
        >
          PORTFOLIO - choreography & projects
        </h1>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-7">
          <Link
            href="/portfolio/video_project"
            className="rounded-full border border-[#2e5960] bg-[#9bd4e1] px-7 py-2 text-[16px] leading-none text-[#234147] hover:opacity-90"
          >
            Video Projects
          </Link>

          <Link
            href="/portfolio/live"
            className="rounded-full border border-[#2e5960] bg-[#9bd4e1] px-7 py-2 text-[16px] leading-none text-[#234147] hover:opacity-90"
          >
            Theatre & Live
          </Link>

          <Link
            href="/portfolio/teach"
            className="rounded-full border border-[#2e5960] bg-[#9bd4e1] px-7 py-2 text-[16px] leading-none text-[#234147] hover:opacity-90"
          >
            Teaching
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-8 pb-10 md:px-10">
        <CategorySection title="Video Projects" items={videoProjects} />
        <CategorySection title="Theatre live performances" items={theatreLive} />
        <CategorySection title="Teaching experience" items={teachingExperience} />
      </section>

      <SiteFooter />
    </main>
  );
}

function CategorySection({
  title,
  items,
}: {
  title: string;
  items: typeof portfolioItems;
}) {
  return (
    <section className="mt-12">
      <h2
        className={`text-center text-3xl font-normal tracking-tight text-black md:text-3xl ${youngSerif.className}`}
      >
        {title}
      </h2>

      <div className="mt-14 grid gap-x-14 gap-y-14 md:grid-cols-2">
        {items.map((item) => (
          <PortfolioCard key={`${item.category}-${item.title}`} item={item} />
        ))}
      </div>
    </section>
  );
}