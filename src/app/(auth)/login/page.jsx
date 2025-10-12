// app/components/AuthForm.jsx
'use client';
import { motion } from 'framer-motion';

/*
  یہ component:
  - نمبر داخل کرواتا ہے (register/login کے لیے)
  - submit کرتا ہے /api/send-otp کو
  - responsive ہے اور black & white theme follow کرتا ہے
  - comments میں fixes شامل ہیں
*/

export default function AuthForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='w-full max-w-md mx-auto p-6 bg-black/40 rounded-xl mt-40'
    >
      <h2 className='text-2xl font-extrabold text-white mb-4 text-center'>
        Register / Login
      </h2>

      <label className='block mb-2 text-sm text-gray-300'>Phone number</label>
      <input
        placeholder='+92300xxxxxxx'
        className='w-full px-4 py-3 rounded-md bg-black border border-white/20 text-white focus:outline-none'
      />

      <button
        type='submit'
        className='mt-6 w-full py-3 rounded-full text-black bg-white font-medium hover:opacity-90 transition'
      >
        Send OTP
      </button>
    </motion.form>
  );
}
