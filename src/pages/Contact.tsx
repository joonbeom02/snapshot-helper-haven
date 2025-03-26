
import { useState, useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-24 container mx-auto">
      <div className={`max-w-2xl mx-auto text-center mb-16 ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
        <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">Contact Me</h1>
        <p className="text-gray-700">
          Get in touch for bookings, collaborations, or any inquiries about my photography services.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 mb-20">
        <div className={`space-y-8 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <div>
            <h2 className="text-2xl font-serif font-medium mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4">
                  <Mail size={20} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a href="mailto:contact@photographer.com" className="text-gray-700 hover:text-black transition-colors">
                    contact@photographer.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4">
                  <Phone size={20} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <a href="tel:+1234567890" className="text-gray-700 hover:text-black transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4">
                  <MapPin size={20} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-gray-700">
                    Seoul, South Korea
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif font-medium mb-4">Working Hours</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">Monday - Friday</span>
                <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Saturday</span>
                <span className="text-gray-900 font-medium">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Sunday</span>
                <span className="text-gray-900 font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={loaded ? 'animate-fade-in' : 'opacity-0'} style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl font-serif font-medium mb-6">Send Me a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
