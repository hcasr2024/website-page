import React, { useState, useEffect } from 'react';
import { 
  Atom, 
  Wind, 
  Database, 
  Cpu, 
  ArrowRight, 
  Menu, 
  X, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Beaker, 
  TrendingDown,
  Globe,
  Search,
  DollarSign,
  Handshake,
  Factory,
  CheckCircle2,
  FlaskConical,
  Sparkles,
  UserPlus
} from 'lucide-react';

// --- Components ---

const FluidMindsLogo = () => (
  <div className="flex items-center gap-2 group">
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* Updated to point to the specific file requested */}
      <img 
        src="FluidMinds Logo.png" 
        alt="FluidMinds Logo" 
        className="w-full h-full object-contain"
        onError={(e) => {
          // If the image fails to load (common in preview), show fallback
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      {/* Fallback SVG if image fails to load in preview */}
      <svg className="w-full h-full text-blue-600 drop-shadow-sm hidden" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5C50 5 15 35 15 60C15 80 30 95 50 95C70 95 85 80 85 60C85 35 50 5 50 5Z" className="fill-blue-600 opacity-20" />
        <path d="M50 15C50 15 25 40 25 60C25 75 35 85 50 85C65 85 75 75 75 60C75 40 50 15 50 15Z" className="fill-teal-500 opacity-40" />
        <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10" stroke="url(#paint0_linear)" strokeWidth="4" strokeLinecap="round" />
        <defs>
          <linearGradient id="paint0_linear" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563EB"/>
            <stop offset="1" stopColor="#14B8A6"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-teal-600">
      FluidMinds
    </span>
  </div>
);

const SectionHeading = ({ children, subtitle, align = 'center' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{children}</h2>
    <div className={`h-1 w-20 bg-teal-500 rounded-full mb-4 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'Technology', href: '#technology' },
    { name: 'Partners', href: '#partners' },
    { name: 'Team', href: '#team' },
    { name: 'Impact', href: '#impact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <FluidMindsLogo />
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-base font-medium text-slate-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-blue-600 text-white text-center py-3 rounded-lg font-medium">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

// --- Sections ---

const Hero = () => (
  <section id="mission" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
    {/* Abstract Background Elements */}
    <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-60 pointer-events-none"></div>
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          Next-Gen Materials Discovery
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
          Designing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Fluids</span> of the Future.
        </h1>
        <div className="space-y-6 mb-8 text-slate-600 text-lg leading-relaxed max-w-lg">
          <p>
            We use AI, quantum chemistry, and experiments to discover sustainable, low-GWP coolants and refrigerants for a cleaner planet.
          </p>
          <p className="text-base border-l-4 border-teal-500 pl-4 bg-teal-50/50 py-2 rounded-r-lg">
            We focus on the discovery of next-generation material IP. We develop novel refrigerant formulations and license the manufacturing to existing producers, ensuring rapid scalability and market adoption.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#technology" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2">
            Explore Technology <ArrowRight size={18} />
          </a>
          <a href="#problem" className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-full font-semibold transition-all flex items-center justify-center">
            The Challenge
          </a>
        </div>
      </div>

      <div className="hidden md:block relative">
        <div className="relative z-10 bg-white/40 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-2xl">
           <div className="flex items-center justify-between mb-6">
             <div>
               <h3 className="text-lg font-bold text-slate-800">Candidate Screening</h3>
               <p className="text-xs text-slate-500">Selected Target Properties Analyzed (25+ Analyzed)</p>
             </div>
             <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
             </div>
           </div>
           
           <div className="space-y-3">
             {[
               'GWP (Global Warming Potential)',
               'Viscosity',
               'Freezing / Boiling Point',
               'ODP (Ozone Depletion)',
               'Toxicity & LFL',
               'Critical Properties',
               'Latent Heat of Vaporization',
               'Industrial Synthesis Process Design'
             ].map((item, idx) => (
               <div key={idx} className="bg-white/60 p-3 rounded-xl flex items-center justify-between group hover:bg-white/80 transition-colors">
                 <div className="text-sm font-semibold text-slate-700">{item}</div>
                 <div className="flex items-center text-teal-600">
                    {item === 'Synthesis Process Design' ? <FlaskConical size={18} /> : <CheckCircle2 size={18} />}
                 </div>
               </div>
             ))}
           </div>

           <div className="mt-6 pt-6 border-t border-slate-200/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Database size={20} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">10¹⁰ Molecules Scanned</div>
                <div className="text-xs text-slate-500">Broad Chemical Space Exploration</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section id="problem" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading subtitle="The cooling industry is facing a regulatory cliff and economic pressure.">
        The Global Challenge
      </SectionHeading>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-6 bg-red-50 rounded-2xl border border-red-100 h-full">
          <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
            <TrendingDown size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">The Regulatory Cliff</h3>
          <p className="text-slate-600 text-sm">
            With Canada (2025) and US (2026) driving a 150 GWP standard, discovering alternatives is urgent; legacy ultra-low-temperature fluids currently exceed this sustainable limit by 100x.
          </p>
        </div>

        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 h-full">
          <div className="w-12 h-12 bg-slate-200 text-slate-700 rounded-full flex items-center justify-center mb-4">
            <Beaker size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">The Innovation Gap</h3>
          <p className="text-slate-600 text-sm">
            Current low-GWP substitutes fail at ultra-low temperatures (-50°C to -80°C). No non-flammable refrigerant under 150 GWP exists for this range.
          </p>
        </div>

        <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 h-full">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
            <DollarSign size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Economic Efficiency</h3>
          <p className="text-slate-600 text-sm">
            Traditional materials discovery is slow and costly. Our AI-driven approach drastically cuts R&D costs (up to 80%), mirroring successes seen in modern pharma drug discovery.
          </p>
        </div>

        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 h-full">
          <div className="w-12 h-12 bg-slate-200 text-slate-700 rounded-full flex items-center justify-center mb-4">
            <Globe size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Environmental Impact</h3>
          <p className="text-slate-600 text-sm">
            Current HFC leakage releases ~0.8 Gt CO₂e/year. Left unchecked, cooling emissions will skyrocket to 460 Gt CO₂e by 2060. Our &lt;150 GWP solution directly targets this compounding climate debt.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Technology = () => (
  <section id="technology" className="py-24 bg-slate-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">The FluidMinds Platform</h2>
        <div className="h-1 w-20 bg-blue-500 rounded-full mx-auto mb-4"></div>
        <p className="text-slate-400 max-w-2xl mx-auto">
          We bridge the gap between theory and practice, unlocking a new era of accelerated materials discovery.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
              <Cpu size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">AI-Driven Screening</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We train ML models on large-scale datasets to rapidly predict properties like viscosity, boiling points, and chemical stability across millions of molecules.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-600/20 text-teal-400 flex items-center justify-center shrink-0">
              <Search size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">LLM-Enhanced Data</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We employed Large Language Models to extract property values and environmental metrics from unstructured technical literature, creating a unique, expert-verified dataset.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center shrink-0">
              <Atom size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Quantum & Experimental Validation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We integrate quantum chemistry simulations and used experimental values to validate our models before scaling.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative">
            <h3 className="text-2xl font-bold mb-6">Discovery Pipeline</h3>
            <div className="space-y-4">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 flex items-center justify-between">
                <span className="text-slate-300">1. Data Ingestion</span>
                <Database size={18} className="text-blue-400"/>
              </div>
              <div className="flex justify-center text-slate-600"><ArrowRight className="rotate-90" size={20}/></div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 flex items-center justify-between border-l-4 border-l-blue-500">
                <span className="text-white font-semibold">2. ML Inference & Screening</span>
                <Cpu size={18} className="text-blue-500"/>
              </div>
              <div className="flex justify-center text-slate-600"><ArrowRight className="rotate-90" size={20}/></div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 flex items-center justify-between">
                <span className="text-slate-300">3. Experimental Validation</span>
                <Beaker size={18} className="text-teal-400"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Partners = () => (
  <section id="partners" className="py-16 bg-white border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-6">
      <p className="text-center text-slate-500 font-semibold uppercase tracking-widest text-sm mb-10">Supported By Industry Leaders</p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
        
        {/* Vector Institute */}
        <a href="https://vectorinstitute.ai" target="_blank" rel="noreferrer" className="group flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img 
            src="https://vectorinstitute.ai/wp-content/uploads/2024/05/Vector-Logo-FullColour_Horizontal.png" 
            alt="Vector Institute Logo" 
            className="h-12 w-auto grayscale-0 group-hover:scale-105 transition-transform"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback if image fails */}
          <div className="hidden w-10 h-10 bg-slate-900 rounded items-center justify-center text-white font-bold text-xl shadow-md">V</div>
        </a>

        {/* Google */}
        <a href="https://google.com" target="_blank" rel="noreferrer" className="group flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
            alt="Google Logo"
            className="h-10 w-auto group-hover:scale-105 transition-transform"
          />
        </a>

      </div>
    </div>
  </section>
);

const Team = () => (
  <section id="team" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading subtitle="Expertise in Materials Science, AI, and Chemical Engineering.">
        Our Technical Team
      </SectionHeading>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Team Member 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600 shrink-0">
            ASR
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Armin Sedighian Rasouli, PhD, PEng</h3>
            <p className="text-blue-600 font-medium mb-3">Founder & CEO</p>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              A recognized expert in chemical process design, with multiple high-impact publications (Science, Nature) and patents in AI-Assisted accelerated materials discovery and chemical processes.
            </p>
            <div className="flex gap-4">
              <a href="https://scholar.google.com/citations?user=icLBdasAAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer" className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors">
                <ExternalLink size={14} className="mr-1" /> Google Scholar
              </a>
              <a href="https://www.linkedin.com/in/armin-sedighian/" target="_blank" rel="noreferrer" className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-blue-700 transition-colors">
                <Linkedin size={14} className="mr-1" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Join Us Card */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-2xl shadow-lg border border-slate-700 flex flex-col justify-center items-center text-center text-white relative overflow-hidden group">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10 group-hover:opacity-30 transition-opacity"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform">
               <UserPlus size={28} className="text-teal-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Join Our Mission</h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Are you passionate about AI, Computational Chemistry, or Process Engineering? We are looking for exceptional talent to build the future of sustainable fluids.
            </p>
            <a 
              href="mailto:info@fluidminds.ai?subject=Application%20for%20FluidMinds" 
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Impact = () => (
  <section id="impact" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-12 text-white text-center relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl"></div>
            <div className="absolute left-0 top-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6">Driving Sustainable Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl font-bold text-teal-400 mb-2">0.7 Gt</div>
              <div className="text-sm text-slate-300">Potential Annual CO₂e Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">80%</div>
              <div className="text-sm text-slate-300">Reduction in Discovery Time</div>
            </div>
             <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">1M+</div>
              <div className="text-sm text-slate-300">Candidates Screened</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-slate-900 text-slate-300 border-t border-slate-800">
    <div className="bg-blue-900/30 py-12 border-b border-slate-800">
       <div className="max-w-7xl mx-auto px-6 text-center">
         <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
         <p className="text-slate-400 mb-6 max-w-lg mx-auto">
           Interested in partnership, investment, or pilot opportunities? We'd love to hear from you.
         </p>
         <a href="mailto:info@fluidminds.ai" className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-teal-500 hover:text-white transition-all transform hover:scale-105 shadow-lg">
            <Mail size={20} />
            info@fluidminds.ai
         </a>
       </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
      <div>
        <FluidMindsLogo />
        <p className="mt-6 max-w-sm text-slate-400">
          Accelerating the discovery of next-generation coolants using Artificial Intelligence and Quantum Chemistry.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#mission" className="hover:text-white transition-colors">Mission</a></li>
            <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
            <li><a href="#partners" className="hover:text-white transition-colors">Partners</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Technology</h4>
          <ul className="space-y-2">
            <li><a href="#technology" className="hover:text-white transition-colors">AI Screening</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Quantum Chem</a></li>
            <li><a href="#impact" className="hover:text-white transition-colors">Sustainability</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 py-6 border-t border-slate-800 text-sm text-slate-500 text-center">
      &copy; {new Date().getFullYear()} FluidMinds. All rights reserved. Toronto, Canada.
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-teal-100 selection:text-teal-900 scroll-smooth">
      <Navbar />
      <Hero />
      <Partners />
      <Problem />
      <Technology />
      <Impact />
      <Team />
      <Footer />
    </div>
  );
};

export default App;