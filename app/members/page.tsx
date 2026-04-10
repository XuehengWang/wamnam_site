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
    style: "this girlie does everything",
    nationality: "Bulgaria",
    bullets: [
      "Leader/founder of WAMNAM",
      "Classically trained dancer with 10+ years’ experience",
      "stress stress stress",
    ],
    image: "/images/members/stef.JPG",
  },
  {
    name: "Georgia Green",
    account: "@ggia.gg",
    pronouns: "She/Her",
    style: "ort cloud",
    nationality: "scooooootish",
    bullets: ["1", "2", "3"],
    image: "/images/members/ggia.JPG",
  },
  {
    name: "Max Evans",
    account: "@maxev_",
    pronouns: "He/Him",
    style: "",
    nationality: "",
    bullets: ["1", "2", "3"],
    image: "/images/members/max.jpg",
  },
  {
    name: "Iva Stratieva",
    account: "@ivaxstr",
    pronouns: "She/Her",
    style: "Hip Hop, Contemporary Fusion",
    nationality: "Bulgaria",
    bullets: ["1", "2", "3"],
    image: "/images/members/iva.jpg",
  },
  {
    name: "Faye will complete here",
    account: "@chertsova.dance",
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
    name: "Faye will complete here1",
    account: "@chertsova.dance",
    pronouns: "She/Her",
    style: "this girlie does everything",
    nationality: "Bulgaria",
    bullets: [
      "Leader/founder of WAMNAM",
      "Classically trained dancer with 10+ years’ experience",
      "stress stress stress",
    ],
    image: "/images/members/jae.jpg",
  },
  {
    name: "Faye will complete here111",
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
    name: "TBD by Faye",
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
    name: "TBD by Faye haha",
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
    name: "TBD by Faye hahaha",
    account: "@chertsova.dance",
    pronouns: "She/Her",
    style: "this girlie does everything",
    nationality: "Bulgaria",
    bullets: [
      "Leader/founder of WAMNAM",
      "Classically trained dancer with 10+ years’ experience",
      "stress stress stress",
    ],
    image: "/images/members/stef.JPG",
  },
  
];


export default function MembersPage() {
  return (
    <main className="min-h-screen bg-[#efefef] text-slate-900">
      <TopNav />

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <h1 className={`text-center text-3xl font-normal tracking-tight text-black md:text-4xl ${youngSerif.className}`}>
          MEMBERS
        </h1>

        <div className="mt-14 grid gap-x-14 gap-y-14 md:grid-cols-2">
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
      <div className="grid grid-cols-[200px_1fr] gap-5">
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

        <div className="flex min-h-full flex-col">
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
      </div>
    </article>
  );
}