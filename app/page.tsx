import Image from "next/image";
import Link from "next/link";
import TopNav from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";

import { Inter, Young_Serif } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
});

type CardItem = {
  title: string;
  subtitle?: string;
  image: string;
  href?: string;
};


const upcoming: CardItem[] = [
  {
    title: "Theatre Performance - look alive",
    // subtitle: "Performances on 22nd & 23rd August",
    image: "/images/upcoming/Theatre_look_alive.jpg",
    
    // href: "#",
  },
  {
    title: "Dance Base Class Spring 2026 – Hip Hop Funkdementals",
    // subtitle: "Basics",
    image: "/images/upcoming/Dancebase_class_spring2026.jpg",
    // href: "#",
  },
];



const highlights: CardItem[] = [
  { title: "Video Project – Fall Back", 
    image: "/images/highlights/fall_back.png",
    // href: "#" 
  },
  {
    title: "Theatre Performance – A Digital Dance Odyssey",
    // subtitle: "Ignite 2025",
    image: "/images/highlights/Theatre_Odyssey.jpg", 
    // href: "#",
  },
  {
    title: "K-pop Covers by K-OW - Gnarly (Katseye)",
    image: "/images/highlights/gnarly_youtube_thumbnail.png",
    // href: "#",
  },
];




export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-slate-900">
      <TopNav />

      <Hero />

      <Marquee />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle>Upcoming activities</SectionTitle>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-3">
          {upcoming.map((item) => (
            <MediaCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-24">
          <SectionTitle>Crew highlights</SectionTitle>

          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-3">
            {highlights.map((item) => (
              <MediaCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}


function Marquee() {
  const text = "Theatre pieces - Performance - Concept Videos - ";

  return (
    <div className="border-y border-slate-200 bg-[#f8f8f6]">
      <div className="overflow-hidden py-4">
        <div className="marquee whitespace-nowrap text-[14px] text-slate-500">
          <span className="mx-4 inline-block">{text.repeat(8)}</span>
          <span aria-hidden className="mx-4 inline-block">
            {text.repeat(8)}
          </span>
        </div>
      </div>
    </div>
  );
}



function Hero() {
  return (
    <section className={`relative overflow-hidden bg-[#123434] ${inter.className}`}>
      {/* soft glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_75%_30%,rgba(255,255,255,0.06),transparent_24%),radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.04),transparent_26%)]" />

      {/* dotted texture */}
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative mx-auto grid max-w-[1400px] gap-16 px-16 py-8 md:grid-cols-[0.85fr_1.15fr] md:items-center lg:gap-20 lg:px-28">
        {/* left image frame */}
        <div className="relative overflow-hidden border border-white/10 bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
          <div className="relative aspect-[5360/3573]">
            <Image
              src="/images/home_page_photo.jpg"
              alt="WAMNAM group photo"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* right text panel */}
        <div className="flex flex-col justify-center rounded-2xl border border-white/20 bg-[#123434]/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-[2px] md:p-8 lg:p-10">
          <div>
            <h1
              className={`${youngSerif.className} text-[1.7rem] uppercase tracking-tight text-white md:text-[1.9rem]`}
            >
              WE ARE WAMNAM
            </h1>
            <p className="mt-3 max-w-2xl text-[13px] leading-4.5 text-white/88 md:mt-4 md:text-[14px] md:leading-5">
            {/* <p className="mt-6 max-w-2xl text-[14px] leading-5 text-white/88 md:text-[15px] md:leading-6"> */}
              We are an eclectic and experimental dance collective that merges
              diverse movement styles, theatre, comedy with social media visual
              arts campaigns. Comprised of dance performance artists from diverse
              backgrounds from Asia to Eastern Europe and Scotland, the group is
              driven by a shared passion for pushing creative boundaries and
              crafting thought-provoking work with current themes that affect
              today&apos;s youth. With a focus on innovation through our
              multi-genre and multimedia approach, WAMNAM explores novel concepts
              that challenge conventions. We are a democratic dance crew that
              believes each individual artist brings a unique and fundamental
              talent, skill and perspective. We pride ourselves on having
              refreshing ideas due to this approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-5xl font-bold tracking-tight text-black">
      {children}
    </h2>
  );
}

function MediaCard({ item }: { item: CardItem }) {
  const card = (
    <article className="group flex h-full flex-col">
      <div className="relative overflow-hidden bg-slate-100">
        <div className="relative aspect-[16/9]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-base font-semibold leading-6 text-slate-900">
          {item.title}
        </h3>
        {item.subtitle && (
          <p className="mt-1 text-sm text-slate-600">{item.subtitle}</p>
        )}
      </div>
    </article>
  );

  if (!item.href || item.href === "#") {
    return <div>{card}</div>;
  }

  return <Link href={item.href}>{card}</Link>;
}