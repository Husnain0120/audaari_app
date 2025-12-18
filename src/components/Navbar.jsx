'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HandCoins } from 'lucide-react';
import Link from 'next/link';
import { ToggleButtonTheme } from './Toggle-Button-theme';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav
      className="
         top-0 left-0 w-full z-50
        dark:bg-black bg-white
        shadow-[0_0_20px_rgba(255,255,255,0.05)]
        text-white py-3 px-6 flex items-center justify-between
      "
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
        <Link href={'/login'}>
          <Button
            className={'bg-gray-900 text-white border dark:border-white '}
          >
            Login
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
