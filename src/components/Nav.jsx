import React, { useState, useRef, useEffect } from 'react';
import { FaRocket } from 'react-icons/fa';
import { Menu, X, ChevronDown, ChevronRight, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png'
const Nav = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Grouping links to avoid clutter
  const mainLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Stats', href: '#stats' },
    { name: 'Markets', href: '#markets' },
    { name: 'Rebate', href: '#rebate' },
  ];

  const secondaryLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'Features', href: '#features' },
    { name: 'Video', href: '#video' },
    { name: 'Blockchain', href: '#blockchain' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Risk', href: '#risk' },
    { name: 'Contact', href: '#cta' },
  ];

  return (
    <>
      <nav 
        className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-slate-200/10 bg-white/80 dark:bg-slate-950/95 dark:border-slate-700/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* 1. Left: Logo */}
           {/* 1. Left: Logo Image */}
<div className="flex-shrink-0 flex items-center cursor-pointer">
  <motion.img 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    src={logo} // Replace with your actual path (e.g., logo.png or logo.svg)
    alt="Velox Logo"
    className="h-14 w-auto object-contain"
    onError={(e) => {
      e.target.src = 'https://via.placeholder.com/210x70?text=VELOX'; // Fallback if image fails
    }}
  />
</div>

            {/* 2. Center: Moderated Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {mainLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100 hover:text-slate-700 dark:hover:text-white transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}

              {/* "More" Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <button
                  onClick={() => setShowDropdown((prev) => !prev)}
                  className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100 hover:text-slate-700 dark:hover:text-white"
                >
                  More <ChevronDown size={14} className={`ml-1 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full -left-10 mt-2 w-48 bg-slate-100 dark:bg-slate-900 rounded-xl shadow-2xl py-2 overflow-hidden border border-slate-200/80 dark:border-slate-700"
                    >
                      {secondaryLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          className="block px-4 py-3 text-[11px] font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                        >
                          {link.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* 3. Right: Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-200 transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
              <motion.a 
                href="https://velox-user-capitalmarket-dashboard-ai.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-teal-700 text-white px-6 py-2.5 rounded-full font-black text-sm tracking-widest shadow-lg hover:bg-teal-600 transition-colors"
              >
                JOIN NOW
              </motion.a>
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 bg-slate-100 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
              <button onClick={() => setIsOpen(true)} className="text-slate-900 dark:text-slate-100 p-2">
                <Menu size={30} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer (Remains organized) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed right-0 top-0 h-full w-[300px] bg-slate-50 dark:bg-slate-950 z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 bg-teal-800 flex justify-between items-center text-white">
                <span className="font-bold tracking-widest">NAVIGATION</span>
                <X size={24} onClick={() => setIsOpen(false)} className="cursor-pointer" />
              </div>
              <div className="flex-1 overflow-y-auto">
                {[...mainLinks, ...secondaryLinks].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-6 py-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                  >
                    <span className="text-sm font-bold uppercase tracking-tighter">{link.name}</span>
                    <ChevronRight size={14} className="text-teal-600" />
                  </a>
                ))}
              </div>
              <div className="p-6">
                <button className="w-full bg-gradient-to-r from-teal-700 to-teal-500 text-white py-4 rounded-xl font-bold tracking-widest">
                  JOIN VELOX
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;