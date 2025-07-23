import  { useState } from 'react';
import { Car, Users, Fuel, Shield, Star, } from 'lucide-react';

const handleBookVehicle = (vehicleName: string) => {
  const message = `Hi! I'm interested in booking the ${vehicleName}. Could you please provide more details about availability and pricing?`;
  const whatsappUrl = `https://wa.me/918075438808?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

const handleFleetManager = () => {
  const message = `Hi! I need a custom vehicle solution. Could you please help me with my requirements?`;
  const whatsappUrl = `https://wa.me/918075438808?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

const Vehicles = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const vehicles = [
    {
      id: 101,
      name: 'Maruti Ertiga',
      category: 'MPV',
      image: '/ertiga.jpeg',
      price: '₹2,200',
      period: 'per day',
      features: ['7 Seats', 'Manual', 'AC', 'Spacious'],
      specs: {
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 7,
        bags: 4
      },
      rating: 4.7
    },
    {
      id: 102,
      name: 'Toyota Innova Crysta',
      category: 'MPV',
      image: '/crysta.jpeg',
      price: '₹3,000',
      period: 'per day',
      features: ['7 Seats', 'Automatic', 'AC', 'Premium'],
      specs: {
        fuel: 'Diesel',
        transmission: 'Automatic',
        seats: 7,
        bags: 5
      },
      rating: 4.9
    },
    {
      id: 103,
      name: 'Toyota Rumion',
      category: 'MPV',
      image: '/123.jpeg',
      price: '₹2,500',
      period: 'per day',
      features: ['7 Seats', 'Manual', 'AC', 'Comfort'],
      specs: {
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 7,
        bags: 4
      },
      rating: 4.6
    },
    {
      id: 104,
      name: 'Maruti Invicto',
      category: 'MPV',
      image: '/invicto 1.jpeg',
      price: '₹2,800',
      period: 'per day',
      features: ['7 Seats', 'Automatic', 'AC', 'Premium'],
      specs: {
        fuel: 'Petrol',
        transmission: 'Automatic',
        seats: 7,
        bags: 4
      },
      rating: 4.8
    },
    {
      id: 105,
      name: 'Honda City',
      category: 'Sedan',
      image: '/city.jpeg',
      price: '₹2,000',
      period: 'per day',
      features: ['5 Seats', 'Automatic', 'AC', 'Comfort'],
      specs: {
        fuel: 'Petrol',
        transmission: 'Automatic',
        seats: 5,
        bags: 3
      },
      rating: 4.7
    },
    {
      id: 106,
      name: 'Urbania',
      category: 'Van',
      image: '/urbania.jpeg',
      price: '₹5,000',
      period: 'per day',
      features: ['17 Seats', 'AC', 'Spacious', 'Comfort'],
      specs: {
        fuel: 'Diesel',
        transmission: 'Manual',
        seats: 17,
        bags: 10
      },
      rating: 4.8
    },
    {
      id: 107,
      name: 'Force Traveller',
      category: 'Van',
      image: '/1-force-tempo-traveller-3050-1-1741842933.webp',
      price: '₹4,500',
      period: 'per day',
      features: ['12-26 Seats', 'AC', 'Spacious', 'Comfort'],
      specs: {
        fuel: 'Diesel',
        transmission: 'Manual',
        seats: 26,
        bags: 15
      },
      rating: 4.7
    },
    {
      id: 108,
      name: 'Scania Bus',
      category: 'Bus',
      image: '/scania bus.webp',
      price: '₹12,000',
      period: 'per day',
      features: ['40+ Seats', 'AC', 'Luxury', 'Comfort'],
      specs: {
        fuel: 'Diesel',
        transmission: 'Manual',
        seats: 40,
        bags: 40
      },
      rating: 4.9
    },
    {
      id: 109,
      name: 'Toyota Etios',
      category: 'Sedan',
      image: '/etios.jpeg',
      price: '₹1,800',
      period: 'per day',
      features: ['5 Seats', 'Manual', 'AC', 'Economy'],
      specs: {
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        bags: 3
      },
      rating: 4.5
    },
    {
      id: 110,
      name: 'Maruti Dzire',
      category: 'Sedan',
      image: '/etios.jpeg', // Use etios image as placeholder, or replace with '/dzire.jpeg' if available
      price: '₹1,700',
      period: 'per day',
      features: ['5 Seats', 'Manual', 'AC', 'Economy'],
      specs: {
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        bags: 3
      },
      rating: 4.4
    },
    {
      id: 111,
      name: 'Glider Bus',
      category: 'Bus',
      image: '/scania bus.webp', // Use scania bus image as placeholder, or replace with '/glider bus.jpeg' if available
      price: '₹11,000',
      period: 'per day',
      features: ['40+ Seats', 'AC', 'Luxury', 'Comfort'],
      specs: {
        fuel: 'Diesel',
        transmission: 'Manual',
        seats: 40,
        bags: 40
      },
      rating: 4.8
    },
    {
      id: 112,
      name: 'Toyota Hycross',
      category: 'MPV',
      image: '/crysta.jpeg', // Use crysta image as placeholder, or replace with '/hycross.jpeg' if available
      price: '₹3,200',
      period: 'per day',
      features: ['7 Seats', 'Automatic', 'AC', 'Premium'],
      specs: {
        fuel: 'Petrol',
        transmission: 'Automatic',
        seats: 7,
        bags: 4
      },
      rating: 4.7
    }
  ];

  const categories = ['All', 'MPV', 'Sedan', 'Van', 'Bus'];

  const filteredVehicles = selectedCategory === 'All' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.category === selectedCategory);

  return (
    <section id="vehicles" className="py-16 md:py-24 bg-gradient-to-b from-emerald-50 via-emerald-100 to-emerald-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Our Vehicle Fleet
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12">
            Choose from our diverse range of well-maintained vehicles for your perfect journey
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {filteredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl  transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-400 fill-current" />
                    <span className="text-xs md:text-sm font-medium">{vehicle.rating}</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                  {vehicle.category}
                </div>
              </div>
              
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">{vehicle.name}</h3>
                </div>
                
                {/* Vehicle Specs */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{vehicle.specs.seats} Seats</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{vehicle.specs.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{vehicle.specs.transmission}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{vehicle.specs.bags} Bags</span>
                  </div>
                </div>
                
                {/* Features */}
                <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                  {vehicle.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => handleBookVehicle(vehicle.name)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 md:py-3 px-4 md:px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-base"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Manager CTA */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Need a Custom Solution?</h3>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            Can't find the perfect vehicle? Our fleet manager will help you find the ideal solution for your specific needs.
          </p>
          <button
            onClick={handleFleetManager}
            className="bg-white text-emerald-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-base"
          >
            Contact Our Fleet Manager
          </button>
        </div>
      </div>
    </section>
  );
};

export default Vehicles;