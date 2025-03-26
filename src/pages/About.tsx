
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Image, Award } from 'lucide-react';

const About = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-24 container mx-auto">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className={`space-y-6 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          <h1 className="text-4xl md:text-5xl font-serif font-medium">About Me</h1>
          <p className="text-lg text-gray-700">
            I'm a professional photographer based in Seoul with over 10 years of experience capturing life's meaningful moments.
          </p>
          <p className="text-gray-700">
            My approach to photography centers around authenticity, emotion, and storytelling. I believe that every image should tell a story and evoke emotion, whether it's a landscape, portrait, or architectural photograph.
          </p>
          <p className="text-gray-700">
            Throughout my career, I've had the privilege of working with various clients, from individuals seeking personal portraits to brands requiring commercial photography.
          </p>
        </div>
        
        <div className={`${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
            alt="Photographer working on laptop" 
            className="w-full aspect-[4/3] object-cover rounded-md"
          />
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16 bg-gray-50 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <h2 className="text-3xl font-serif font-medium mb-4">My Approach</h2>
            <p className="text-gray-700">What makes my photography unique</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`bg-white p-6 rounded-lg shadow-sm ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                <Camera size={24} className="text-gray-800" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-2">Authenticity</h3>
              <p className="text-gray-700">
                I focus on capturing genuine emotions and moments rather than forced poses.
              </p>
            </div>
            
            <div className={`bg-white p-6 rounded-lg shadow-sm ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                <Image size={24} className="text-gray-800" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-2">Storytelling</h3>
              <p className="text-gray-700">
                Every photograph tells a story and evokes emotion in the viewer.
              </p>
            </div>
            
            <div className={`bg-white p-6 rounded-lg shadow-sm ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.1s' }}>
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                <Award size={24} className="text-gray-800" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-2">Attention to Detail</h3>
              <p className="text-gray-700">
                I pay meticulous attention to composition, lighting, and post-processing.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto">
          <div className={`mb-12 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.3s' }}>
            <h2 className="text-3xl font-serif font-medium mb-4">Experience</h2>
            <p className="text-gray-700">
              Over the past decade, I've worked across various photography disciplines, continuously refining my craft and exploring new techniques.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className={`grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }}>
              <div>
                <span className="text-sm text-gray-500">2018 - Present</span>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Freelance Photographer</h3>
                <p className="text-gray-700 mb-2">
                  Working with various clients on projects ranging from commercial photography to personal portraits.
                </p>
                <p className="text-gray-600">
                  Notable clients include major magazines and fashion brands.
                </p>
              </div>
            </div>
            
            <div className={`grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.7s' }}>
              <div>
                <span className="text-sm text-gray-500">2014 - 2018</span>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Lead Photographer, Studio 54</h3>
                <p className="text-gray-700 mb-2">
                  Led a team of photographers for commercial and editorial projects.
                </p>
                <p className="text-gray-600">
                  Specialized in fashion and product photography for major brands.
                </p>
              </div>
            </div>
            
            <div className={`grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.9s' }}>
              <div>
                <span className="text-sm text-gray-500">2010 - 2014</span>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Assistant Photographer, Vision Gallery</h3>
                <p className="text-gray-700 mb-2">
                  Assisted senior photographers on various projects, from event coverage to studio shoots.
                </p>
                <p className="text-gray-600">
                  Developed technical skills and creative vision under mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-gray-50 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24 mb-12">
        <div className={`max-w-2xl mx-auto text-center ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '2.1s' }}>
          <h2 className="text-3xl font-serif font-medium mb-4">Let's Work Together</h2>
          <p className="text-gray-700 mb-8">
            Interested in collaborating on a project? I'd love to hear from you.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
