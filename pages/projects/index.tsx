import React from 'react';
import Navbar from '@/app/components/navbar';
import Projects from '@/app/components/projects';

export default function ProjectsPage() {
  return (
    <div className="content-bg min-h-screen">
      <Navbar />
      <main className="flex w-full justify-center px-6 pb-12 pt-6">
        <div className="w-full max-w-6xl">
          <Projects />
        </div>
      </main>
    </div>
  );
}
