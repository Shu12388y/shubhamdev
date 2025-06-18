import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shubham",
  initials: "SP",
  url: "https://dillion.io",
  location: "Jharkhand, IND",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Full Stack Developer & Design Engineer. I bring stunning UI to life with code. Obsessed with building SaaS products that solve real-world problems.",
  summary:
    "After years of building products and helping startups ship delightful user interfaces, I now focus on building and scaling modern web apps with React, Next.js, Tailwind CSS, and design systems like Shadcn UI. I've launched platforms like letscode.in and letsremotejob.com, and I love crafting beautiful UIs that work at scale.",
  avatarUrl: "https://avatars.githubusercontent.com/u/91714143?v=4",
  skills: [
    "Figma",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Framer Motion",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Socket.IO",
    "Redis",
    "Docker",
    "AWS",
    "GitHub Actions",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "http://dev.to/shu12388y", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "spl.sp999@gmail.com",
    tel: "+91 9905575178",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shu12388y/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shubham-paul-5a3a8a21b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/shubham007913",
        icon: Icons.x,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Hign On Content Pvt. Ltd.",
      href: "https://www.linkedin.com/company/highoncontent/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D560BAQHp07wv17M6AA/company-logo_200_200/B56ZaUWO6PHAAM-/0/1746245579657?e=1755734400&v=beta&t=dHIvdBe0D-Pm4e5etuCA6zYSRNK1VRI6ekxjSDf5Qi8",
      start: "Nov 2024",
      end: "Present",
      description:
        "Architected and wrote the entire MVPs and  internal admin  dashboard using React, Zustand, TypeScript, and Nodejs.",
    },
    {
      company: "Times Chains Labs",
      badges: [],
      href: "https://timechainlabs.io/",
      location: "Remote",
      title: "Frontend Web3 Developer",
      logoUrl: "https://timechainlabs.io/tcl.svg",
      start: "June 2024",
      end: "Nov 2024",
      description:
        "Developed the frontend of a decentralized donation application (DApp) enabling secure, transparent crypto-based contributions. Integrated the Neuron Web3 Wallet for seamless user authentication and transaction signing. Built responsive UI components, implemented wallet connection logic, and optimized performance for blockchain-based interactions. Collaborated closely with the blockchain and product teams to ensure smooth on-chain and off-chain integration.",
    },
    {
      company: "Let's Code",
      href: "https://lets-code.co.in/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D560BAQGCmY_pR65jsg/img-crop_100/img-crop_100/0/1737638655880?e=1755734400&v=beta&t=v8IEhaTZ33h0mJ2K7624ARFDuZoTI7FFnHEAi0q0u0g",
      start: "Dec 2023",
      end: "June 2024",
      description:
        "Built interactive tech content platform for students with React, Next.js, Tailwind CSS, and MongoDB. Designed responsive UI, SEO-optimized static pages, and integrated admin dashboard.",
    },
  ],
  education: [
    {
      school: "C. V. Raman Global University",
      href: "https://cgu-odisha.ac.in/",
      degree: "Bachelor's of Technology",
      logoUrl:
        "https://cgu-odisha.ac.in/wp-content/uploads/2023/04/logo-new.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Let's Code",
      href: "https://lets-code.co.in/",
      dates: "Dec 2023 - Present",
      active: true,
      description:
        "Built and scaled a community-driven platform to help students prepare for technical interviews. The site provides high-quality content such as coding problems, system design notes, cheat sheets, and curated roadmaps. Designed an intuitive UI to maximize user engagement and readability. Optimized performance for high traffic (~30K daily active users). Added features like personalized learning paths, resume-building tools, and mock interview scheduling.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Mongoose",
        "TailwindCSS",
        "Shadcn UI",
        "Clerk",
        "Gemini AI",
        "Turbo",
      ],
      links: [
        {
          type: "Website",
          href: "https://lets-code.co.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://iikpslk665.ufs.sh/f/A8XxLx1G8xsXemmTmpHFYZ0lvtgXUcwVA2hr3zupkd9C4JMi",
    },
    {
      title: "Let's Resource",
      href: "https://letsresource.in/",
      dates: "June 2023 - August 2024",
      active: true,
      description:
        "Designed and developed a centralized platform to discover and share top-quality developer resources. Let's Resource features curated collections of tools, books, articles, GitHub repositories, and learning materials for aspiring developers, startups, and tech professionals. Implemented a fast, clean UI with powerful search and category-based filtering to enhance discoverability. Scaled the platform to over 5,000+ active users with strong community engagement.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Express JS",
        "TailwindCSS",
        "AWS",
        "Vercel",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://letsresource.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://iikpslk665.ufs.sh/f/A8XxLx1G8xsX40Y1k3SXSp0F9in3msDKe8YMWtJfa7okjvlH",
    },
    {
      title: "Remote.io",
      href: "https://letsremotejob.com/",
      dates: "April 2024 - September 2024",
      active: true,
      description:
        "Created a remote job discovery platform tailored for developers and tech professionals seeking global work-from-home opportunities. The platform allows users to browse and apply to verified remote jobs, schedule mock interviews, build custom portfolios, and access curated resources for resume and system design preparation. Implemented subscription-based access with Free and Pro tiers, enabling advanced features for serious job seekers.",
      technologies: [
        "ReactJS",
        "NodeJS",
        "Clerk",
        "Cal.com",
        "Paypal",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
        "Socket.IO",
      ],
      links: [
        {
          type: "Website",
          href: "https://letsremotejob.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://iikpslk665.ufs.sh/f/A8XxLx1G8xsXfSObBxCyAQVy9PjceSHW8viz7bgGFsdaXCq3",
    },
    {
      title: "MDX CMS for developers",
      href: "https://mdx-cms.onrender.com",
      dates: "April 2023 - Present",
      active: true,
      description:
        "Developed a lightweight, developer-friendly Content Management System using MDX and Git-based workflows. Designed for technical blogs and documentation websites, the CMS supports rich markdown formatting with React components, SEO metadata, syntax highlighting, and custom layouts. Built a clean admin dashboard to manage content, publish posts, and preview updates in real-time—without relying on any external headless CMS.",
      technologies: [
        "Next.js",
        "Turbo repo",
        "Docker",
        "Typescript",
        "MongoDB",
        "Webhooks",
        "TailwindCSS",
        "Shadcn UI",
        "Trpc",
      ],
      links: [
        {
          type: "Website",
          href: "https://mdx-cms.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://iikpslk665.ufs.sh/f/A8XxLx1G8xsXH5uZecviRvMdjoqh7ZXfQkB5V21I8ExbwTzc",
    },
  ],
} as const;
