import TopNav from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";
import PortfolioCard from "@/components/PortfolioCard";
import { youngSerif } from "@/lib/fonts";
import { portfolioItems } from "@/lib/portfolio_data";

const items = portfolioItems.filter(
  (item) => item.category === "theatre-live-performances"
);

export default function TheatreLivePerformancesPage() {
  return (
    <main className="min-h-screen bg-[#efefef] text-black">
      <TopNav />

      <section className="mx-auto max-w-6xl px-8 py-12 md:px-10">
        <h1
          className={`text-center text-3xl font-normal tracking-tight text-black md:text-4xl ${youngSerif.className}`}
        >
          Theatre live performances
        </h1>

        <div className="mt-14 grid gap-x-14 gap-y-14 md:grid-cols-2">
          {items.map((item) => (
            <PortfolioCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}