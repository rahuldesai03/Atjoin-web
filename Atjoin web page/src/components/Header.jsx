import React from "react";

function Header() {
    return (
        <header
            className="bg-cover bg-center h-screen text-white"
            style={{ backgroundImage: 'url("bg.jpg")' }}
        >
            <div className="bg-black bg-opacity-50 h-full flex items-center">
  <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap items-center relative">
    {/* {/ Logo Section /} */}
    <div className="absolute top-4 left-4">
      <img src="logo.png" alt="atjoin logo" className="h-12 ml-8" />
    </div>
    {/* {/ Left Section /} */}
    <div className="w-full lg:w-1/2 text-left lg:mr-12 ml-8">
      <h1 className="text-4xl lg:text-5xl font-bold mb-6">
        Reliable IT Admin Staffing Solutions for Your Business
      </h1>
      <p className="text-lg mb-6">
        Backyard is a modern and customizable landing page template designed to increase conversion of your product. Backyard is flexible to suit any kind of your business. Try now and join with our happy customers!
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded font-medium">
        Know More
      </button>
    </div>
  



                    {/* Right Section (Form) */}
                    <div className="w-full lg:w-1/3 bg-white bg-opacity-30 ml-16 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">GET STARTED</h2>
                        <form className="flex flex-col space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Mobile No."
                                className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="3"
                                className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded"
                            >
                                SUBSCRIBE
                            </button>
                        </form>
                        <p className="text-sm text-white mt-4 text-center">
                            We will not share your email. Read our{" "}
                            <a href="#" className="text-blue-500 underline">
                                privacy policy.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
