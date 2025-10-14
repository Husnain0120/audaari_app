'use client';
import { motion } from 'framer-motion';
import { LoaderCircle } from 'lucide-react';

export default function LoadingText() {
  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center mt-30  p-8 pb-20 gap-16 sm:p-20 dark:bg-black dark:text-white text-black'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <div className='flex flex-col items-center justify-center text-center space-y-6'>
          {/* --- Heading Animation --- */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className='text-4xl sm:text-6xl font-extrabold text-white relative'
          >
            {/* Text */}
            <span className='relative z-10 dark:text-white text-black'>
              Audaari
            </span>
            {/* Glowing Circle (replacing the dot) */}
            <span
              className='relative mx-[2px] inline-block w-1 h-1 sm:w-1 sm:h-1 rounded-full dark:bg-white bg-black animate-pingSlow '
              style={{
                boxShadow:
                  '0 0 10px rgba(255,255,255,0.9), 0 0 25px rgba(255,255,255,0.6)',
              }}
            ></span>
            <span className='text-[16px] sm:text-[20px] relative z-10 dark:text-white text-black'>
              com
            </span>

            {/* Glow Effect */}
            <span className='absolute inset-0 blur-3xl bg-blue-500/25 opacity-60 animate-pulse dark:text-white text-black' />
          </motion.h1>

          {/* --- Loader Animation (delayed) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.8, // 👈 appears after heading animation
              duration: 1,
              ease: 'easeOut',
            }}
            className='flex items-center justify-center'
          >
            <LoaderCircle className='animate-spin  w-8 h-8 sm:w-10 sm:h-10' />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
