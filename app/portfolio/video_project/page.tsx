// import Image from "next/image";
// import Link from "next/link";
// import TopNav from "@/components/TopNav";
// import SiteFooter from "@/components/SiteFooter";
// import { youngSerif } from "@/lib/fonts";

// type Project = {
//   title: string;
//   year: string;
//   credits: string;
//   image: string;
//   youtubeUrl: string;
// };

// const projects: Project[] = [
//   {
//     title: "Fall Back",
//     year: "2025",
//     credits:
//       "Stefani (choreographer) | Alex | Caitlin | Georgia | Iva | Jae | Matteo | Max | Zoë",
//     image: "/images/projects/fallback.jpg",
//     youtubeUrl: "#",
//   },
//   {
//     title: "Trendsetter",
//     year: "2024",
//     credits:
//       "Alex (choreographer) | Caitlin | Georgia | Monica | Stefani | Zoë",
//     image: "/images/projects/trendsetter.jpg",
//     youtubeUrl: "#",
//   },
//   {
//     title: "Project Title 3",
//     year: "2024",
//     credits:
//       "Choreographer | Member 1 | Member 2 | Member 3 | Member 4",
//     image: "/images/projects/project-3.jpg",
//     youtubeUrl: "#",
//   },
//   {
//     title: "Project Title 4",
//     year: "2023",
//     credits:
//       "Choreographer | Member 1 | Member 2 | Member 3 | Member 4",
//     image: "/images/projects/project-4.jpg",
//     youtubeUrl: "#",
//   },
// ];

// export default function PortfolioPage() {
//   return (
//     <main className="min-h-screen bg-[#efefef] text-black">
//       <TopNav />

//       <section className="mx-auto max-w-6xl px-8 py-12 md:px-10">
//         <h1 className={`text-center text-3xl font-normal tracking-tight text-black md:text-4xl ${youngSerif.className}`}>
//           Video Projects
//         </h1>

//         <div className="mt-14 grid gap-x-14 gap-y-14 md:grid-cols-2">
//           {projects.map((project) => (
//             <ProjectCard key={project.title} project={project} />
//           ))}
//         </div>
//       </section>

//       <SiteFooter />
//     </main>
//   );
// }

// function ProjectCard({ project }: { project: Project }) {
//   return (
//     <article className="rounded-[16px] border-[2px] border-[#a8deea] bg-[#f8f8f8] px-6 py-6 shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
//       <div className="mx-auto max-w-[460px]">
//         <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] bg-[#ddd]">
//           <Image
//             src={project.image}
//             alt={project.title}
//             fill
//             className="object-cover"
//           />
//         </div>

//         <div className="mt-4 text-center">
//           <h2
//             className={`text-[22px] leading-none text-[#2b0f0f] md:text-[24px] ${youngSerif.className}`}
//           >
//             {project.title}
//           </h2>

//           <div className="mt-4 text-[15px] font-bold text-black">
//             [{project.year}]
//           </div>

//           <p className="mx-auto mt-4 max-w-[500px] text-[18px] font-semibold leading-[1.15] text-black">
//             {project.credits}
//           </p>

//           <div className="mt-4 flex justify-end">
//             <Link
//               href={project.youtubeUrl}
//               className="text-[18px] font-bold text-[#2a7f84] underline underline-offset-2 hover:opacity-80"
//             >
//               {"> watch this on youtube"}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }


import TopNav from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";
import PortfolioCard from "@/components/PortfolioCard";
import { youngSerif } from "@/lib/fonts";
import { portfolioItems } from "@/lib/portfolio_data";

const items = portfolioItems.filter(
  (item) => item.category === "video-projects"
);

export default function VideoProjectsPage() {
  return (
    <main className="min-h-screen bg-[#efefef] text-black">
      <TopNav />

      <section className="mx-auto max-w-6xl px-8 py-12 md:px-10">
        <h1
          className={`text-center text-3xl font-normal tracking-tight text-black md:text-4xl ${youngSerif.className}`}
        >
          Video Projects
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