'use client';

import Snowfall from 'react-snowfall';

import LoadingText from '@/components/LoadingText';

export default function Home() {
  return (
    <div>
      {' '}
      <Snowfall
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
        snowflakeCount={520}
      />
      <LoadingText /> {/* 👈 animated text here */}
    </div>
  );
}
