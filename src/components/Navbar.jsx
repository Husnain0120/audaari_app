'use client';

import { HandCoins } from 'lucide-react'; // ✅ Import icon from lucide-react

const Navbar = () => {
  return (
    <nav className='w-full bg-black  text-white py-4 px-6 flex items-center justify-between shadow-[0_0_20px_rgba(255,255,255,0.05)]'>
      {/* ✅ Left side logo only */}
      <div className='flex items-center gap-2'>
        <HandCoins className='w-6 h-6 text-white' /> {/* ✅ Icon */}
        <span className='font-semibold text-lg'>Audaari.com</span>{' '}
        {/* ✅ Optional small name */}
      </div>
    </nav>
  );
};

export default Navbar;
