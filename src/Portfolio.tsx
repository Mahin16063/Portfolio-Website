import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Github, Linkedin, Instagram, ChevronDown, ArrowUpRight, Sparkles } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  role: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
}

interface Stat {
  number: string;
  label: string;
}

interface MousePosition {
  x: number;
  y: number;
}

interface SocialLink {
  icon: typeof Instagram;
  href: string;
}

const Portfolio: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('about');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
      
      const sections: string[] = ['about', 'projects', 'gallery', 'contact'];
      const current = sections.find((section: string) => {
        const element = document.getElementById(`${section}-section`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects: Project[] = [
    {
      title: "TreatQuest",
      subtitle: "Prototyp3",
      role: "Internship",
      year: "2025",
      description: "collaborated with a team of devs to design a Python-based grid-world game that uses reinforcement learning (Q-learning) to train an agent to navigate environments, optimize rewards, and adapt to increasing difficulty levels.",
      image: "https://cdn.prod.website-files.com/696198f7712839d5309dcf9a/6961a2e25a7866d79f8c0ca0_IMG_4889%20(1).jpg",
      tags: ["Python", "RL", "Q-Learning"]
    },
    {
      title: "CR24 McTriple",
      subtitle: "CU InSpace",
      role: "LC",
      year: "2024",
      description: "Contributed to designing Carleton's high powered sounding rocket CR24, competing for 30,000 ft category and representing the team in Launch Canada 2024 Timmins.",
      image: "https://cdn.prod.website-files.com/696198f7712839d5309dcf9a/6961a98c3c7dea665aa052ea_IMG_0308-Enhanced-NR%20(1).jpg",
      tags: ["Aerospace", "Engineering", "Competition"]
    },
    {
      title: "Recovery Reefing System",
      subtitle: "CU InSpace",
      role: "LC",
      year: "2025",
      description: "Developed a distributed embedded reefing system using Raspberry Pi Pico (RP2040), integrating sensor input, wireless communication, GPIO control, and non-volatile flight data logging for rocket recovery operations.",
      image: "https://cdn.prod.website-files.com/696198f7712839d5309dcf9a/696198f7712839d5309dcf9a/69619967f075624bfbdb92c2_IMG_0880-Enhanced-NR-min.jpg",
      tags: ["Embedded", "RP2040", "IoT"]
    }
  ];

  const galleryImages: string[] = [
    "https://cdn.prod.website-files.com/696198f7712839d5309dcf9a/6961b045bf674bdacd74659a_IMG_5904.jpg",
    "https://cdn.prod.website-files.com/696198f7712839d5309dcf9a/6961b0b4246c273d78dfef66_Receiving_Box_Assembly-ezgif.com-video-to-gif-converter.gif",
    "https://cdn.prod.website-files.com/696198f7712839d5309dcf9a/6961af376ed108d9400cd36a_IMG_0752.jpg",
    "https://cdn.prod.website-files.com/696198f7712839d5309dcf9a/6961afa8fe8d7f02ccc47ecd_Level3.png",
    "https://cdn.prod.website-files.com/696198f7712839d5309dcf9a/6961aeb3a818ccd52f37b375_IMG_4885.jpg",
    "https://cdn.prod.website-files.com/696198f7712839d5309dcf9a/6961ae756f6f85a8479b0179_IMG_0560.jpg",
    "https://cdn.prod.website-files.com/696198f7712839d5309dcf9a/6961ae9eee157a9f691c0d1f_IMG_5029.jpg",
    "https://cdn.prod.website-files.com/696198f7712839d5309dcf9a/6961ae84a818ccd52f37aec6_000692200007.jpg",
    "https://cdn.prod.website-files.com/696198f7712839d5309dcf9a/6961a6c8cbafb898e8622b88_frame00108013.jpg",
    "https://cdn.prod.website-files.com/696198f7712839d5309dcf9a/6961b7d5d26525f8561ac8f8_PXL_20251021_233711385.MP.jpg",
    "https://cdn.prod.website-files.com/696198f7712839d5309dcf9a/6961b7f5ddf2f3eebc9bfafc_PXL_20250913_162200279.MP.jpg",
    "https://cdn.prod.website-files.com/696198f7712839d5309dcf9a/6961b86f17d6448d5343dfcd_Screenshot_20251206-124605.png"
  ];

  const stats: Stat[] = [
    { number: "300+", label: "people worked with" },
    { number: "10+", label: "teams led" },
    { number: "4+", label: "major projects" }
  ];

  const menuItems: string[] = ['About', 'Projects', 'Gallery', 'Contact'];

  const socialLinks: SocialLink[] = [
    { icon: Instagram, href: "https://www.instagram.com/akond1606/" },
    { icon: Github, href: "https://github.com/Mahin16063" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mahin-hossain-akond/" }
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-white relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`
        }}
      />
      
      {/* Grain Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-stone-950/80 backdrop-blur-xl border-b border-emerald-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
              Mahin Akond
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item: string) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(`${item.toLowerCase()}-section`)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-emerald-400 bg-emerald-500/10'
                      : 'text-stone-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {menuItems.map((item: string) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(`${item.toLowerCase()}-section`)}
                  className="block w-full text-left py-3 px-4 text-stone-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium backdrop-blur-sm">
                <Sparkles size={16} className="mr-2" />
                Available for Summer 2026 Internships
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-none">
                <span className="bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
                  Mahin
                </span>
                <br />
                <span className="text-white">Akond</span>
              </h1>
              
              <p className="text-xl text-stone-400 leading-relaxed max-w-lg">
                3rd year Computational Mathematics student at Carleton University, building at the intersection of hardware and software.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('projects-section')}
                  className="group inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
                >
                  Explore My Work
                  <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
                </button>
                
                <button
                  onClick={() => scrollToSection('contact-section')}
                  className="inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-all duration-300 backdrop-blur-sm"
                >
                  Get in Touch
                </button>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <img
                src="https://cdn.prod.website-files.com/696198f7712839d5309dcf9a/69619967f075624bfbdb92c2_IMG_0880-Enhanced-NR-min.jpg"
                alt="Mahin Akond"
                className="relative rounded-3xl shadow-2xl w-full border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full" />
          </div>
          
          <div className="bg-stone-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 space-y-6 text-stone-300 leading-relaxed text-lg">
            <p>
              3rd year <span className="text-emerald-400 font-semibold">Computational Mathematics</span> student at <span className="text-emerald-400 font-semibold">Carleton University</span> with a strong interest in software development, data analysis, networking systems, and applied problem-solving. I enjoy working at the intersection of <span className="text-white font-medium">hardware and software</span>, where logical thinking, abstraction, and implementation come together; something I developed through my participation in CU InSpace, Carleton University's largest engineering design team.
            </p>
            <p>
              My academic background has given me a solid foundation in mathematical reasoning, algorithms, C++, Python, Java, Linux and low-level systems concepts, while my personal and club projects have allowed me to turn theory into practice, with hands on experience in embedded software. I've worked on projects ranging from <span className="text-white font-medium">game development and reinforcement learning</span> to <span className="text-white font-medium">embedded systems and recovery avionics</span>, and I'm particularly interested in building software that is <span className="text-white font-medium">reliable, well-structured, and thoughtfully designed</span>.
            </p>
            <p>
              Beyond coursework, I'm actively involved in technical leadership roles, where I collaborate with multidisciplinary teams, manage responsibilities, and learn how to balance technical depth with real-world constraints.
            </p>
            <p className="text-white font-medium">
              I realized that as long as I keep developing my passion to learn, I will never cease to grow. For this reason I am constantly on the lookout for opportunities that help me hone my abilities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat: Stat, index: number) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative bg-stone-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-emerald-500/30 transition-all duration-300">
                  <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-stone-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
              Project Highlights
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project, index: number) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative bg-stone-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent opacity-60" />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-sm text-stone-400">{project.subtitle}</p>
                      </div>
                      <span className="text-xs text-emerald-400 font-medium px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                        {project.year}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string, i: number) => (
                        <span key={i} className="text-xs text-stone-400 px-2 py-1 bg-white/5 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-stone-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery-section" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
              Gallery
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image: string, index: number) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10" />
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 border border-white/10"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full mx-auto" />
          </div>
          
          <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing projects, opportunities, or collaborations. Feel free to reach out :)
          </p>
          
          <div className="bg-stone-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Mail className="text-emerald-400" size={24} />
              <a 
                href="mailto:mahinakond@cmail.carleton.ca" 
                className="text-lg text-white hover:text-emerald-400 transition-colors font-medium"
              >
                mahinakond@cmail.carleton.ca
              </a>
            </div>
            
            <div className="flex justify-center gap-4">
              {socialLinks.map((social: SocialLink, i: number) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 rounded-xl transition-all duration-300"
                  >
                    <Icon className="text-stone-400 group-hover:text-emerald-400 transition-colors" size={24} />
                    <ArrowUpRight className="absolute top-1 right-1 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" size={12} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <img
              src="https://cdn.prod.website-files.com/696198f7712839d5309dcf9a/6961b7755a8493b0cad1d6f7_Screenshot_20251206-124628.png"
              alt="Contact visual"
              className="relative rounded-2xl mx-auto max-w-md border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-stone-500">© 2026 Mahin Akond. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;