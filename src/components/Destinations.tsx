import  { useState, useEffect } from 'react';
import { MapPin, Star, ArrowRight } from 'lucide-react';

const handleLearnMore = (destinationName: string) => {
  const message = `Hi! I'm interested in learning more about the ${destinationName} travel package. Could you please provide more details about the itinerary and pricing?`;
  const whatsappUrl = `https://wa.me/918075438808?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

const Destinations = () => {
  const [selected, setSelected] = useState<null | typeof destinations[0]>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [selected]);

  const destinations = [
    {
      id: 1,
      name: 'Munnar-Hill Station',
      district: 'Idukki',
      image: '/munnar img.jpg',
      rating: 4.9,
      description: "Explore Munnar's breathtaking tea-covered hills, misty mountains, serene valleys, winding roads, and charming plantation villages nestled in nature."
    },
    {
      id: 2,
      name: 'Alappuzha-Backwaters &Houseboat',
      district: 'Alappuzha',
      image: '/Alappuzha-Backwaters & Houseboat.jpg',
      rating: 4.8,
      description: 'Cruise through the serene backwaters of Alleppey and experience the charm of traditional houseboats and lush green landscapes.'
    },
    {
      id: 3,
      name: 'Kochi - Port City with Heritge',
      district: 'Ernakulam',
      image: '/fort kochi.webp',
      rating: 4.9,
      description: "Discover Fort Kochi's colonial architecture, vibrant streets, artistic vibes, ancient churches, and timeless coastal charm along the Arabian Sea shoreline."
    },
    {
      id: 4,
      name: 'Thekkady-Wildlife ',
      district: 'Idukki',
      image: '/Thekkady-Wildlife & Spice Plantations.webp',
      rating: 4.7,
      description: 'Explore the wild beauty of Thekkady with lush forests, exotic wildlife, elephant safaris, spice plantations, and tranquil boat rides on Periyar Lake'
    },
    {
      id: 5,
      name: 'Athirapally-Waterfalls ',
      district: 'Thrissur',
      image: '/athirapally falls.jpg',
      rating: 4.9,
      description: 'Witness the majestic Athirapally Waterfalls cascading through lush forests, surrounded by roaring beauty, misty trails, and the untouched charm of nature.'
    },
    {
      id: 6,
      name: 'Kovalam-Beach Paradise',
      district: 'Thiruvananthapuram',
      image: '/kovala beach.jpg',
      rating: 4.8,
      description: 'Relax on the golden sands of Kovalam Beach, enjoy swaying palm-lined shores, thrilling water sports, scenic sunsets, and rejuvenating Ayurvedic retreats'
    },
    {
      id: 7,
      name: 'Kanyakumari - Land’s End',
      district: 'Kanyakumari',
      image: '/kanyakumari.jpg', // Use Kovalam beach as a placeholder if no Kanyakumari image
      rating: 4.8,
      description: 'Marvel at the confluence of three seas, iconic Vivekananda Rock, sunrise and sunset views, and the southernmost tip of India.'
    },
    {
      id: 8,
      name: 'Madurai - Temple City',
      district: 'Madurai',
      image: '/madurai.webp', // Use temples image as a placeholder
      rating: 4.7,
      description: 'Experience the spiritual grandeur of Meenakshi Temple, vibrant markets, and the rich cultural heritage of Tamil Nadu.'
    },
    {
      id: 9,
      name: 'Wayanad - Green Paradise',
      district: 'Wayanad',
      image: '/wayanad.jpg', // Use vagamon as a placeholder if no Wayanad image
      rating: 4.9,
      description: 'Discover misty mountains, lush forests, wildlife sanctuaries, waterfalls, and the cool climate of Wayanad.'
    },
    {
      id: 10,
      name: 'Bekal Fort (Bakel Kotta)',
      district: 'Kasaragod',
      image: '/bekal-fort.jpg', // Placeholder, update if Bekal Fort image is available
      rating: 4.8,
      description: 'Step into history at Bekal Fort, Kerala’s largest and best-preserved fort, offering panoramic views of the Arabian Sea and lush surroundings.'
    },
    {
      id: 11,
      name: 'Kumarakom',
      district: 'Kottayam',
      image: '/kumarakam.webp', // Placeholder, update if Kumarakom image is available
      rating: 4.7,
      description: 'Unwind in the tranquil backwaters of Kumarakom, famous for its bird sanctuary, houseboat cruises, and lush green landscapes.'
    },
    {
      id: 12,
      name: 'Vagamon',
      district: 'Idukki',
      image: '/vagamon.jpg',
      rating: 4.9,
      description: 'Escape to the rolling meadows, pine forests, and misty hills of Vagamon—a serene hill station perfect for nature lovers and adventure seekers.'
    },
  ];

  return (
    <section id="destinations" className="py-20 bg-gradient-to-b from-emerald-50 via-emerald-100 to-emerald-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the world's most spectacular natural wonders and create memories that last a lifetime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl  transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer" onClick={() => setSelected(destination)}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
               
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">{destination.district}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{destination.name}</h3>
                
                <div className="flex items-center mb-3">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{destination.rating}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
                
                <button 
                  onClick={() => handleLearnMore(destination.name)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Destination CTA */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center text-white mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Need a Custom Destination Package?</h3>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            Don't see your dream destination? Our travel experts will create a personalized package tailored to your preferences and requirements.
          </p>
          <button
            onClick={() => {
              const message = `Hi! I need a custom destination package. Could you please help me create a personalized travel experience?`;
              const whatsappUrl = `https://wa.me/918075438808?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="bg-white text-emerald-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-base"
          >
            Contact Our Travel Experts
          </button>
        </div>
      </div>
      {/* Destination Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative bg-white/90 rounded-2xl shadow-2xl w-full max-w-2xl mx-auto my-8 md:my-16 flex flex-col overflow-hidden h-[90vh] md:h-[80vh]">
            <button onClick={() => setSelected(null)} className="absolute top-3 right-3 bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-emerald-700 transition z-10">&times;</button>
            <img src={selected.image} alt={selected.name} className="w-full h-56 md:h-72 object-cover" />
            <div className="flex-1 flex flex-col justify-start items-center px-4 py-6 overflow-y-auto w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-2 text-center">{selected.name}</h3>
              <p className="text-gray-700 text-center mb-3 text-base md:text-lg">{selected.description}</p>
              <p className="text-gray-600 text-sm md:text-base mb-2 text-center">This destination offers a unique blend of natural beauty and cultural heritage, making it a must-visit for travelers seeking both relaxation and adventure. From scenic landscapes to vibrant local traditions, every moment here promises a memorable experience.</p>
              <p className="text-gray-600 text-sm md:text-base mb-4 text-center">Whether you're exploring the lush greenery, enjoying local cuisine, or participating in traditional festivals, you'll find countless opportunities to immerse yourself in the charm and hospitality of this remarkable place.</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-sm text-gray-500">{selected.district}</span>
                <span className="text-yellow-500">★ {selected.rating}</span>
              </div>
              <button onClick={() => window.open(`https://wa.me/918075438808?text=${encodeURIComponent(`Hi! I'm interested in ${selected.name}. Please share more details.`)}`,'_blank')} className="mt-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition">Enquire Now</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Destinations;