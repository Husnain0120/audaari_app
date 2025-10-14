// app/components/AuthForm.jsx
'use client';
import { motion } from 'framer-motion';

export default function AuthForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='w-full max-w-md mx-auto p-6 dark:bg-black/40 rounded-xl mt-40'
    >
      <h2 className='text-2xl font-extrabold dark:text-white mb-4 text-center'>
        Register / Login
      </h2>

      <label className='block mb-2 text-sm dark:text-gray-300'>
        Phone number
      </label>
      <input
        placeholder='+92300xxxxxxx'
        className='w-full px-4 py-3 rounded-md dark:bg-black bg-gray-100 text-black border border-white/20 dark:text-white dark:focus:outline-none focus:border-black'
      />

      <button
        type='submit'
        className='mt-6 w-full py-3 rounded-full text-white dark:text-black dark:bg-white bg-black font-medium hover:opacity-90 transition'
      >
        Send OTP
      </button>
    </motion.form>
  );
}
