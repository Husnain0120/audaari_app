'use client';

import { ArrowLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation'; // ✅ Import router from Next.js

const VerifyPage = () => {
  const router = useRouter(); // ✅ Initialize router

  // ✅ Function to go back to previous page
  const handleGoBack = () => {
    router.back(); // Goes to previous page (like undo)
  };

  return (
    // ✅ Center everything (same styling)
    <div className='flex items-center justify-center mt-30 dark:bg-black text-white'>
      <form className='otp-Form flex flex-col items-center justify-center p-10 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.05)] w-full max-w-sm relative'>
        {/* ✅ Heading */}
        <span className='mainHeading text-3xl font-bold mb-2 text-center dark:text-white text-black'>
          Enter OTP
        </span>

        {/* ✅ Subheading */}
        <p className='otpSubheading text-gray-400 text-sm mb-6 text-center'>
          We have sent a verification code to your mobile number
        </p>

        {/* ✅ Single OTP Input Field */}
        <input
          required
          type='text'
          inputMode='numeric' // ✅ Only numbers allowed
          pattern='[0-9]*' // ✅ Restrict to digits
          maxLength={4} // ✅ Only 4 digits allowed
          placeholder='Enter 4-digit OTP'
          className='otp-input w-full text-center rounded-md bg-gray-100 dark:bg-black border border-white/70 text-white focus:outline-none dark:focus:border-white focus:border-black text-lg py-3 mb-6 placeholder-gray-500'
          id='otp-input'
        />

        {/* ✅ Verify Button */}
        <button
          className='verifyButton w-full py-3 rounded-full text-white dark:text-black bg-black dark:bg-white font-medium hover:opacity-90 transition mb-3'
          type='submit'
        >
          Verify
        </button>

        {/* ✅ Exit Button (cross) → goes back to previous page */}
        <button
          type='button'
          onClick={handleGoBack} // ✅ Added go-back function here
          className='exitBtn absolute top-4 right-6 text-3xl text-gray-500 dark:hover:text-white hover:text-black transition border rounded-full p-2'
        >
          <ArrowLeftIcon />
        </button>

        {/* ✅ Resend Note */}
        <p className='resendNote text-gray-400 text-sm mt-4 text-center'>
          Didn’t receive the code?{' '}
          <button
            type='button'
            className='resendBtn text-gray-800 cursor-pointer dark:text-white underline hover:opacity-80 transition'
          >
            Resend Code
          </button>
        </p>
      </form>
    </div>
  );
};

export default VerifyPage;
