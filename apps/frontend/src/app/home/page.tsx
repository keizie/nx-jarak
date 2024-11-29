'use client';

import { useState } from 'react';
import GlobalNavBar from '@/components/gnb';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main className="flex flex-col min-h-screen">
      <GlobalNavBar isLoggedIn={isLoggedIn} />
      {/* Toggle button for demonstration purposes */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Toggle Login State
        </button>
      </div>
    </main>
  );
}
