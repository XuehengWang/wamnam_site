export type PortfolioCategory =
  | "video-projects"
  | "theatre-live-performances"
  | "teaching-experience";

export type PortfolioItem = {
  title: string;
  category: PortfolioCategory;
  image: string;
  year?: string;
  subtitle?: string;
  dateLocation?: string;
  credits?: string;
  description?: string;
  youtubeUrl?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Fall Back",
    category: "video-projects",
    year: "2025",
    credits:
      "Stefani (choreographer) | Alex | Caitlin | Georgia | Iva | Jae | Matteo | Max | Zoë",
    image: "/images/portfolio/fall_back.png",
    youtubeUrl: "#",
  },
  {
    title: "Trendsetter",
    category: "video-projects",
    year: "2024",
    credits:
      "Alex (choreographer) | Caitlin | Georgia | Monica | Stefani | Zoë",
    image: "/images/portfolio/trendsetter.png",
    youtubeUrl: "#",
  },
  {
    title: "Guess",
    category: "video-projects",
    year: "2024",
    credits:
      "Caitlin (choreographer) | Alex | Georgia | Monica | Stefani",
    image: "/images/portfolio/guess.png",
    youtubeUrl: "#https://youtu.be/trQAZQuvz1w?si=NjVpNAKurRHeQR4S",
  },
  {
    title: "IGNITE 2026",
    category: "theatre-live-performances",
    subtitle: "[Look Aive]",
    dateLocation: "28/02/2025, Church Hill Theatre Edinburgh",
    credits: "Caitlin | Georgia | Iva | Jae/nMatteo | Max | Stefani | Wayne | Zoë",
    image: "/images/portfolio/ignite_2026.jpg",
  },
  {
    title: "Springboard 2025",
    category: "theatre-live-performances",
    subtitle: "[Project WAMNAM]",
    dateLocation: "22-23/08/2025, PASS Theatre Edinburgh College",
    credits: "Alex | Caitlin | Georgia | Iva/nJae | Matteo | Max | Stefani | Zoë",
    image: "/images/portfolio/springboard 2025.jpg",
  },
  {
    title: "IGNITE 2025",
    category: "theatre-live-performances",
    subtitle: "[Project WAMNAM]",
    dateLocation: "24/04/2025, Church Hill Theatre Edinburgh",
    credits: "Caitlin | Georgia | Jae | Matteo | Max | Stefani | Zoë",
    image: "/images/portfolio/ignite_2025.jpg",
  },
  {
    title: "Hip Hop Funkementals Course",
    category: "teaching-experience",
    description:
      "Hip Hop Funkamentals @ Dance Base, Spring 2025 - Currently taught by Iva & Matt",
    image: "/images/portfolio/hiphop_course.jpg",
  },
  {
    title: "Wamnam Roulette",
    category: "teaching-experience",
    description:
      "Open Choreo Classes, Self-organised, 2024 Taught by Caitlin, Georgia, Max, Monica, Stefani, Wayne, Zoë",
    image: "/images/teaching/wamnam-roulette.jpg",
  },
];
