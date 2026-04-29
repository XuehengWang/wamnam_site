import Image from "next/image";
import Link from "next/link";


import TopNav from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";
import { youngSerif } from "@/lib/fonts";

type Member = {
  name: string;
  account: string;
  pronouns: string;
  style: string;
  nationality: string;
  bullets: string[];
  image: string; // put images in /public/images/members/...
};

const members: Member[] = [
  {
    name: "Stefani Chertsova",
    account: "@chertsova.dance",
    pronouns: "She/Her",
    style: "Contemporary/Jazz Funk",
    nationality: "Bulgarian",
    bullets: [
      "Leader/founder of WAMNAM",
      "Classically trained dancer with\n10+ years’ experience",
      "Professional dance teacher\nand choreographer",
    ],
    image: "/images/members/stef.JPG",
  },
  {
    name: "Georgia Green/Georgia Maeva Zelenova",
    account: "@ggia.gg",
    pronouns: "She/Her",
    style: "ort cloud",
    nationality: "scooooootish",
    bullets: ["1", "2", "3"],
    image: "/images/members/ggia.JPG",
  },
  {
    name: "Max Evans/Maks Ivanov",
    account: "@maxev_",
    pronouns: "He/Him",
    style: "england",
    nationality: "england",
    bullets: ["bole of waer", "2", "3"],
    image: "/images/members/max.jpg",
  },
  {
    name: "Iva Stratieva",
    account: "@ivaxstr",
    pronouns: "She/Her",
    style: "Hip Hop, Contemporary Fusion",
    nationality: "Bulgarian/Luxembourger",
    bullets: ["feta", "multicolour salt", "banitsa"],
    image: "/images/members/iva.jpg",
  },
  {
    name: "Matteo Putura/Matei Putrov",
    account: "@matt.put",
    pronouns: "She/Her",
    style: "this girlie does everything",
    nationality: "Bulgaria",
    bullets: [
      "Leader/founder of WAMNAM",
      "Classically trained dancer with 10+ years’ experience",
      "stress stress stress",
    ],
    image: "/images/members/matt.JPG",
  },
  {
    name: "Jowita Namyslak (Jae)", /*Yoana Namislova*/
    account: "@jaenamyslak",
    pronouns: "She/Her",
    style: "Afro / Commercial / Hip Hop",
    nationality: "Polish",
    bullets: [
      "Self / Professionally\ntrained dancer of 10+ years",
      "Professional choreographer\nand dance teacher",
      "Additional 5+ years of experience\nin stage performance - solo & groups",
    ],
    image: "/images/members/jae.jpg",
  },
  {
    name: "Zoë Hooper/Zornitsa Obruchova",
    account: "@chertsova.dance",
    pronouns: "She/Her",
    style: "this girlie does everything",
    nationality: "Bulgaria",
    bullets: [
      "Leader/founder of WAMNAM",
      "Classically trained dancer with 10+ years’ experience",
      "stress stress stress",
    ],
    image: "/images/members/zoe.jpg",
  },
  {
    name: "Alex Myers/Aleksandrova Mircheva",
    account: "@chertsova.dance",
    pronouns: "She/Her",
    style: "this girlie does everything",
    nationality: "Bulgaria",
    bullets: [
      "Leader/founder of WAMNAM",
      "Classically trained dancer with 10+ years’ experience",
      "stress stress stress",
    ],
    image: "/images/members/alex.JPG",
  },
  {
    name: "Caitlin Charters/Katerina Cherneva",
    account: "@chertsova.dance",
    pronouns: "She/Her",
    style: "this girlie does everything",
    nationality: "Bulgaria",
    bullets: [
      "Leader/founder of WAMNAM",
      "Classically trained dancer with 10+ years’ experience",
      "stress stress stress",
    ],
    image: "/images/members/caitlin.jpg",
  },
  {
    name: "Wayne Chang/Ivan (Vanko) Chanev",
    account: "@stickman",
    pronouns: "",
    style: "",
    nationality: "",
    bullets: [
      "1",
      "2",
      "3",
    ],
    image: "/images/members/stef.JPG",
  },
  
];
export default function MembersPage() {
  return (
    <main className="min-h-screen bg-[#efefef] text-slate-900">
      <TopNav />

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <h1
          className={`text-center text-3xl font-normal tracking-tight text-black md:text-4xl ${youngSerif.className}`}
        >
          MEMBERS
        </h1>

        {/* ✅ added items-stretch */}
        <div className="mt-14 grid gap-x-14 gap-y-14 md:grid-cols-2 items-stretch">
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
    <article className="rounded-[16px] bg-[#956297] px-6 py-6 text-white">
      
      <div className="grid grid-cols-[200px_1fr] items-start gap-5">
        
        <div className="rounded-[16px] bg-white p-[8px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] bg-[#e8d4c6]">
            <Image
              src={m.image}
              alt={m.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h2
            className={`text-[22px] leading-tight md:text-[24px] ${youngSerif.className}`}
          >
            {m.name}
          </h2>

          <div
            className={`mt-1 text-[15px] leading-none text-white/95 ${youngSerif.className}`}
          >
            {m.account}
          </div>

          <div className="mt-5 space-y-[2px] text-[14px] leading-[1.25] text-white/95">
            <div>Pronouns: {m.pronouns || "—"}</div>
            <div>Style: {m.style || "—"}</div>
            <div>Nationality: {m.nationality || "—"}</div>
          </div>

          <ul className="mt-5 list-disc space-y-1 pl-5 text-[14px] leading-[1.35] text-white/95">
            {m.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>

      </div>
    </article>
  );
}
