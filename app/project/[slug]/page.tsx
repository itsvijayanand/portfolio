import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Compass, Layers, CheckCircle, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Generate static routes for all projects at build time
export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate dynamic SEO metadata for each project page
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = portfolioData.projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Vijayanand B Rathod Design Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.thumbnail }],
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = portfolioData.projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#e5e5e5] text-stone-900 pb-24 selection:bg-[#f4b223] selection:text-stone-900">
      
      {/* Editorial layout background grids */}
      <div className="fixed inset-0 grid grid-cols-4 md:grid-cols-6 pointer-events-none opacity-10 z-0">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-full border-r border-stone-400 last:border-0" />
        ))}
      </div>

      {/* Floating Header Actions */}
      <header className="relative z-10 w-full py-6 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/#work"
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold text-stone-700 hover:text-stone-950 transition-colors py-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Work</span>
        </Link>
        <span className="font-mono text-xs uppercase tracking-widest text-stone-500 font-bold hidden sm:block">
          Portfolio Archive 2026
        </span>
      </header>

      {/* Hero Banner Grid layout */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mt-6">
        <div className="relative w-full h-[40vh] md:h-[60vh] rounded-[2.5rem] overflow-hidden border-2 border-stone-900 shadow-xl bg-stone-300">
          <Image
            src={project.images[0] || project.thumbnail}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-col items-start gap-3">
            <span className="px-3.5 py-1 bg-[#f4b223] text-stone-950 font-mono text-xs uppercase tracking-widest font-bold rounded-lg shadow-sm">
              {project.category}
            </span>
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-black text-[#e5e5e5] tracking-tight text-left max-w-4xl"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Details Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left column: Descriptive case narrative */}
        <div className="lg:col-span-8 flex flex-col gap-10 text-left">
          
          {/* Overview */}
          <div className="flex flex-col gap-4">
            <h2
              className="text-2xl md:text-3xl font-bold tracking-tight text-stone-950"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              PROJECT OVERVIEW
            </h2>
            <p className="text-stone-700 leading-relaxed text-base font-mono">
              {project.longDescription}
            </p>
          </div>

          {/* Key challenges and details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-stone-200/50 p-8 rounded-[2rem] border border-stone-300">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-stone-950">
                <Layers className="w-5 h-5 text-[#f4b223]" />
                <h3 className="font-mono text-sm uppercase font-bold tracking-wider">
                  The Challenge
                </h3>
              </div>
              <p className="text-xs text-stone-700 font-mono leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-stone-950">
                <CheckCircle className="w-5 h-5 text-[#f4b223]" />
                <h3 className="font-mono text-sm uppercase font-bold tracking-wider">
                  The Solution
                </h3>
              </div>
              <p className="text-xs text-stone-700 font-mono leading-relaxed">
                {project.solutions}
              </p>
            </div>
          </div>

        </div>

        {/* Right column: Sticky metadata specifications */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6 text-left">
          
          <div className="bg-[#e5e5e5] border-2 border-stone-900 rounded-[2rem] p-8 flex flex-col gap-6 shadow-md font-mono text-sm">
            <h3
              className="text-lg font-bold text-stone-950 tracking-tight uppercase"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Project Specifications
            </h3>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 border-b border-stone-300 pb-3">
                <User className="w-4 h-4 text-[#f4b223] mt-0.5" />
                <div>
                  <p className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">Client Partner</p>
                  <p className="font-bold text-stone-900 mt-0.5">{project.client}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-b border-stone-300 pb-3">
                <Compass className="w-4 h-4 text-[#f4b223] mt-0.5" />
                <div>
                  <p className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">Project Role</p>
                  <p className="font-bold text-stone-900 mt-0.5">{project.role}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-[#f4b223] mt-0.5" />
                <div>
                  <p className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">Timeline Year</p>
                  <p className="font-bold text-stone-900 mt-0.5">{project.year}</p>
                </div>
              </div>
            </div>

            {project.behanceUrl && (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 bg-[#f4b223] text-stone-950 py-3 rounded-full font-mono text-xs uppercase font-bold tracking-widest hover:bg-stone-900 hover:text-[#e5e5e5] transition-colors border border-[#f4b223] shadow-md shadow-[#f4b223]/10"
              >
                View on Behance
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>

          <div className="p-6 bg-stone-300/40 border border-stone-300 rounded-[2rem] text-center">
            <p className="font-mono text-xs text-stone-600 mb-4">Want to build something similar?</p>
            <Link
              href="/#contact"
              className="block w-full text-center py-3 bg-stone-900 text-[#e5e5e5] rounded-full font-mono text-xs uppercase font-bold tracking-widest hover:bg-[#f4b223] hover:text-stone-900 transition-colors"
            >
              Start Collaboration
            </Link>
          </div>

        </div>
      </section>

      {/* Visual Collage Gallery section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mt-16 flex flex-col gap-6">
        <h2
          className="text-2xl md:text-3xl font-bold tracking-tight text-stone-950 text-left"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          PROJECT COLLAGE GALLERY
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.images.map((image, idx) => (
            <div
              key={idx}
              className="relative w-full h-[300px] md:h-[450px] rounded-[2rem] overflow-hidden border-2 border-stone-300 shadow-md bg-stone-300 group"
            >
              <Image
                src={image}
                alt={`${project.title} Visual ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
