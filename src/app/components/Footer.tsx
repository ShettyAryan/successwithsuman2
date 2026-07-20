import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 pt-16 md:pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 sm:gap-12 mb-16">
          <div className="md:col-span-5">
            <div
              className="text-xl sm:text-2xl tracking-tighter mb-5 text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
            >
              Success with Suman
            </div>
            <p className="text-white/65 leading-relaxed max-w-md">
              Personal CFO & Wealth Coach helping high-income professionals turn earnings into lasting,
              protected, multi-generational wealth.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="text-white/50 mb-4 font-mono text-xs tracking-wider uppercase">Navigate</div>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
              <Link to="/services" className="text-white/80 hover:text-white transition-colors">Services</Link>
              <Link to="/masterclass" className="text-white/80 hover:text-white transition-colors">Masterclass</Link>
              <Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="text-white/50 mb-4 font-mono text-xs tracking-wider uppercase">Credentials</div>
            <ul className="text-white/80 space-y-2">
              <li>IRDA & AMFI Certified</li>
              <li>19+ Years of Experience</li>
              <li>7,000+ Hours of Training</li>
              <li>Amazon Bestselling Author, "I Will Never Die"</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-white/50 text-sm">
          <p>© 2026 Success with Suman. All rights reserved.</p>
          <p className="font-mono">Built on clarity. Designed for legacy.</p>
        </div>
      </div>
    </footer>
  );
}
