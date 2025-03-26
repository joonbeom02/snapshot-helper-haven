
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const featuredImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      alt: "Mountain landscape with rays of sun"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      alt: "River between mountains"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Water surrounded by trees"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight">
              Capturing Life's <br />Meaningful Moments
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Documenting the beauty in everyday life through a lens of authenticity and emotion.
            </p>
            <div className="pt-4">
              <Link 
                to="/portfolio" 
                className="inline-flex items-center group"
              >
                <span className="text-black font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black">
                  View Portfolio
                </span>
                <ChevronRight size={18} className="ml-1 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          <div className={`aspect-[4/3] relative ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <img 
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
              alt="Photographer's work" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Featured Work */}
      <section className="py-20 container mx-auto">
        <div className={`space-y-2 mb-12 text-center ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <h2 className="text-3xl font-serif font-medium">Featured Work</h2>
          <p className="text-gray-600">A selection of recent photography projects</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featuredImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`image-container ${loaded ? 'animate-fade-in' : 'opacity-0'}`} 
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full aspect-[3/4] object-cover image-hover"
              />
            </div>
          ))}
        </div>
        
        <div className={`flex justify-center mt-12 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
          <Link 
            to="/portfolio" 
            className="inline-flex items-center px-6 py-3 border border-black text-sm font-medium rounded-md text-black hover:bg-black hover:text-white transition-colors"
          >
            View All Work
          </Link>
        </div>
      </section>
      
      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`order-2 md:order-1 space-y-6 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
            <h2 className="text-3xl font-serif font-medium">About Me</h2>
            <p className="text-gray-700">
              I'm a professional photographer with a passion for capturing authentic moments and emotions.
              With over 10 years of experience, I specialize in landscape and portrait photography.
            </p>
            <div className="pt-2">
              <Link 
                to="/about" 
                className="inline-flex items-center group"
              >
                <span className="text-black font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black">
                  Read More
                </span>
                <ChevronRight size={18} className="ml-1 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          <div className={`order-1 md:order-2 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Photographer at work" 
              className="w-full aspect-[4/3] object-cover rounded-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
