export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  iconName: string;
  category: 'Software' | 'Design' | 'Other';
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface Project {
  slug: string;
  title: string;
  category: 'UI UX' | 'Posters';
  thumbnail: string;
  images: string[];
  year: string;
  client: string;
  role: string;
  description: string;
  longDescription: string;
  challenges: string;
  solutions: string;
  featured: boolean;
  gridSpan?: string; // Tailwind grid span classes for Bento layout
  behanceUrl?: string;
}

export interface CaseStudy {
  step: string;
  title: string;
  description: string;
  details: string[];
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  company: string;
  quote: string;
}

export interface PortfolioData {
  name: string;
  roleTitle: string;
  aboutText: string;
  aboutHeadline: string;
  resumeUrl: string;
  education: TimelineItem[];
  experience: TimelineItem[];
  skills: Skill[];
  services: Service[];
  projects: Project[];
  caseStudySteps: CaseStudy[];
  testimonials: Testimonial[];
  contact: {
    email: string;
    phone: string;
    location: string;
    qrData: string;
    socials: {
      platform: 'GitHub' | 'Behance' | 'LinkedIn' | 'Instagram';
      url: string;
    }[];
  };
}

export const portfolioData: PortfolioData = {
  name: "Vijayanand B Rathod",
  roleTitle: "UI/UX Designer | Product Designer",
  aboutHeadline: "Blending Swiss Grid Precision with Bold Artistic Chaos.",
  aboutText: "I’m Vijayanand Bharatbhai Rathod, a passionate and creative UI/UX designer focused on building user-centered digital experiences that are both visually appealing and functional. I specialize in creating intuitive interfaces, seamless user journeys, and modern digital products using tools like Figma, Adobe XD, and Framer.\n\nI have experience working on diverse design projects including homestay booking platforms, healthcare applications, e-commerce websites, and branding systems. Some of my notable projects include Haven Homestay App, MediConnect Health App, Brew & Bites Café Website, and Glowvyn Skincare E-commerce Website.\n\nMy design approach combines research, usability, creativity, and problem-solving to create experiences that users genuinely enjoy. I’m always eager to learn new technologies, improve my design thinking process, and contribute innovative ideas to meaningful projects.\n\nBeyond design, I enjoy exploring modern UI trends, creating case studies, and developing portfolio-worthy digital experiences that blend aesthetics with usability.",
  resumeUrl: "#", // downloadable resume mock
  education: [
    {
      year: "12/2024 – 07/2025",
      title: "UI/UX Design Course",
      subtitle: "EventBeep",
      description: "Intensive hands-on training in user-centered design, wireframing, prototyping, and visual design principles.\nCompleted multiple practical UI/UX projects, including a Homestay mobile application design project.\nGained experience in user research, interaction design, and responsive interface creation."
    },
    {
      year: "10/2021 – 11/2024",
      title: "Bachelor of Computer Applications (BCA)",
      subtitle: "PeopleTree Education Society",
      description: "Acquired core fundamentals in computer applications, programming, database management, and system design."
    },
    {
      year: "11/2019 – 07/2021",
      title: "Pre-University Course (PUC)",
      subtitle: "PeopleTree Education Society",
      description: "Completed secondary pre-university board curriculum with a focus on computer science and academic fundamentals."
    }
  ],
  experience: [
    {
      year: "02/2025 – 03/2025",
      title: "UI/UX Design Intern",
      subtitle: "Codec Technologies",
      description: "Conducted user research and analyzed user behavior data to identify usability issues and improve user experience.\nCollaborated with cross-functional teams to create wireframes, user flows, interactive prototypes, and high-fidelity UI designs.\nFacilitated usability testing sessions and design reviews to gather feedback and refine design solutions.\nDesigned detailed case studies including Haven Homestay App and MediConnect Health App, showcasing problem-solving approaches and usability improvements.\nWorked with tools such as Figma, Adobe XD, and Framer for interface design and prototyping."
    }
  ],
  skills: [
    { name: "Figma", level: 95, iconName: "figma", category: "Software" },
    { name: "Adobe XD", level: 88, iconName: "xd", category: "Software" },
    { name: "Framer", level: 90, iconName: "framer", category: "Software" },
    { name: "Photoshop", level: 90, iconName: "photoshop", category: "Software" },
    { name: "Illustrator", level: 92, iconName: "illustrator", category: "Software" },
    { name: "VS Code", level: 80, iconName: "vscode", category: "Software" }
  ],
  services: [
    {
      id: "graphic-design",
      number: "01",
      title: "Graphic & Brand Design",
      description: "Unique typographic identity systems, visual guidelines, packaging, print editorial, and high-impact poster work.",
      details: ["Logo & Visual Identity", "Packaging & Merchandising", "Brand Systems & Styleguides", "Editorial & Print Layouts"],
      icon: "Paintbrush"
    },
    {
      id: "ui-ux-design",
      number: "02",
      title: "UI/UX & Web Design",
      description: "User-centered web and mobile applications featuring smooth animations, glassmorphic interfaces, and strong visual hierarchy.",
      details: ["Wireframing & Prototyping", "Design System Architecture", "Mobile & Web Interface Design", "Interactive Framer Prototypes"],
      icon: "Layout"
    },
    {
      id: "photography",
      number: "03",
      title: "Art & Studio Photography",
      description: "Editorial photo shoots, street style documentation, conceptual branding imagery, and high-quality retouching services.",
      details: ["Studio Art Direction", "Product Photography", "High-End Photo Retouching", "Color Grading & Editing"],
      icon: "Camera"
    }
  ],
  projects: [
    {
      slug: "haven-homestay-booking",
      title: "Haven: A Curated Homestay Booking Experience",
      category: "UI UX",
      thumbnail: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
      ],
      year: "2024",
      client: "Haven Platform Co.",
      role: "UI/UX Designer",
      description: "Designed a complete UI/UX experience, user journeys, wireframes, responsive mobile/web views, and a minimalist design system.",
      longDescription: "Haven is a modern homestay booking platform aiming to connect travelers with cozy, design-focused local stays. We conducted extensive user interviews and affinity mapping to guide our layout decisions. The final solution is a clean, minimal interface styled around the brand accent color #C4A7FF, reducing booking friction and optimizing mobile workflows.",
      challenges: "Structuring dynamic booking filters and interactive host management panels without overwhelming the casual user.",
      solutions: "Designed collapsible drawer search mechanics and progress-tracked onboarding steps, leveraging a unified component library styled around a #C4A7FF accent system.",
      featured: true,
      gridSpan: "md:col-span-2 md:row-span-2",
      behanceUrl: "https://www.behance.net/gallery/226168155/Haven-Case-Study-for-Homestay-Booking-app-Research"
    },
    {
      slug: "mediconnect-healthcare",
      title: "Aarunya: AI-Powered Maternal Healthcare Platform",
      category: "UI UX",
      thumbnail: "/images/projects/aarunya/hero.png",
      images: [
        "/images/projects/aarunya/hero.png",
        "/images/projects/aarunya/admin-dashboard.png",
        "/images/projects/aarunya/doctor-dashboard.png",
        "/images/projects/aarunya/register.png",
        "/images/projects/aarunya/sign-in.png"
      ],
      year: "2023",
      client: "Aarunya Healthcare",
      role: "UI/UX Designer",
      description: "Designed virtual consultation UI flows, maternal health dashboards, booking panels, and privacy-focused portals.",
      longDescription: "Aarunya Healthcare is an AI-powered maternal care and doctor consultation platform designed to support mothers on their pregnancy journey. We designed registration flows, patient/doctor dashboards, admin statistics screens, and appointment scheduling systems, keeping accessibility and visual polish at the core of the design system.",
      challenges: "Structuring dynamic clinical metrics, real-time doctor availability status indicators, and multi-step registration forms without causing screen fatigue or cognitive load.",
      solutions: "Developed clean, dark-themed dashboard panels with high-contrast indicator cards, progressive status toggles, and step-tracked onboarding Wizards to streamline workflows.",
      featured: true,
      gridSpan: "md:col-span-1 md:row-span-2",
      behanceUrl: "https://www.behance.net/gallery/231657289/MediConnect-Virtual-Healthcare-at-Your-Fingertips"
    },
    {
      slug: "glowvyn-skincare-ecommerce",
      title: "Glowvyn: Premium Skincare E-Commerce Platform",
      category: "UI UX",
      thumbnail: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
      images: [
        "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1200"
      ],
      year: "2024",
      client: "Glowvyn Skincare Co.",
      role: "Lead UI/UX Designer",
      description: "A modern skincare e-commerce platform designed to create a seamless and luxurious online shopping experience.",
      longDescription: "Glowvyn is a modern skincare e-commerce platform designed to create a seamless and luxurious online shopping experience for beauty and self-care consumers. The project focused on building a visually refined interface with clean layouts, elegant product presentation, and responsive user flows that enhance customer engagement and simplify the purchasing journey. The final design combines minimal aesthetics, smooth navigation, and conversion-focused UI patterns to reflect a premium skincare brand identity across both desktop and mobile experiences.",
      challenges: "Designing an e-commerce experience that balances premium visual aesthetics with smooth product discovery, intuitive navigation, and a frictionless checkout process without overwhelming first-time users.",
      solutions: "Created a clean and modern shopping interface with structured product categorization, responsive layouts, interactive product sections, and streamlined user flows. The platform was designed using a cohesive visual system with elegant typography, soft neutral tones, and conversion-focused UI components to improve usability and elevate the skincare shopping experience.",
      featured: true,
      gridSpan: "md:col-span-2 md:row-span-2"
    },
    {
      slug: "brew-and-bites-cafe",
      title: "Brew and Bites: Digital Menu & Ordering Website",
      category: "UI UX",
      thumbnail: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
      images: [
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1200"
      ],
      year: "2024",
      client: "Brew and Bites Co.",
      role: "UI/UX Designer",
      description: "Designed responsive marketing landing pages, earthy brand aesthetics, menu carousels, and order portals.",
      longDescription: "Brew & Bites needed a strong web presence to showcase their premium menu and handle local pre-orders. We built a visual landing page using earthy color palettes and bold editorial typography, highlighting product photographs with micro-interactions and hover effects.",
      challenges: "Translating a warm, tactile cafe sensory experience into a clean digital layout that drives conversion and orders.",
      solutions: "Utilized dynamic image-hover shifts, organic typography arrangements, and simplified checkout layouts that speed up menu-to-cart clicks.",
      featured: true,
      gridSpan: "md:col-span-1 md:row-span-2",
      behanceUrl: "https://www.behance.net/gallery/226168155/Haven-Case-Study-for-Homestay-Booking-app-Research"
    },
    {
      slug: "brand-poster-design-collection",
      title: "Creative Visual & Marketing Poster Designs",
      category: "Posters",
      thumbnail: "/images/projects/posters/glowvyn-valentines-sale-square.png",
      images: [
        "/images/projects/posters/glowvyn-valentines-sale-square.png",
        "/images/projects/posters/glowvyn-valentines-sale-tall.png",
        "/images/projects/posters/glowvyn-valentines-offer-tall.png",
        "/images/projects/posters/glowvyn-valentines-offer-square.png",
        "/images/projects/posters/glowvyn-olaplex.png",
        "/images/projects/posters/prince-biryani.jpg",
        "/images/projects/posters/aarunya-presentation.png"
      ],
      year: "2024 - 2025",
      client: "Various Brands",
      role: "Graphic & Poster Designer",
      description: "Designed marketing posters, product advertising campaigns, and social media flyers.",
      longDescription: "A selection of high-impact visual design assets created for diverse brands, focusing on typography, layout hierarchy, and color harmony. The designs include commercial skincare campaigns for Glowvyn (including limited-time Olaplex offers and Valentine's Day promotions), local restaurant launches, and tech presentation banners. Each piece combines brand identity rules with creative graphic styling to capture attention and communicate product features effectively.",
      challenges: "Creating visual assets that are highly engaging across different screen aspect ratios while keeping text readable and key product visuals prominent.",
      solutions: "Formulated flexible layout systems, using bold editorial typography overlays, organic color tones, and clean product styling on structured backgrounds suitable for both mobile stories and square feeds.",
      featured: true,
      gridSpan: "md:col-span-3 md:row-span-1"
    }
  ],
  caseStudySteps: [
    {
      step: "01",
      title: "Deep Dive Research",
      description: "Unearthing user behaviors, competitor blindspots, and core design challenges.",
      details: [
        "Conducted 15 user interviews and quantitative data reviews.",
        "Mapped user journey pain points and created core personas.",
        "Audited 5 major competitors to establish visual opportunities."
      ],
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
    },
    {
      step: "02",
      title: "Wireframing & Grids",
      description: "Constructing structural scaffolding and defining modular layout constraints.",
      details: [
        "Sketched 30+ low-fidelity dashboard ideas on grid notebooks.",
        "Refined layout paths into low-fidelity Figma wireframes.",
        "Tested user flow speed across core navigation nodes."
      ],
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=800"
    },
    {
      step: "03",
      title: "Visual Art Direction",
      description: "Injecting aesthetic energy, typography guidelines, and color theory.",
      details: [
        "Established high-contrast mustard yellow and deep monochrome palette.",
        "Selected bold expressive headings and clean interface copy faces.",
        "Crafted custom vector ornaments, doodles, and textures."
      ],
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800"
    },
    {
      step: "04",
      title: "High-Fidelity Prototyping",
      description: "Wiring animations, micro-interactions, and preparing for high-quality build.",
      details: [
        "Configured elastic Framer Motion physics for transitions.",
        "Compiled full interactive design system components.",
        "Built responsive interactive desktop and mobile mockups."
      ],
      image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800"
    }
  ],
  testimonials: [
    {
      name: "Haven Project Feedback",
      role: "UX/UI Design Review",
      company: "Haven Platform Co.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      quote: "The entire experience felt smooth, modern, and thoughtfully designed from start to finish. The interface was clean, visually balanced, and easy to navigate, especially for a booking platform. Every detail showed strong UX thinking and creativity."
    },
    {
      name: "Brew & Bites Client Feedback",
      role: "Client Evaluation",
      company: "Brew & Bites Co.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      quote: "A beautifully designed website with a warm and modern aesthetic that perfectly matched the coffee brand vibe. The layouts, colors, and visual presentation created an engaging and premium user experience across all devices."
    },
    {
      name: "MediConnect Project Feedback",
      role: "UI/UX Assessment",
      company: "MediConnect Health",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      quote: "The UI was highly professional, intuitive, and user-friendly. From appointment flows to dashboard organization, everything was designed with clarity and accessibility in mind. The final result looked polished and production-ready."
    },
    {
      name: "Glowvyn Client Feedback",
      role: "Client Partner",
      company: "Glowvyn Skincare Co.",
      avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=200",
      quote: "A visually stunning and highly intuitive e-commerce experience that perfectly captures our premium brand identity. The product discovery, smooth layout transitions, and seamless checkout workflow have significantly elevated our digital presence."
    }
  ],
  contact: {
    email: "bcavjay@gmail.com",
    phone: "9845204209",
    location: "",
    qrData: "bcavjay@gmail.com",
    socials: [
      { platform: "Behance", url: "https://www.behance.net/vjayanand1" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/vijayananddataui/" },
      { platform: "Instagram", url: "https://instagram.com/its.v_jay" }
    ]
  }
};
