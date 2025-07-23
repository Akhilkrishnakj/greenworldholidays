
const handlePlanTrip = () => {
  const message = `Hi! I'm interested in planning a Kerala trip with Green World Holidays. Could you please help me with travel packages and car rental options?`;
  const whatsappUrl = `https://wa.me/918075438808?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

const Hero = () => {
  const images = [
    {
      src: '/kathakali 1.jpg',
      alt: 'Kerala traditional dance'
    },
    {
      src: '/athirapally falls.jpg',
      alt: 'Kerala waterfall'
    },
    {
      src: '/houseboat.jpg',
      alt: 'Kerala lighthouse'
    },
    {
      src: '/vagamon.jpg',
      alt: 'Kerala hills'
    }
  ];

  return (
    <div className="relative w-full h-screen mt-16">
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl">
          <p className="text-lg md:text-xl font-medium mb-4 text-green-300">
            Welcome to Kerala
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-green-300">God's Own</span>
            <span className="block text-white">Country</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-100">
            Experience the enchanting beauty of Kerala - from misty hill stations 
            and serene backwaters to vibrant cultural traditions and ancient heritage
          </p>
          
          <button
            onClick={handlePlanTrip}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Plan Your Kerala Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;