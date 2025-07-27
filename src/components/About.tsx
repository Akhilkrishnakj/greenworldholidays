import  { useEffect, useRef, useState } from 'react';
import { Leaf, Users, Award, Heart, Star, MapPin, Phone, Car } from 'lucide-react';

// ✅ Custom Hook for CountUp
function useCountUp(target: number, duration: number, start: boolean, suffix = '') {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTimestamp: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);

  return suffix ? `${count}${suffix}` : count;
}

const About = () => {
  // ✅ Track if stats section is in view
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!statsRef.current) return;
      const rect = statsRef.current.getBoundingClientRect();
      if (!statsInView && rect.top < window.innerHeight && rect.bottom > 0) {
        setStatsInView(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [statsInView]);

  // ✅ Animated counters
  const customersCount = useCountUp(10000, 1200, statsInView, '+');
  const vehiclesCount = useCountUp(100, 1000, statsInView, '+');
  const yearsCount = useCountUp(20, 1000, statsInView, '+');
  const satisfactionCount = useCountUp(98, 1000, statsInView, '%');

  const stats = [
    { icon: Users, number: customersCount, label: 'Happy Customers' },
    { icon: Car, number: vehiclesCount, label: 'Vehicles Available' },
    { icon: Award, number: yearsCount, label: 'Years Experience' },
    { icon: Heart, number: satisfactionCount, label: 'Customer Satisfaction' },
  ];

  const features = [
    {
      title: 'Personalized Service',
      description: 'Tailored travel experiences designed just for you and your family',
      icon: Heart
    },
    {
      title: 'Lifelong Relationships',
      description: 'Building lasting connections that extend beyond your journey',
      icon: Users
    },
    {
      title: 'Dream Fulfillment',
      description: 'Turning your travel dreams into unforgettable memories',
      icon: Star
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-green-500/5 to-teal-500/5"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-emerald-200/20 to-green-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-teal-200/20 to-emerald-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Section */}
          <div className="text-center mb-12 lg:mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-6 shadow-lg">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-700 via-green-600 to-teal-600 bg-clip-text text-transparent mb-6 leading-tight">
              About Green World Holidays
          </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Your Complete Travel Partner for Unforgettable Kerala Experiences
          </p>
        </div>

          {/* Motive Section */}
          <div className="mb-16 lg:mb-24">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-emerald-100/50 relative overflow-hidden">
              <div className="relative z-10 text-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Our Mission & Promise</h3>
                <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed italic font-medium max-w-5xl mx-auto">
                  "To provide better tour reports, when you & your family depart it will be a lifelong touch with us. From your experience you will automatically recommend your friends & relatives to us. We assure that we will fulfill your dreams and the moments with us."
                </blockquote>
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center space-x-2 text-emerald-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <div className="w-4 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Definition Section */}
          <div className="mb-16 lg:mb-24 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Complete Travel Solutions for
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"> Kerala</span>
            </h3>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6">
              At Green World Holidays, we provide comprehensive travel solutions combining the best holiday experiences with reliable car rental services. Whether you're planning a family vacation or need a vehicle for business travel, we've got you covered.
            </p>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              Our experienced team ensures seamless service delivery, from curating perfect travel itineraries to maintaining a modern fleet of well-serviced vehicles. We're committed to making your travel experience smooth, safe, and memorable.
            </p>
          </div>
          
          {/* Features and MD Photo Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
            {/* Features Grid */}
            <div className="space-y-8">
              <div className="grid sm:grid-cols-1 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-100/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* MD Photo and Info */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative group mb-6 flex items-center justify-center">
                {/* 3D Decorative Background */}
                <div className="absolute -inset-6 z-0">
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-emerald-200 via-green-100 to-teal-200 blur-2xl opacity-80 shadow-2xl" style={{ filter: 'blur(32px)' }}></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-gradient-to-tr from-emerald-400/40 via-green-300/30 to-teal-300/40 shadow-emerald-200/40 shadow-2xl" style={{ zIndex: 1 }}></div>
                </div>
                <img
                  src="/Jayan.jpg"
                  alt="Managing Director Jayan - Green World Holidays"
                  className="relative z-10 rounded-2xl object-cover object-center shadow-xl border-4 border-white group-hover:shadow-[0_0_32px_8px_rgba(16,185,129,0.3)] transition-all duration-300"
                  style={{ width: '8cm', height: '8cm', aspectRatio: '1/1', minWidth: 180, minHeight: 180, maxWidth: 320, maxHeight: 320 }}
                />
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-1">Jayan</h4>
                <div className="font-semibold text-emerald-700 mb-1">Managing Director</div>
                <div className="text-gray-600 text-sm mb-1">Green World Holidays & Car Rentals</div>
                <div className="flex justify-center items-center space-x-2 text-emerald-600 mt-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">+91 807 543 8808</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div
            ref={statsRef}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-emerald-100/50"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
              Our <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Achievements</span>
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-110 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-emerald-500 to-green-600 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:shadow-2xl group-hover:shadow-emerald-500/25 transition-all duration-300">
                    <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
          </div>
        </div>

          {/* Contact CTA */}
          <div className="mt-16 lg:mt-24 text-center">
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Kerala Journey?</h3>
              <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let us create unforgettable memories for you and your family. Contact us today to plan your perfect Kerala experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+918075438808"
                  className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/918075438808"
                  className="bg-emerald-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-900 transition-all duration-300 hover:scale-105 shadow-lg flex items-center space-x-2"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Plan Trip</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
