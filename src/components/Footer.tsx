import React from 'react';
import { motion } from 'motion/react';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';

const FOOTER_LINKS = {
  quickLinks: [
    { label: 'Browse Fleet', href: '#fleet' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing & Plans', href: '#pricing' },
    { label: 'List Your Vehicle', href: '#host' },
    { label: 'Safety & Insurance', href: '#safety' },
  ],
  vehicleTypes: [
    { label: 'City Bikes & Scooters', href: '#bikes' },
    { label: 'Sedans & Hatchbacks', href: '#cars' },
    { label: 'Spacious SUVs', href: '#suvs' },
    { label: 'Passenger Vans', href: '#vans' },
    { label: 'Commercial Trucks', href: '#trucks' },
  ],
  support: [
    { label: 'Help & FAQ Center', href: '#faq' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Trust & Safety', href: '#trust' },
    { label: 'Contact Us', href: '#contact' },
  ],
};

const SOCIAL_LINKS = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
];

function Footer() {
  return (
    <footer className='w-full bg-zinc-950 text-zinc-100 border-t border-zinc-900'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className='max-w-7xl mx-auto px-6 pt-16 pb-12'
      >
        {/* Main Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-zinc-800/80'>
          
          {/* Brand Info & Newsletter */}
          <div className='lg:col-span-2 space-y-5'>
            <div className='flex items-center gap-2'>
              <span className='h-2 w-2 rounded-full bg-emerald-500' />
              <h2 className='text-2xl font-black tracking-tight text-white'>RYDRA</h2>
            </div>
            
            <p className='text-zinc-400 text-sm leading-relaxed max-w-sm'>
              India’s trusted mobility marketplace. Book verified vehicles from compact city scooters to commercial transport trucks with transparent upfront pricing.
            </p>

            {/* Newsletter Subscription */}
            <div className='pt-2 max-w-sm'>
              <label htmlFor='newsletter-email' className='text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 block'>
                Stay updated on deals
              </label>
              <div className='relative flex items-center'>
                <input
                  id='newsletter-email'
                  type='email'
                  placeholder='Enter your email'
                  className='w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors pr-11'
                />
                <button
                  type='button'
                  aria-label='Subscribe to newsletter'
                  className='absolute right-1.5 p-2 bg-white text-zinc-950 rounded-lg hover:bg-zinc-200 transition-colors'
                >
                  <ArrowRight size={14} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className='flex gap-3 pt-2'>
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-9 h-9 flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors'
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xs font-bold uppercase tracking-[0.16em] text-zinc-300 mb-4'>
              Explore
            </h3>
            <ul className='space-y-2.5 text-sm'>
              {FOOTER_LINKS.quickLinks.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className='text-zinc-400 hover:text-white transition-colors duration-150 inline-block'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Vehicle Types */}
          <div>
            <h3 className='text-xs font-bold uppercase tracking-[0.16em] text-zinc-300 mb-4'>
              Fleet Types
            </h3>
            <ul className='space-y-2.5 text-sm'>
              {FOOTER_LINKS.vehicleTypes.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className='text-zinc-400 hover:text-white transition-colors duration-150 inline-block'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact Details */}
          <div>
            <h3 className='text-xs font-bold uppercase tracking-[0.16em] text-zinc-300 mb-4'>
              Contact & Support
            </h3>
            <ul className='space-y-3 text-sm text-zinc-400'>
              <li className='flex items-center gap-2.5'>
                <Phone size={14} className='text-zinc-500 shrink-0' />
                <span>1800-123-RYDRA</span>
              </li>
              <li className='flex items-center gap-2.5'>
                <Mail size={14} className='text-zinc-500 shrink-0' />
                <span>support@rydra.in</span>
              </li>
              <li className='flex items-start gap-2.5'>
                <MapPin size={14} className='text-zinc-500 shrink-0 mt-0.5' />
                <span>Connaught Place, New Delhi, 110001</span>
              </li>
              <li className='flex items-center gap-2.5 pt-2 text-xs text-zinc-500'>
                <ShieldCheck size={14} className='text-emerald-500 shrink-0' />
                <span>100% Insured Fleet Rides</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className='pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 gap-4'>
          <p>© {new Date().getFullYear()} RYDRA Mobility Technologies Pvt. Ltd. All rights reserved.</p>
          
          <div className='flex items-center gap-6'>
            <a href='#terms' className='hover:text-zinc-400 transition-colors'>Terms</a>
            <a href='#privacy' className='hover:text-zinc-400 transition-colors'>Privacy</a>
            <a href='#cookies' className='hover:text-zinc-400 transition-colors'>Cookies</a>
            <a href='#security' className='hover:text-zinc-400 transition-colors'>Security</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;