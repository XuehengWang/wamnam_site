import Image from "next/image";
import Link from "next/link";

// If you already extracted these into components:
import TopNav from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";

type Member = {
  name: string;
  handle: string;
  pronouns: string;
  style: string;
  nationality: string;
  bullets: string[];
  image: string; // put images in /public/images/members/...
};

const members: Member[] = [
  {
    name: "Stefani Chertsova",
    handle: "@chertsova.dance",
    pronouns: "She/Her",
    style: "this girlie does everything",
    nationality: "Bulgaria",
    bullets: [
      "Leader/founder of WAMNAM",
      "Classically trained dancer with 10+ years’ experience",
      "bullet point 3",
    ],
    image: "/images/members/stefani.jpg",
  },
  {
    name: "Georgia Green",
    handle: "@ggia.gg",
    pronouns: "She/Her",
    style: "",
    nationality: "",
    bullets: ["bullet point 1", "bullet point 2", "bullet point 3"],
    image: "/images/members/georgia.jpg",
  },
  {
    name: "Max Evans",
    handle: "@maxev_",
    pronouns: "He/Him",
    style: "",
    nationality: "",
    bullets: ["bullet point 1", "bullet point 2", "bullet point 3"],
    image: "/images/members/max.jpg",
  },
  {
    name: "Iva Stratieva",
    handle: "@ivaxstr",
    pronouns: "She/Her",
    style: "Hip Hop, Contemporary Fusion",
    nationality: "Bulgaria",
    bullets: ["bullet point 1", "bullet point 2", "bullet point 3"],
    image: "/images/members/iva.jpg",
  },
  // add more members here...
];

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <TopNav />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h1 className="text-center text-5xl font-extrabold tracking-tight">
          MEMBERS
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
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
    <article className="rounded-3xl bg-[#8B5A8E] p-10 text-white shadow-sm">
      <div className="grid gap-8 sm:grid-cols-[260px_1fr] sm:items-start">
        {/* Photo frame */}
        <div className="rounded-3xl bg-white p-3">
          <div className="relative overflow-hidden rounded-2xl bg-slate-100">
            <div className="relative aspect-[4/5]">
              <Image
                src={m.image}
                alt={m.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-extrabold leading-tight">{m.name}</h2>
          <div className="mt-1 text-lg font-semibold opacity-90">{m.handle}</div>

          <div className="mt-6 space-y-1 text-sm opacity-95">
            <div>
              <span className="opacity-90">Pronouns:</span> {m.pronouns}
            </div>
            <div>
              <span className="opacity-90">Style:</span> {m.style || "—"}
            </div>
            <div>
              <span className="opacity-90">Nationality:</span>{" "}
              {m.nationality || "—"}
            </div>
          </div>

          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm">
            {m.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          <div className="mt-8 flex justify-end">
            <Link
              href="#"
              className="rounded-full border border-white/40 bg-white/15 px-6 py-2 text-sm font-semibold hover:bg-white/25"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
