'use client';

import { HandCoins } from 'lucide-react'; // ✅ Import icon from lucide-react
import { ToggleButtonTheme } from './Toggle-Button-theme';

const Navbar = () => {
  return (
    <nav className='w-full dark:bg-black   text-white py-4 px-6 flex items-center justify-between shadow-[0_0_20px_rgba(255,255,255,0.05)]'>
      {/* ✅ Left side logo only */}
      <div className='flex items-center gap-2'>
        <HandCoins className='w-6 h-6 dark:text-white text-black' />{' '}
        {/* ✅ Icon */}
        <span className='font-semibold text-lg dark:text-white text-black'>
          Audaari.com
        </span>{' '}
        {/* ✅ Optional small name */}
      </div>
      <div>
        <ToggleButtonTheme />
      </div>
    </nav>
  );
};

export default Navbar;
