import { useState, useEffect, Key } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin,
  CheckCircle2,
  Users,
  Globe,
  Award
} from 'lucide-react';

// --- Static Bio-Data Content ---
const PRODUCT_ARTICLES: Record<string, string> = {
  "TIENS Nutrient Calcium": `
## Product Overview
TIENS Nutrient Super Calcium Powder is a world-renowned health supplement specifically designed to improve bone density and prevent calcium deficiency. It is formulated using advanced bio-technology to ensure a high absorption rate of up to 95%, which is significantly higher than traditional calcium supplements.

## Nutritional Bio-Data
*   **Enzymolysis Bone Calcium Powder:** Derived from organic bovine bone, providing a natural source of calcium, phosphorus, and essential minerals.
*   **Vitamin D3:** Enhances the absorption of calcium in the small intestine and its deposition into the bone matrix.
*   **Vitamin A & C:** Supports immune function and collagen synthesis for joint health.
*   **Oligosaccharides:** Promotes healthy gut flora, aiding in overall nutrient assimilation.

## Usage Guidelines
*   Mix 1 sachet with warm water (60-70°C).
*   Consume 1-2 times daily, preferably after meals.
*   Recommended for adults seeking bone strength, teeth health, and metabolic balance.

## Global Health Heritage of TIENS
Tiens has been a global leader in calcium technology for over 25 years. Our unique enzymolysis process respects the body's natural chemistry, making it a trusted household name in 190 countries.
`,
  "Zinc Supplements": `
## Product Overview
TIENS Zinc Capsules are essential for supporting the body's metabolic functions, protein synthesis, and healthy cell growth. Zinc is a "trace element of life" that plays a crucial role in over 300 enzymatic reactions within the human body.

## Nutritional Bio-Data
*   **Lanolin Zinc:** A highly bio-available form of Zinc that is gentle on the stomach and rapidly absorbed by the bloodstream.
*   **Glucose:** Provides a quick energy source to support the metabolic transport of zinc.
*   **Egg Protein Powder:** Acts as a carrier protein to ensure the stability and transport of the zinc molecules to vital organs.

## Usage Guidelines
*   For children: 1-2 capsules daily.
*   For adults: 3-4 capsules daily.
*   Best taken with warm water for optimal absorption.

## Global Health Heritage of TIENS
Zinc is fundamental to TIENS' holistic approach to wellness. We ensure our supplements are pure, potent, and free from synthetic fillers, reflecting our commitment to natural health restoration.
`,
  "Pure Cordyceps": `
## Product Overview
TIENS Cordyceps Capsules contain high-quality Cordyceps Sinensis, a rare and precious fungus known in traditional wellness for its "Life-Force" enhancing properties. It is a powerful adaptogen that helps the body cope with physical and mental stress while improving respiratory efficiency.

## Nutritional Bio-Data
*   **Cordycepin:** A natural compound that supports respiratory health and enhances lung capacity.
*   **Adenosine:** Promotes natural energy production at the cellular level (ATP), reducing fatigue.
*   **Polysaccharides:** Rich in antioxidants that bolster the immune system and protect against environmental toxins.

## Usage Guidelines
*   Take 1-2 capsules 2 times daily.
*   Ideal for athletes, professionals with high-stress loads, and individuals seeking respiratory support.

## Global Health Heritage of TIENS
Derived from the high-altitude plateaus of the Himalayas, TIENS utilizes fermentation technology to cultivate Pure Cordyceps without harming the environment, delivering ancient wisdom through modern science.
`
};

