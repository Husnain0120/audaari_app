'use client';

import { Crown } from 'lucide-react'; // 👑 Premium icon (lucide-react)
import { useState } from 'react';

const GetPremium = () => {
  // ⚙️ Simulated premium status (false = not premium)
  const [isPremium, setIsPremium] = useState(false);

  return (
    <div className='flex items-center justify-center mt-30 bg-black text-white'>
      <div className='bg-black/60 p-10 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.05)] w-full max-w-sm text-center'>
        {/* ✅ Icon */}
        <div className='flex justify-center mb-4'>
          <Crown className='w-12 h-12 text-yellow-400' />
        </div>

        {/* ✅ Conditional Rendering */}
        {isPremium ? (
          <>
            {/* ✅ Premium user content */}
            <h1 className='text-2xl font-bold mb-2'>Welcome, Premium User!</h1>
            <p className='text-gray-400 mb-6'>
              You have full access to this feature.
            </p>
            <button
              onClick={() => alert('Premium Feature Activated 🚀')}
              className='bg-white text-black w-full py-3 rounded-full font-medium hover:opacity-90 transition'
            >
              Access Premium Feature
            </button>
          </>
        ) : (
          <>
            {/* 🚫 Non-premium message */}
            <h1 className='text-2xl font-bold mb-2'>Premium Only</h1>
            <p className='text-gray-400 mb-6'>
              This feature is only available for Premium users.
            </p>
            <button
              onClick={() => setIsPremium(true)} // ✅ Demo toggle to simulate upgrade
              className='bg-white text-black w-full py-3 rounded-full font-medium hover:opacity-90 transition'
            >
              Upgrade to Premium
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default GetPremium;
