import Image from "next/image";
import Link from "next/link";
import TopNav from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";
import { youngSerif } from "@/lib/fonts";

type CoverItem = {
  title: string;
  image: string;
  // href: string;
};

const covers: CoverItem[] = [
  {
    title: "KATSEYE(캣츠아이) - 'Gnarly'",
    image: "/images/K-ow/Gnarly.jpg",
    //href: "#",
  },
  {
    title: "LE SSERAFIM (르세라핌) 'Blue Flame' (Changwon K-Pop World Festival UK finalist)",
    image: "/images/K-ow/Blueflame.png",
    // href: "#",
  },
  {
    title: "Faye will complete others:p",
    image: "/images/K-ow/is_this_love.png",
    // href: "#",
  },
  
];


export default function KOWPage() {
  return (
    <main className="min-h-screen bg-[#efefef] text-black">
      <TopNav />

      <section className="bg-[#062f33]">
        <div
          className="relative overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        >
          <div className="mx-auto max-w-[1436px] px-14 py-8"> 
            <div className="rounded-t-[22px] bg-[rgba(6,47,51,0.88)] px-14 py-6">
              <div className="grid items-start gap-12 lg:grid-cols-[1.3fr_0.75fr]">
                <div className="rounded-[14px] border border-white/20 bg-[radial-gradient(circle_at_top_left,rgba(62,120,120,0.35),rgba(7,42,46,0.65)_60%,rgba(6,47,51,0.85))] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                  <h1
                    className={`text-[32px] text-white md:text-[36px] ${youngSerif.className}`}
                  >
                    K-OW
                  </h1>

                  <p className="mt-10 max-w-[1020px] text-[16px] leading-[1.45] text-white/90">
                    K-OW is a branch of WAMNAM that does K-pop cover videos.
                    blablablablablablablablaba blablablablablablablaba
                    blablablablablablaba blablablablablablablablaba
                    blablablablablablaba blablablablablablaba
                    blablablablablablaba blablablablablablaba
                    blablablablablablaba blablablablablablaba
                  </p>

                  <div className="mt-10 flex justify-end">
                    <Link
                      href="#"
                      className="rounded-[10px] border border-white/20 bg-[#7c9393] px-5 py-3 text-[16px] font-semibold text-white shadow-[0_6px_16px_rgba(0,0,0,0.2)] transition hover:opacity-90"
                    >
                      Youtube Playlist
                    </Link>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-[420px] overflow-hidden bg-black">
                    <div className="relative aspect-[1.28/1]">
                      <Image
                        src="/images/kow_logo.png"
                        alt="K-OW artwork"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-12 py-12 md:py-16">
          <h2
            className={`text-center text-3xl text-black md:text-4xl ${youngSerif.className}`}
          >
            Our covers
          </h2>

          <div className="mt-16 grid gap-x-18 gap-y-16 md:grid-cols-2">
            {covers.map((cover) => (
              <CoverCard key={cover.title} cover={cover} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function CoverCard({ cover }: { cover: CoverItem }) {
  return (
    // <article>
    //   <Link href={cover.href} className="block">
    //     <div className="relative overflow-hidden bg-[#e9e9e9]">
    //       <div className="relative aspect-[1.52/1]">
    //         <Image
    //           src={cover.image}
    //           alt={cover.title}
    //           fill
    //           className="object-cover"
    //         />
    //       </div>
    //     </div>

    //     <h3 className="mx-auto mt-8 max-w-[660px] text-center text-[22px] font-semibold leading-[1.25] text-black md:text-[28px]">
    //       {cover.title}
    //     </h3>
    //   </Link>
    // </article>
    <article>
        <div className="relative overflow-hidden bg-[#e9e9e9]">
          <div className="relative aspect-[1.8/1]">
            <Image
              src={cover.image}
              alt={cover.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h3 className="mx-auto mt-8 max-w-[660px] text-center text-[16px] font-semibold leading-[1.25] text-black md:text-[20px]">
          {cover.title}
        </h3>
    </article>
  );
}