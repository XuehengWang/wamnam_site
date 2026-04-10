import Image from "next/image";
import TopNav from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";
import { youngSerif } from "@/lib/fonts";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <TopNav />

      {/* About photo */}
      <section className="relative h-[410px] w-full overflow-hidden">
        <Image
          src="/images/about/about.jpg"
          alt="About WAMNAM"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-[rgba(113,77,111,0.38)]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className={`text-center text-[42px] text-white md:text-[56px] ${youngSerif.className}`}
          >
            About WAMNAM
          </h1>
        </div>
      </section>

      {/* text */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-6xl px-8 py-24 md:px-10 md:py-28">
          <div className="max-w-[1080px]">
            <h2
              className={`text-[30px] leading-[1.15] text-black md:text-[40px] ${youngSerif.className}`}
            >
              Fun and Eclectic Edinburgh-based Dance Collective
            </h2>

            <div className="mt-10 max-w-[1120px] space-y-10 text-[16px] leading-[1.35] text-black/85">
              <p>
                We are an eclectic and experimental dance collective that merges
                diverse movement styles, theatre, comedy with social media
                visual arts campaigns. Comprised of dance performance artists
                from diverse backgrounds from Asia to Eastern Europe and
                Scotland, the group is driven by a shared passion for pushing
                creative boundaries and crafting thought-provoking work with
                current themes that affect today’s youth. With a focus on
                innovation through our multi-genre and multimedia approach,
                WAMNAM explores novel concepts that challenge conventions. We
                are a democratic dance crew that believes each individual artist
                brings a unique and fundamental talent, skill and perspective.
                We pride ourselves on having refreshing ideas due to this
                approach.
              </p>

              <p>
                Our main theatre pieces are titled Digital Dance Odyssey and
                Project WAMNAM. Alongside our long form 20 minute show pieces,
                we have developed and published original choreography pieces
                (merging different styles) along with high quality visuals
                across different social media platforms such as YouTube, Tik
                Tok, Instagram, Red Note and Bilibili. Our theatre pieces have
                been performed at Dance Base Scratch Night Oct 2023, Ignite 2024
                (Traverse Theatre) and Ignite 2025 (Church Hill). Digital Dance
                Odyssey was also featured in The Scotsman 2024 with review and
                video in The Scotsman Sessions.
              </p>
            </div>
          </div>

          {/* Bottom-right*/}
          <div className="mt-16 flex justify-end">
            <div className="relative h-[235px] w-[360px] overflow-hidden bg-[#666]">
              <Image
                src="/images/dancehouse(nonono).png"
                alt="Sponsor"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}