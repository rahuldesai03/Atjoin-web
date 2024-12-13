// import React from 'react';

// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto text-center">
//         <p>&copy; 2024 Your Company. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';
import { FaTwitter, FaFacebookF, FaGooglePlusG, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-600 text-2xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://plus.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 text-2xl"
          >
            <FaGooglePlusG />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 text-2xl"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Footer Text */}
        <p className='text-center '>
            For Enquiry/Support: 9422333387 
        </p>
      </div>
    </footer>
  );
}

export default Footer;
