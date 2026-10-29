export const profile = {
  initials: "AP",
  name: "Abishek Pariyar",
  role: "Graphic designer and front-end developer",
  intro: "I design brands and layouts, then build them for the web.",
  about:
    "Graphic designer and developer based in Mississauga, Ontario. I studied Advertising and Graphic Design at Humber College and build sites with Next.js and TypeScript. Open to roles across the GTA.",
  tools: "Illustrator, Photoshop, Figma, Next.js, Tailwind CSS",
  email: "abijakepariyar@gmail.com",
  resume: "/resume.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/abizec-p" },
    { label: "LinkedIn", href: "https://linkedin.com/in/abishek-pariyar" },
    { label: "Web dev", href: "https://abishekpariyar.com" },
  ],
};

export type Project = {
  title: string;
  category: string;
  image?: string;
  href?: string;
  tint: string;
  ink: string;
};

export const projects: Project[] = [
  {
    title: "Abizec - Perfume Ad",
    image: "/projects/abizec-perfume.png",
    category: "Social Media design",
    tint: "#CECBF6",
    ink: "#26215C",
  },
  {
    title: "Radio Station Web design",
    image: "/projects/chiyapasal.png",
    category: "UI/UX",
    tint: "#CECBF6",
    ink: "#26215C",
  },
  {
    title: "Extrack Web design",
    image: "/projects/extrack2026.png",
    category: "UI/UX",
    tint: "#CECBF6",
    ink: "#26215C",
  },
  {
    title: "Himalayan Yak",
    image: "/projects/advert.png",
    category: "Brand identity",
    tint: "#CECBF6",
    ink: "#26215C",
  },
 
  {
    title: "Promotional Ad",
    image: "/projects/socialmedia.png",

    category: "Social Media Ad",
    tint: "#9FE1CB",
    ink: "#04342C",
  },
   {
    title: "Portfolio Website Design",
    image: "/projects/portfolio2026.png",

    category: "UI/UX",
    tint: "#9FE1CB",
    ink: "#04342C",
  },
   {
    title: "TasteHome Logo design",
    image: "/projects/tastehome.png",

    category: "Logo design",
    tint: "#9FE1CB",
    ink: "#04342C",
  },
   {
    title: "Abizec Logo",
    image: "/projects/abizec-logo.png",

    category: "Photography",
    tint: "#9FE1CB",
    ink: "#04342C",
  },
   {
    title: "Lights in the rain",
    image: "/projects/contactimg.jpg",

    category: "Photography",
    tint: "#9FE1CB",
    ink: "#04342C",
  },
  {
    title: "Cheetos Ad - College Project",
    image: "/projects/cheetosmockup.png",

    category: "Art direction",
    tint: "#F5C4B3",
    ink: "#4A1B0C",
  },
  {
    title: "Lays Ad - College Project",
    image: "/projects/lays.png",

    category: "Art direction",
    tint: "#F5C4B3",
    ink: "#4A1B0C",
  },
  {
    title: "AJ Logo design",
    image: "/projects/logoforaj.png",

    category: "Logo",
    tint: "#FAC775",
    ink: "#412402",
  },
  {
    title: "Waterbottle Ad",
    image: "/projects/waterBottle.png",

    category: "Social campaign",
    tint: "#B5D4F4",
    ink: "#042C53",
  },
  {
    title: "Crypto App",
    image: "/projects/cryptrade.jpg",

    category: "Logo design",
    tint: "#F4C0D1",
    ink: "#4B1528",
  },
  {
    title: "Portfolio design",
    image: "/projects/portfolioapp.jpg",

    category: "Logo design",
    tint: "#F4C0D1",
    ink: "#4B1528",
  },
 
];
