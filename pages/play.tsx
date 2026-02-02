import React from 'react';
import Navbar from '@/app/components/navbar';
import { poppins, reenie_beanie } from '@/app/ui/fonts';

export default function Play() {
  return (
    <div className="content-bg min-h-screen">
      <Navbar />
      <main className="flex w-full justify-center px-6 pb-16 pt-10">
        <div className="w-full max-w-5xl text-center">
          <h1 className={`${reenie_beanie.className}`} style={{ fontSize: '2.5rem', color: 'var(--focus-color)' }}>
            Play
          </h1>
          <p className={`${poppins.className}`} style={{ color: 'var(--description-color)', marginTop: '0.75rem' }}>
            Coming soon — experiments, sketches, and side quests.
          </p>
        </div>
      </main>
    </div>
  );
}
