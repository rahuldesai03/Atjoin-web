// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md fixed w-full z-50">
//       <div className="container mx-auto px-4 flex justify-between items-center h-16">
//         {/* Logo */}
//         <div className="text-xl font-bold text-orange-500">
//           at<span className="text-blue-600">join</span>
//         </div>

//         {/* Navbar Links */}
//         <ul className="flex space-x-6 text-gray-600 font-medium">
//           <li>
//             <a href="#about" className="hover:text-blue-600">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#services" className="hover:text-blue-600">
//               Services
//             </a>
//           </li>
//           <li>
//             <a href="#download" className="hover:text-blue-600">
//               Download
//             </a>
//           </li>
//           <li>
//             <a href="#pricing" className="hover:text-blue-600">
//               Pricing
//             </a>
//           </li>
//           <li>
//             <a href="#reviews" className="hover:text-blue-600">
//               Reviews
//             </a>
//           </li>
//           <li>
//             <a href="#contact" className="hover:text-blue-600">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* {/ Logo /} */}
        <div>
          <img 
            src="logo.png" 
            alt="atjoin logo" 
            className="h-10"
          />
        </div>

        {/* {/ Navbar Links /} */}
        <ul className="flex space-x-6 text-gray-600 font-medium mr-8">
          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-blue-600">
              Reviews
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
