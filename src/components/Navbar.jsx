'use client';

import { HandCoins } from 'lucide-react'; // ✅ Import icon from lucide-react
import Link from 'next/link';
import { ToggleButtonTheme } from './Toggle-Button-theme';

const Navbar = () => {
  return (
    <nav className='w-full dark:bg-black   text-white py-4 px-6 flex items-center justify-between shadow-[0_0_20px_rgba(255,255,255,0.05)]'>
      {/* ✅ Left side logo only */}
      <div className='flex items-center gap-2'>
        <Link href={'/'}>
          <HandCoins className='w-6 h-6 dark:text-white text-black' />{' '}
        </Link>
        {/* ✅ Icon */}{' '}
        {/* <Link href={'/'}>
          <span className='font-semibold text-lg dark:text-white text-black'>
            Audaari
          </span>{' '}
        </Link> */}
        {/* ✅ Optional small name */}
      </div>
      <div>
        <ToggleButtonTheme />
      </div>
    </nav>
  );
};

export default Navbar;
