import Image from "next/image";
import Link from "next/link";

import TopNav from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";
import { youngSerif } from "@/lib/fonts";

export const metadata = {
  openGraph: {
    images: [
      {
        url: "/images/home_page_photo.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

type Member = {
  name: string;
  account: string;
  pronouns: string;
  style: string;
  nationality: string;
  bullets: string[];
  image: string;
};

const members: Member[] = [
  {
    name: "Stefani Chertsova",
    account: "@chertsova.dance",
    pronouns: "She / Her",
    style: "Contemporary / Jazz Funk",
    nationality: "Bulgarian",
    bullets: [
      "Leader/founder of WAMNAM",
      "Classically trained dancer with BA (Hons) in Dance & Choreography",
      "Professional dance teacher and choreographer with 20+ years experience",
    ],
    image: "/images/members/stef.JPG",
  },
  {
    name: "Georgia Green (Ggia)",
    account: "@ggia.gg",
    pronouns: "She / Her",
    style: "Contemporary / Commercial Jazz Funk",
    nationality: "Scottish",
    bullets: [
      "Professional vocational training in Contemporary, Ballet and Jazz",
      "Choreographer with professional credits alongside international music producers.",
      "BA (Hons) in Dance and Drama (1st Class)",
    ],
    image: "/images/members/ggia.JPG",
  },
  {
    name: "Max Evans",
    account: "@maxev_",
    pronouns: "He / Him",
    style: "Hip-hop / Commercial / Contemporary",
    nationality: "British",
    bullets: [
      "Trained as a Contemporary dancer",
      "Professional Choreographer and Dance teacher",
      "Videographer and Video Editor",
    ],
    image: "/images/members/max.jpg",
  },
  {
    name: "Iva Stratieva",
    account: "@ivaxstr",
    pronouns: "She / Her",
    style: "Hip Hop / Contemporary Fusion",
    nationality: "Bulgarian / Luxembourger",
    bullets: ["feta", "multicolour salt", "banitsa"],
    image: "/images/members/iva.jpg",
  },
  {
    name: "Matteo Putura",
    account: "@matt.put",
    pronouns: "They / Them",
    style: "Hip-hop",
    nationality: "Indonesian",
    bullets: [
      "5+ years of hip-hop dance experience",
      "Dance teacher and choreographer",
      "Enjoy your food",
    ],
    image: "/images/members/matt.JPG",
  },
  {
    name: "Jowita Namyslak (Jae)",
    account: "@jaenamyslak",
    pronouns: "She / Her",
    style: "Afro / Commercial / Hip-hop",
    nationality: "Polish",
    bullets: [
      "Self / professionally trained dancer of 10+ years",
      "Professional choreographer and dance teacher",
      "Additional 5+ years of stage performance experience",
    ],
    image: "/images/members/jae.jpg",
  },
  {
    name: "Zoë Hooper",
    account: "@zoe_danceartist",
    pronouns: "She / Her",
    style: "Contemporary / Pole dance",
    nationality: "Malaysian Chinese",
    bullets: [
      "Classically trained in Ballet, Contemporary and Jazz",
      "Multidisciplinary dance artist and choreographer",
      "BA Dance and Drama (1st)",
    ],
    image: "/images/members/zoe.jpg",
  },
];

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-[#efefef] text-slate-900">
      <TopNav />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1
          className={`text-center text-3xl md:text-4xl tracking-tight text-black ${youngSerif.className}`}
        >
          MEMBERS
        </h1>

        {/* responsive grid */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
          {members.map((m) => (
            <MemberCard key={m.name} m={m} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function MemberCard({ m }: { m: Member }) {
  return (
    <article className="w-full rounded-[16px] bg-[#956297] px-3 py-3 md:px-6 md:py-6 text-white transition hover:scale-[1.01]">
      
      {/* ALWAYS horizontal */}
      <div className="flex gap-4 md:gap-5">
        
        {/* Image */}
        <div className="w-[110px] md:w-[200px] shrink-0 rounded-[16px] bg-white p-[6px] md:p-[8px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] bg-[#e8d4c6]">
            <Image
              src={m.image}
              alt={m.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <h2
            className={`text-[16px] md:text-[24px] leading-tight ${youngSerif.className}`}
          >
            {m.name}
          </h2>

          <div
            className={`mt-1 text-[13px] md:text-[15px] text-white/95 ${youngSerif.className}`}
          >
            {m.account}
          </div>

          <div className="mt-3 text-[12px] md:text-[14px] text-white/95 leading-[1.25]">
            <div>Pronouns: {m.pronouns || "—"}</div>
            <div>Style: {m.style || "—"}</div>
            <div>Nationality: {m.nationality || "—"}</div>
          </div>

          <ul className="mt-3 list-disc pl-5 text-[12px] md:text-[14px] leading-[1.35] text-white/95">
            {m.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
