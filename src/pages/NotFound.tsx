
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center container mx-auto">
      <div className="text-center max-w-lg mx-auto">
        <h1 className="text-6xl font-serif font-medium mb-6">404</h1>
        <p className="text-xl text-gray-700 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
