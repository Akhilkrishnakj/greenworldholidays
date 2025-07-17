import React from 'react';
import { Leaf, Users, Award, Heart, Quote, Star, MapPin, Phone, Car } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '10K+', label: 'Happy Customers' },
    { icon: Car, number: '100+', label: 'Vehicles Available' },
    { icon: Award, number: '20+', label: 'Years Experience' },
    { icon: Heart, number: '98%', label: 'Customer Satisfaction' }
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
      {/* Green Gradient Background */}
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

          {/* Company Motive Section */}
          <div className="mb-16 lg:mb-24">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-emerald-100/50 relative overflow-hidden">
              {/* Decorative Quote Background */}
              <div className="absolute top-4 left-4 opacity-10">
                <Quote className="w-16 h-16 sm:w-24 sm:h-24 text-emerald-600" />
              </div>
              <div className="absolute bottom-4 right-4 opacity-10 rotate-180">
                <Quote className="w-16 h-16 sm:w-24 sm:h-24 text-emerald-600" />
              </div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Our Mission & Promise</h3>
                <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed italic font-medium max-w-5xl mx-auto">
                  "To provide better tour experiences that create lifelong connections. When you and your family depart, it will be a lifelong touch with us. From your experience, you will automatically recommend your friends & relatives to us. We assure that we will fulfill your dreams and make every moment with us truly memorable."
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

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div>
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

              {/* Features Grid */}
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
            
            {/* Right Content - Founder Image */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="relative group">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-600 rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-teal-400 to-emerald-500 rounded-3xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                
                {/* Main Image */}
                <div className="relative bg-white p-3 rounded-3xl shadow-2xl">
                  <img 
                    src="/Jayan.jpg" 
                    alt="Founder Jayan - Green World Holidays" 
                    className="rounded-2xl w-64 h-80 sm:w-80 sm:h-96 lg:w-72 lg:h-96 xl:w-80 xl:h-[28rem] object-cover object-center shadow-xl transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl border-4 border-emerald-100">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs font-bold text-gray-800">20+ Years</div>
                    <div className="text-xs text-gray-600">Experience</div>
                  </div>
                </div>
              </div>
              
              {/* Founder Info */}
              <div className="mt-8 text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-100/50">
                <h4 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent mb-2">
                  Managing Director
                </h4>
                <p className="text-gray-600 font-medium">Green World Holidays & Car Rentals</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <div className="flex items-center space-x-2 text-emerald-600">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">+91 807 543 8808</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-emerald-100/50">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
              Our <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Achievements</span>
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-all duration-300">
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