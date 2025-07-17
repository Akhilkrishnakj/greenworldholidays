import React, { useRef, useEffect, useState } from 'react';

const handlePlanTrip = () => {
  const message = `Hi! I'm interested in planning a Kerala trip with Green World Holidays. Could you please help me with travel packages and car rental options?`;
  const whatsappUrl = `https://wa.me/918075438808?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

const mobileImages = [
  '/kathakali.webp',
  '/athirapally falls.jpg',
  '/kovala beach.jpg',
  '/vagamon.jpg',
];

const desktopImages = [
  '/kathakali.webp',
  '/athirapally falls.jpg',
  '/kovala beach.jpg',
  '/vagamon.jpg',
];

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' ? window.innerWidth >= 768 : false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isDesktop;
}

const Hero = () => {
  const isDesktop = useIsDesktop();
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Only attach scroll event if desktop and video is present
  useEffect(() => {
    if (!isDesktop) return; // Only run on desktop

    const handleScroll = () => {
      if (!videoRef.current || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom > window.innerHeight / 2) {
        videoRef.current.muted = false;
      } else {
        videoRef.current.muted = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  return (
    <div ref={heroRef} className="relative min-h-screen w-full overflow-hidden">
      {isDesktop ? (
        <div className="absolute inset-0 w-full h-full z-0 grid grid-cols-2 grid-rows-2">
          {desktopImages.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Kerala tourist spot ${idx + 1}`}
              className="w-full h-full object-cover"
              width={800}
              height={600}
              loading="eager"
              draggable={false}
              style={{ gridColumn: (idx % 2) + 1, gridRow: Math.floor(idx / 2) + 1 }}
            />
          ))}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ) : (
        <div className="absolute inset-0 w-full h-full z-0 flex flex-col">
          {/* Four full-width images stacked vertically, each 1/4 height */}
          {mobileImages.slice(0, 4).map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Kerala tourist spot ${idx + 1}`}
              className="w-full h-1/4 object-cover md:hidden"
              width={400}
              height={160}
              loading="eager"
              draggable={false}
            />
          ))}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}
      {/* Overlay for readability (both views) */}
      <div className="absolute inset-0 bg-black/20 z-10 md:z-10" />
      {/* Overlay content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <p className="text-emerald-200 text-lg md:text-xl font-semibold mb-4 drop-shadow-lg">നമസ്കാരം • Welcome to Kerala</p>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 leading-tight drop-shadow-xl">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-teal-300">God's Own</span>
          <span className="block text-white">Country</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-100 mb-8 max-w-2xl md:max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Experience the enchanting beauty of Kerala - from misty hill stations and serene backwaters to vibrant cultural traditions and ancient heritage
        </p>
        <button
          onClick={handlePlanTrip}
          className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg md:text-xl shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        >
          Plan Your Kerala Journey
        </button>
      </div>
    </div>
  );
};

export default Hero;

