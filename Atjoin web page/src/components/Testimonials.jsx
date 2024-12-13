import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';


function Testimonials() {
  const testimonials = [
    {
      text: 'We are very happy and satisfied with Backyard service. Our account manager is efficient and very knowledgeable. It was able to create a vast fan base within very short period of time. We would highly recommend Backyard App to anyone.',
      name: 'Jennifer Lopez',
      company: 'Microsoft',
    },
    {
      text: 'Everything looks great... Thanks for the quick revision turn around. We were lucky to find you guys and will definitely be using some of your other services in the near future.',
      name: 'Mike Portnoy',
      company: 'Dream Theater',
    },
    {
        text: 'Overall, the two reports were very clear and helpful so thank you for the suggestion to do the focus group. We are currently working with our developer to implement some of these suggestions.',
        name: 'Jennifer Love Hewitt, ',
        company: 'Lead Vocal',
      },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">TESTIMONIALS</h2>
      <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>

      <Swiper
       modules={[Pagination]}
  pagination={{ clickable: true }}
  spaceBetween={50}
  slidesPerView={1}
  className="w-full max-w-3xl mx-auto"
>
  {testimonials.map((testimonial, index) => (
    <SwiperSlide key={index}>
      <blockquote className="text-gray-600 italic mb-4">
        "{testimonial.text}"
      </blockquote>
      <p className="text-gray-800 font-semibold mb-8"> {/* Added mb-8 here */}
        {testimonial.name}, <span className="text-blue-500">{testimonial.company}</span>
      </p>
    </SwiperSlide>
  ))}
</Swiper>
    </section>
  );
}

export default Testimonials;
