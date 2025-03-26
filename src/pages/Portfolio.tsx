
import { useState, useEffect } from 'react';
import ImageGallery from '@/components/ImageGallery';

const Portfolio = () => {
  const [loaded, setLoaded] = useState(false);
  
  const categories = ['Landscape', 'Portrait', 'Architecture', 'Nature'];
  
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      alt: "Mountain landscape with rays of sun",
      category: "Landscape"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      alt: "River between mountains",
      category: "Landscape"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Water surrounded by trees",
      category: "Nature"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      alt: "Ocean wave",
      category: "Nature"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
      alt: "Mountain alps",
      category: "Landscape"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Woman using laptop",
      category: "Portrait"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "Coding on monitor",
      category: "Architecture"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      alt: "Forest with sunbeam",
      category: "Nature"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      alt: "Woman with laptop",
      category: "Portrait"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-24 pb-12 container mx-auto">
      <div className={`space-y-6 max-w-2xl mx-auto text-center mb-12 ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
        <h1 className="text-4xl md:text-5xl font-serif font-medium">Portfolio</h1>
        <p className="text-gray-700">
          Explore a collection of my most meaningful work, telling stories through photographs.
        </p>
      </div>
      
      <div className={loaded ? 'animate-fade-in' : 'opacity-0'} style={{ animationDelay: '0.3s' }}>
        <ImageGallery images={images} categories={categories} />
      </div>
    </div>
  );
};

export default Portfolio;
