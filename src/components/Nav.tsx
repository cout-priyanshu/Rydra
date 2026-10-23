'use client'

import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Bookings', href: '/bookings' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact', href: '/contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <motion.div
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-3 left-1/2 -translate-x-1/2 w-[94%] md:w-[86%] z-50 rounded-full bg-black/70 text-white shadow-[0_15px_50px_rgba(0,0,0,0.7)] py-3 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={44} height={44} priority />
        </Link>

        <div className="flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  isActive ? 'text-white' : 'text-gray-400'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        <button className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-100 transition">
          Login
        </button>
      </div>
    </motion.div>
  )
}