// --- Components ---
const ArticleView = ({ product, onClose }: { product: any; onClose: () => void }) => {
  const content = PRODUCT_ARTICLES[product.title] || "Detailed bio-data for this product is currently being updated in our archives. Please contact our Mogadishu headquarters for the printed catalog.";

  useEffect(() => {
    // Lock body scroll and reset scroll position
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-white overflow-y-scroll"
      style={{ height: '100vh', width: '100vw' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen pb-20"
      >
        <nav className="sticky top-0 w-full z-[10000] bg-white/95 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm">
          <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">T</span>
              </div>
              <span className="text-sm font-extrabold text-slate-800 uppercase tracking-tighter">Bio-Data Archive</span>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-emerald-600 transition-all uppercase tracking-widest cursor-pointer p-2 rounded-lg hover:bg-slate-50"
            >
              <X size={18} /> Close Report
            </button>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-md uppercase tracking-wider">
                Clinical Bio-Data Report
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
                {product.title}
              </h1>
            </div>
            <div className="md:col-span-4 bg-slate-50 p-4 rounded-3xl border border-slate-100 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.title} 
                className="max-h-48 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="article-content bg-white">
            <ReactMarkdown
              components={{
                h2: ({ ...props }) => <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6" {...props} />,
                h3: ({ ...props }) => <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4 border-l-4 border-emerald-500 pl-4" {...props} />,
                p: ({ ...props }) => <p className="text-slate-600 leading-relaxed mb-6" {...props} />,
                ul: ({ ...props }) => <ul className="list-disc list-outside ml-6 space-y-3 mb-8 text-slate-600" {...props} />,
                li: ({ ...props }) => <li className="pl-2" {...props} />,
                strong: ({ ...props }) => <strong className="text-emerald-700 font-extrabold" {...props} />,
              }}
            >
              {content}
            </ReactMarkdown>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xs text-slate-400 font-medium max-w-md">
              Note: This bio-data is for informational purposes. Consult with a Tiens Somalia certified health consultant for personalized wellness advice.
            </p>
            <button 
              onClick={onClose}
              className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-slate-800 transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              Back to Catalog
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Opportunity', href: '#opportunity' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm py-4 border-b border-slate-200' : 'bg-white shadow-sm py-6 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-slate-800 leading-none">
              TIENS
            </span>
            <span className="text-[10px] tracking-widest text-emerald-600 font-bold uppercase">
              Somalia
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                link.name === 'Home' ? 'text-emerald-700 font-bold' : 'text-slate-600'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md shadow-emerald-200 hover:bg-emerald-700 active:scale-95 transition-all"
          >
            Join Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 flex flex-col items-center gap-6 md:hidden border-t border-zinc-100"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-zinc-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-primary text-white px-10 py-3 rounded-full text-lg font-semibold">
              Join Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-slate-200 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          className="lg:col-span-7 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-md uppercase tracking-wider">
            A Legacy of Health since 1995
          </div>
          
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-slate-800 leading-[1.1] tracking-tight">
            Empowering Wellness in <span className="text-emerald-600">Somalia.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-md leading-relaxed">
            Tiens Group brings high-quality natural supplements and health equipment to Somalia, combining traditional wisdom with modern bio-technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#products"
              className="bg-slate-900 text-white px-8 py-3.5 rounded-lg font-semibold shadow-lg hover:bg-slate-800 transition-all active:scale-95 text-center"
            >
              Explore Products
            </a>
            <a 
              href="#about"
              className="border-2 border-slate-200 text-slate-600 px-8 py-3.5 rounded-lg font-semibold hover:bg-white transition-all active:scale-95 text-center"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="lg:col-span-5 relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl skew-y-1">
            <img 
              src="https://picsum.photos/seed/somalia-lab/800/1000" 
              alt="Scientific Excellence" 
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary -z-10 rounded-2xl skew-y-1"></div>
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeading = ({ subtitle, title, centered = false }: { subtitle: string; title: string; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 mb-4 block">
      {subtitle}
    </span>
    <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary">
      {title}
    </h2>
  </div>
);

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '25+', icon: Award },
    { label: 'Countries Served', value: '190+', icon: Globe },
    { label: 'Families Global', value: '40M+', icon: Users },
  ];

  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
              <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden mb-8 flex items-center justify-center text-slate-400">
                <div className="text-center">
                  <div className="mb-2 text-6xl">🌿</div>
                  <div className="text-sm font-medium uppercase tracking-tighter">Premium Quality Standards</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <div className="text-3xl font-bold text-emerald-600">25+</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <div className="text-3xl font-bold text-emerald-600">190+</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Countries Served</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-12 -left-12 w-full h-full bg-emerald-50 rounded-3xl -z-10 transform -rotate-3"></div>
          </motion.div>

          <div className="space-y-8">
            <SectionHeading 
              subtitle="The TIENS Legacy" 
              title="World-Class Health Solutions in Somalia." 
            />
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Tiens Somalia is dedicated to improving the health and self-confidence of our people. 
              By leveraging the world's most advanced production technology, we provide 
              nature-derived health products that meet the highest international standards.
            </p>

            <div className="flex gap-4 items-start pt-4">
              <div className="w-12 h-12 shrink-0 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center text-emerald-600">
                 <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Global Community</h4>
                <p className="text-sm text-slate-500 mt-1">Connecting over 40 million families worldwide with health.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  key?: Key;
  title: string;
  description: string;
  image: string;
  delay: number;
  onClick?: () => void;
}

const ProductCard = ({ title, description, image, delay, onClick }: ProductCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className="aspect-square rounded-2xl overflow-hidden mb-8 bg-slate-50 flex items-center justify-center p-6 border border-slate-50">
      <img 
        src={image} 
        alt={title} 
        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
    </div>
    <h3 className="font-headline text-2xl font-bold text-slate-800 mb-3">
      {title}
    </h3>
    <p className="text-slate-500 mb-8 leading-relaxed line-clamp-2">
      {description}
    </p>
    <div 
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) onClick();
      }}
      className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-widest group-hover:gap-3 transition-all hover:text-emerald-700 cursor-pointer select-none"
    >
      Read Bio-Data <ChevronRight size={16} />
    </div>
  </motion.div>
);

