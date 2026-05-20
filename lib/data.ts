export const siteConfig = {
  name: "Roberto",
  subtitle: "Advanced Roblox Developer",
  tags: ["Scripter", "3D Modeler"],
  handle: "@realgroupreal",
};

export const aboutContent = {
  text: `Hi! I'm Roberto (@realgroupreal), a 17-year-old Spanish Roblox Developer specializing in Luau scripting, 3D modeling, and UI design. I focus on building immersive systems with optimized performance and custom-made assets that combine clean code with a unique visual identity.`,
  /** Foto de perfil: pon el archivo en public/about/roberto.png */
  image: "/about/roberto.png",
};

export const skills = [
  {
    title: "Advanced Luau",
    description: "Complex game systems, modules, and scalable architecture.",
    icon: "code",
  },
  {
    title: "Object-Oriented Programming",
    description: "Clean class hierarchies and maintainable patterns.",
    icon: "layers",
  },
  {
    title: "Raycasting",
    description: "Precise hit detection and interactive world logic.",
    icon: "target",
  },
  {
    title: "DataStores",
    description: "Persistent player data with safe save/load flows.",
    icon: "database",
  },
  {
    title: "ProfileService",
    description: "Reliable session locking and profile management.",
    icon: "shield",
  },
  {
    title: "Blender",
    description: "Custom 3D assets, tools, and environment props.",
    icon: "cube",
  },
  {
    title: "Optimization",
    description: "Performance-first scripting for smooth gameplay.",
    icon: "zap",
  },
  {
    title: "Cross-platform compatibility",
    description: "Experiences tuned for mobile, PC, and console.",
    icon: "devices",
  },
] as const;

export const featuredProjects = [
  {
    id: "miners",
    name: "Miners",
    /** Pon la foto en: public/projects/miners.png */
    image: "/projects/miners.png",
    description:
      "A realistic and immersive mining experience featuring advanced ore generation systems, custom Blender-made tools, and high-quality Moon Animator animations.",
    featured: true,
    gradient: "from-rose-500/25 via-red-900/15 to-slate-900",
    accent: "#f43f5e",
  },
  {
    id: "toy-factory",
    name: "My Toy Factory",
    /** Pon la foto en: public/projects/toy-factory.png */
    image: "/projects/toy-factory.png",
    description:
      "A fully functional factory tycoon with automated production systems, custom assets, animations, and optimized scripting architecture.",
    featured: true,
    gradient: "from-red-500/25 via-rose-900/15 to-slate-900",
    accent: "#ef4444",
  },
] as const;

export const placeholderProjects = [
  { name: "Hamster Ball", image: "/projects/Hamster-Ball.png" },
  { name: "Rock Idle Mining", image: "/projects/Rock-Idle-Mining.png" },
  { name: "Brainrot", image: "/projects/the-brainrot.png" },
  { name: "RNG",image: "/projects/crystal-realms.png" },
  { name: "Mech Wars", image: "/projects/mech-wars.png" },
  { name: "Ocean Odyssey", image: "/projects/ocean-odyssey.png" },
  { name: "Pixel Parkour", image: "/projects/pixel-parkour.png" },
  { name: "Starforge Tycoon", image: "/projects/starforge-tycoon.png" },
] as const;

export const contactInfo = {
  discord: "robertcl",
  roblox: "@realgroupreal",
  availability: "Part-Time",
  paymentMethods: ["PayPal", "Robux"],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;
