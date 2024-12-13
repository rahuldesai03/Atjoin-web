import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <section id="about">
        <Header />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="reviews">
        <Testimonials />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default App;

