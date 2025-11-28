'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HandCoins } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ToggleButtonTheme } from './Toggle-Button-theme';

const Navbar = () => {
  // ✅ State to track navbar visibility
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // ✅ If scroll down, hide navbar
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNavbar(false);
      } else {
        // ✅ If scroll up, show navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-transform duration-300
        ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
        dark:bg-black bg-white shadow-[0_0_20px_rgba(255,255,255,0.05)]
        text-white py-3 px-6 flex items-center justify-between
      `}
    >
      {/* ✅ Left side logo */}
      <div className="flex items-center gap-2">
        <Link href="/">
          <HandCoins className="w-6 h-6 dark:text-white text-black" />
        </Link>
      </div>

      {/* ✅ Right side icons */}
      <div className="flex items-center">
        <div className="p-0.5 border-black rounded-full mx-4 border-2 dark:border-white transition-transform transform hover:scale-110 duration-300">
          <Link href="/profile">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
        <ToggleButtonTheme />
      </div>
    </nav>
  );
};

export default Navbar;
