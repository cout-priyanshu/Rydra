'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AuthModel from './AuthModel'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { signOut } from 'next-auth/react'
import { Bike, Car, ChevronRight, LogOut, Menu, Truck, X } from 'lucide-react'
import { setUserData } from '@/redux/userSlice'

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Bookings', href: '/bookings' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [authOpen, setAuthOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const pathname = usePathname()
  const dispatch = useDispatch<AppDispatch>()
  const { userData } = useSelector((state: RootState) => state.user)

  const handleLogOut = async () => {
    await signOut({ redirect: false })
    dispatch(setUserData(null))
    setProfileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-3 left-1/2 -translate-x-1/2 w-[94%] md:w-[86%] z-50 rounded-full bg-black/70 text-white shadow-[0_15px_50px_rgba(0,0,0,0.7)] py-3 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={44} height={44} priority />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
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

          {/* Right Action Area */}
          <div className="flex items-center gap-3">
            {/* Desktop Auth / Profile */}
            <div className="hidden md:block relative">
              {!userData ? (
                <button
                  onClick={() => setAuthOpen(true)}
                  className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-100 transition"
                >
                  Login
                </button>
              ) : (
                <>
                  <button
                    className="w-11 h-11 rounded-full bg-white text-black font-bold flex items-center justify-center cursor-pointer"
                    onClick={() => setProfileOpen((p) => !p)}
                  >
                    {userData.name?.charAt(0).toUpperCase()}
                  </button>

                  <AnimatePresence>
                    {profileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-14 right-0 w-[300px] bg-white text-black rounded-2xl shadow-xl border overflow-hidden"
                      >
                        <div className="p-5">
                          <p className="font-semibold text-lg">{userData.name}</p>
                          <p className="text-xs uppercase text-gray-500 mb-4">{userData.role}</p>

                          {userData.role !== 'partner' && (
                            <Link
                              href="/become-partner"
                              onClick={() => setProfileOpen(false)}
                              className="w-full flex items-center gap-3 py-3 px-3 hover:bg-gray-100 rounded-xl transition cursor-pointer"
                            >
                              <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                                  <Bike size={14} />
                                </div>
                                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                                  <Car size={14} />
                                </div>
                                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                                  <Truck size={14} />
                                </div>
                              </div>
                              <span className="text-sm font-medium">Become a Partner</span>
                              <ChevronRight size={16} className="ml-auto text-gray-400" />
                            </Link>
                          )}

                          <button
                            onClick={handleLogOut}
                            className="w-full flex items-center gap-3 py-3 px-3 hover:bg-red-50 text-red-600 rounded-xl mt-2 transition cursor-pointer text-sm font-medium"
                          >
                            <LogOut size={16} />
                            LogOut
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>

            {/* Mobile Auth Button / Avatar */}
            <div className="md:hidden">
              {!userData ? (
                <button
                  onClick={() => setAuthOpen(true)}
                  className="px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-medium hover:bg-gray-100 transition"
                >
                  Login
                </button>
              ) : (
                <button
                  className="w-9 h-9 rounded-full bg-white text-black text-sm font-bold flex items-center justify-center"
                  onClick={() => setProfileOpen((p) => !p)}
                >
                  {userData.name?.charAt(0).toUpperCase()}
                </button>
              )}
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[80px] left-1/2 -translate-x-1/2 w-[92%] bg-[#0B0B0B] text-white rounded-2xl shadow-2xl z-40 md:hidden overflow-hidden border border-white/10"
            >
              <div className="flex flex-col divide-y divide-white/10">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`px-6 py-4 transition ${
                        isActive ? 'text-white bg-white/5 font-semibold' : 'text-gray-300 hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile User Profile Bottom Sheet */}
      <AnimatePresence>
        {profileOpen && userData && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setProfileOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed inset-x-0 bottom-0 bg-white text-black rounded-t-3xl shadow-2xl z-50 md:hidden"
            >
              <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto my-3" />
              <div className="p-6">
                <p className="font-semibold text-lg">{userData.name}</p>
                <p className="text-xs uppercase text-gray-500 mb-4">{userData.role}</p>

                {userData.role !== 'partner' && (
                  <Link
                    href="/become-partner"
                    onClick={() => setProfileOpen(false)}
                    className="w-full flex items-center gap-3 py-3 px-3 hover:bg-gray-100 rounded-xl transition"
                  >
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                        <Bike size={14} />
                      </div>
                      <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                        <Car size={14} />
                      </div>
                      <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                        <Truck size={14} />
                      </div>
                    </div>
                    <span className="text-sm font-medium">Become a Partner</span>
                    <ChevronRight size={16} className="ml-auto text-gray-400" />
                  </Link>
                )}

                <button
                  onClick={handleLogOut}
                  className="w-full flex items-center gap-3 py-3 px-3 hover:bg-red-50 text-red-600 rounded-xl mt-2 transition text-sm font-medium"
                >
                  <LogOut size={16} />
                  LogOut
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AuthModel open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  )
}