import React from 'react';

function Services() {
    return (
        <section className="bg-gray-50">
            {/* {/ Header Section /} */}
            <div className="container mx-auto py-16 px-6 flex flex-col lg:flex-row items-center">
                {/* {/ Left Section: Image /} */}
                <div className="flex-1">
                    <img
                        src="intro-image.jpg"
                        alt="Desktop and tablet on a table"
                        className="rounded-lg shadow-lg w-5/6 mx-auto lg:w-3/4"
                    />
                </div>

                {/* {/ Right Section: Text Content /} */}
                <div className="flex-1 lg:ml-8 mt-8 mr-8 lg:mt-0">
                    <h2 className="text-4xl font-bold mb-6 leading-tight">
                        Optimize performance through advanced targeting solutions
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Good marketing makes the company look smart. <span className="text-blue-500 font-semibold">Great marketing</span> makes the customer feel smart. - Joe Chernov. Never doubt a small group of thoughtful, committed people can change the world. Indeed, it is the only thing that ever has. - Margaret Mead. The best way to predict the future is to create it. - Peter Drucker.
                    </p>
                    <button className="px-6 py-3 border-2 border-blue-500 text-blue-500 font-medium rounded-full hover:bg-blue-500 hover:text-white transition">
                        Learn More
                    </button>
                </div>
            </div>

            {/* {/ Features Section /} */}
<div className="container mx-auto py-16 px-6 flex flex-col lg:flex-row items-center">
  {/* {/ Left Section: Image /} */}
  <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
    <img
      src="feature-image.jpg"
      alt="Person in winter clothing"
      className="rounded-lg shadow-lg w-5/6 mx-auto lg:w-3/4 "
    />
  </div>

  {/* {/ Right Section: Features Grid /} */}
  <div className="w-full lg:w-1/2 lg:pl-12 mt-6 lg:mt-0 mr-10">
    <div className="grid grid-cols-2 gap-x-8 gap-y-8">
      {/* {/ Marketing Strategy /} */}
      <div>
        <h4 className="text-lg font-bold mb-2">Marketing Strategy</h4>
        <p className="text-gray-600 text-sm">
          Good marketing makes the company look smart. <br />
          Great marketing makes the customer feel smart.
        </p>
      </div>
      {/* {/ App Monetization /} */}
      <div>
        <h4 className="text-lg font-bold mb-2">App Monetization</h4>
        <p className="text-gray-600 text-sm">
          Content builds relationships. Relationships are built on trust. <br />
          Trust drives revenue. - Andrew Davis
        </p>
      </div>
      {/* {/ Store Optimization /} */}
      <div>
        <h4 className="text-lg font-bold mb-2">Store Optimization</h4>
        <p className="text-gray-600 text-sm">
          Never doubt a small group of thoughtful, committed people can change the world. <br />
          Indeed, it is the only thing that ever has.
        </p>
      </div>
      {/* {/ User Management /} */}
      <div>
        <h4 className="text-lg font-bold mb-2">User Management</h4>
        <p className="text-gray-600 text-sm">
          Instead of using technology to automate processes, think about using technology to enhance human interaction.
        </p>
      </div>
    </div>
  </div>
</div>





            {/* {/ Call-to-Action Section /} */}
            <div className="flex justify-between items-center bg-white p-8">
                <div className="w-1/2">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        Learn how to make your app marketing efficient
                    </h1>
                    <p className="text-gray-700 text-lg mb-8">
                        Good marketing makes the company look smart. <a href="#" className="text-blue-600 underline">Great marketing</a> makes the customer feel smart. Never doubt that a small group of thoughtful, committed people can change the world. Indeed, it is the only thing that ever has, - Margaret Mead. The best way to predict the future is to create it, - Peter Drucker.
                    </p>
                    <button className="px-6 py-3 border-2 border-blue-500 text-blue-500 font-medium rounded-full hover:bg-blue-500 hover:text-white transition">
                        Download Now
                    </button>
                </div>
                <div className="w-1/2 flex justify-end">
                    <div className="flex-1">
                        <img
                            src="feature2-image.jpg"
                            alt="Desktop and tablet on a table"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>



            {/* {/ Contact Section /} */}
            <div className="relative bg-center bg-no-repeat bg-cover py-16"
                style={{ backgroundImage: "url('bg.jpg')" }}
            >
                {/* Fullscreen Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <h3 className="text-4xl font-semibold mb-4">Would like to know more?</h3>
                    <p className="text-lg max-w-3xl mx-auto mb-8">
                        We’ll research the market, identify the right target audience, analyze competitors, and avoid user churn to increase retention. Download now for free and join with thousands of happy clients.
                    </p>
                    <button className="px-6 py-3 bg-blue-500 font-medium rounded hover:bg-blue-400">
                        Get Connected
                    </button>
                </div>
            </div>


        </section>
    );
}

export default Services;

