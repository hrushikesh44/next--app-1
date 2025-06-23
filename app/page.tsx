'use client';
import { Hero } from '@/components/hero';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FloatingDock } from '@/components/floating-dock';

export default function Home() {
  useEffect(() => {
    Aos.init({
      disable: 'phone',
      duration: 800,
      easing: 'ease-out-cubic',
    });
  });
  return (
    <div>
      <div className="pt-24 pb-20 max-w-5xl md:pb-32 md:pt-32 sm:px-6 mx-auto min-h-screen">
        {/*Hero*/}
        <Hero />
        {/*Projects*/}
        {/*Experience*/}
        {/*Socials*/}
        {/* <FloatingDock  /> */}
        {/*Footer*/}
      </div>
    </div>
  );
}
