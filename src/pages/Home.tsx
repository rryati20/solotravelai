import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-indigo-50">
      <Hero />
      <div className="relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80')] bg-fixed opacity-5"></div>
        <Features />
        <Testimonials />
        <CallToAction />
      </div>
    </div>
  );
}