const Products = ({ onSelectProduct }: { onSelectProduct: (p: any) => void }) => {
  const products = [
    {
      title: "TIENS Nutrient Calcium",
      description: "Our flagship calcium powder with high absorption rate, promoting bone density and overall skeletal health.",
      image: "https://picsum.photos/seed/calcium/400/400"
    },
    {
      title: "Zinc Supplements",
      description: "Essential for protein synthesis and cell division, tailored for daily vitality and immune resilience.",
      image: "https://picsum.photos/seed/zinc/400/400"
    },
    {
      title: "Pure Cordyceps",
      description: "Highly valued traditional supplement for respiratory health and enhancing physical endurance.",
      image: "https://picsum.photos/seed/cordy/400/400"
    }
  ];

  return (
    <section id="products" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <SectionHeading 
            subtitle="Premium Bio-Tech" 
            title="Supplements & Equipment" 
          />
          <button className="flex items-center gap-2 text-slate-800 font-bold border-b-2 border-emerald-600/20 hover:border-emerald-600 pb-1 transition-all mb-4">
            View All Products <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <ProductCard 
              key={i} 
              title={p.title} 
              description={p.description} 
              image={p.image} 
              delay={i * 0.1} 
              onClick={() => onSelectProduct(p)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Opportunity = () => {
  return (
    <section id="opportunity" className="py-32 relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://picsum.photos/seed/business-network/1920/1080" 
          alt="Business Network" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <span className="text-emerald-400 font-bold uppercase tracking-[0.3em] text-xs block">Entrepreneurship</span>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-white leading-tight">
            Build Your Own <span className="text-emerald-500">Legacy.</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The Tiens Business Opportunity offers a platform for you to achieve financial independence while promoting a healthy lifestyle. Join our global team of successful entrepreneurs today.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-emerald-600 text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20 active:scale-95"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call to email service
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // In a production environment, you would use a service like Formspree, EmailJS, or FormSubmit.co
      // with the email yoolguide@gmail.com
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <SectionHeading subtitle="Official Interface" title="Contact Our Team." />
              <p className="text-slate-500 mt-[-2rem] max-w-md">
                Reach out to our official Mogadishu headquarters for partnership registration, bulk nutritional orders, or health equipment support.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 shrink-0 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center text-emerald-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Mogadishu HQ</h4>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    East Taleh, Hodan District, Mogadishu.<br />
                    Somally Region (Near Mogadishu University).
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 shrink-0 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center text-emerald-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Directorate Email</h4>
                  <p className="text-sm text-slate-500 mt-1 font-bold">info@tiens-somalia.so</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-slate-100"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Inquiry Sent Successfully</h3>
                <p className="text-slate-500 max-w-sm">
                  Your message has been logged and sent to <strong>yoolguide@gmail.com</strong>. Our regional team will contact you within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-emerald-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="space-y-6"
                action="https://formsubmit.co/yoolguide@gmail.com" 
                method="POST"
              >
                {/* Honeypot for spam */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                {/* Disable Captcha for better UX */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Success redirection omitted for SPA feel, handled by React state if using AJAX, 
                    but here we use natural form submission for reliability with FormSubmit.co */}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="Enter name" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 focus:ring-1 focus:ring-emerald-500 transition-all outline-none text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="name@email.com" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 focus:ring-1 focus:ring-emerald-500 transition-all outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Department</label>
                  <select 
                    name="department"
                    className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 focus:ring-1 focus:ring-emerald-500 transition-all outline-none text-sm appearance-none cursor-pointer"
                  >
                    <option>Distributor Registration</option>
                    <option>Product Bio-Data</option>
                    <option>Corporate Partnership</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Brief Message</label>
                  <textarea 
                    required
                    name="message"
                    rows={4} 
                    placeholder="How can we help your journey?" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 focus:ring-1 focus:ring-emerald-500 transition-all outline-none text-sm resize-none"
                  />
                </div>

                <button 
                  disabled={loading}
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-4 rounded-lg font-bold shadow-md shadow-emerald-100 hover:bg-emerald-700 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    'Send Registered Inquiry'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-headline font-extrabold text-slate-800">Tiens Somalia</span>
          </div>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] text-center md:text-left">
            © {new Date().getFullYear()} Tiens Somalia. Official Distributor Interface.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          <a href="#" className="text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-emerald-600 transition-colors">Home</a>
          <a href="#about" className="text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-emerald-600 transition-colors">Products</a>
          <a href="#opportunity" className="text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-emerald-600 transition-colors">Opportunity</a>
          <a href="#" className="text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-emerald-600 transition-colors">Community</a>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-emerald-600 transition-colors">Privacy</a>
          <a href="#" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-emerald-600 transition-colors">Terms</a>
          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">HACCP Certified</span>
        </div>
      </div>
    </footer>
  );
};

// --- Page Application ---

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <div className="relative font-sans antialiased text-zinc-800">
      <AnimatePresence>
        {selectedProduct && (
          <ArticleView 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Products onSelectProduct={setSelectedProduct} />
        <Opportunity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

