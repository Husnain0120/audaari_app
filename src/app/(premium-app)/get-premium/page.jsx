'use client';

import { Check, Lock, X } from 'lucide-react';
import { useState } from 'react';

const GetPremium = () => {
  const [plan, setPlan] = useState('free');

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-black transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* FREE CARD */}
        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-8 shadow-xl">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              Free Plan
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Basic access for new users
            </p>
          </div>

          <div className="mb-6">
            <span className="text-4xl font-extrabold text-black dark:text-white">
              Rs0
            </span>
            <span className="text-neutral-500"> / month</span>
          </div>

          <ul className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300 mb-8">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" /> Create your profile
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" /> View your contracts &
              name
            </li>
            <li className="flex items-center gap-2">
              <X className="w-4 h-4 text-red-500" /> Cannot complete KYC
            </li>
            <li className="flex items-center gap-2">
              <X className="w-4 h-4 text-red-500" /> Cannot accept contracts
            </li>
            <li className="flex items-center gap-2">
              <X className="w-4 h-4 text-red-500" /> Can deny contracts
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" /> Can follow users
            </li>
            <li className="flex items-center gap-2">
              <X className="w-4 h-4 text-red-500" /> No profile badge
            </li>
          </ul>

          <button
            onClick={() => setPlan('free')}
            className="w-full py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold hover:opacity-90 transition"
          >
            Continue Free
          </button>
        </div>

        {/* PREMIUM CARD */}
        <div className="relative rounded-3xl border-2 border-black dark:border-white bg-white dark:bg-gradient-to-b dark:from-neutral-900 dark:to-neutral-950 p-8 shadow-2xl">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white dark:bg-white dark:text-black text-xs font-semibold px-4 py-1 rounded-full">
            MOST POPULAR
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              Premium Plan
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              For serious contract dealers
            </p>
          </div>

          <div className="mb-6 flex items-end gap-2">
            <span className="text-5xl font-extrabold text-black dark:text-white">
              Rs599
            </span>
            <span className="text-neutral-500">/ month</span>
          </div>

          <ul className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300 mb-8">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" /> Create & verify
              profile
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" /> View contract sender
              details
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" /> Complete KYC
              verification
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" /> Accept contracts
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" /> Deny contracts
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" /> Follow other users
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" /> Premium profile badge
            </li>
          </ul>

          <button
            onClick={() => setPlan('premium')}
            className="w-full py-4 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" /> Upgrade to Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetPremium;
