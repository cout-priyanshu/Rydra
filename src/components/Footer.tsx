'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';

// Custom clean SVGs for social icons to avoid lucide-react brand deprecation issues
const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterXIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

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
};

const SOCIAL_LINKS = [
  { Icon: FacebookIcon, href: '#', label: 'Facebook' },
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
  { Icon: TwitterXIcon, href: '#', label: 'Twitter' },
  { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className='w-full bg-zinc-950 text-zinc-100 border-t border-zinc-900'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className='max-w-7xl mx-auto px-6 pt-16 pb-12'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-zinc-800/80'>
          
          <div className='lg:col-span-2 space-y-5'>
            <div className='flex items-center gap-2'>
              <span className='h-2 w-2 rounded-full bg-emerald-500' />
              <h2 className='text-2xl font-black tracking-tight text-white'>RYDRA</h2>
            </div>
            
            <p className='text-zinc-400 text-sm leading-relaxed max-w-sm'>
              India’s trusted mobility marketplace. Book verified vehicles from compact city scooters to commercial transport trucks with transparent upfront pricing.
            </p>

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