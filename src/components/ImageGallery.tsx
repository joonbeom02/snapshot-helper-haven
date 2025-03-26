
import { useState, useEffect } from 'react';

type Image = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

interface ImageGalleryProps {
  images: Image[];
  categories?: string[];
}

const ImageGallery = ({ images, categories = [] }: ImageGalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState<Image[]>(images);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory, images]);

  const handleImageLoad = (id: number) => {
    setLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="mt-10">
      {categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`text-sm uppercase tracking-wider px-4 py-2 transition-colors ${
              selectedCategory === 'all' 
                ? 'text-black border-b border-black' 
                : 'text-gray-500 hover:text-black'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm uppercase tracking-wider px-4 py-2 transition-colors ${
                selectedCategory === category 
                  ? 'text-black border-b border-black' 
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredImages.map(image => (
          <div key={image.id} className="image-container group">
            <div className={`aspect-[3/4] ${!loaded[image.id] ? 'image-loading' : ''}`}>
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-opacity duration-500 image-hover ${
                  loaded[image.id] ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(image.id)}
              />
            </div>
            <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black/10 flex items-end p-6 transition-opacity duration-300">
              <span className="text-white text-sm font-medium">{image.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
