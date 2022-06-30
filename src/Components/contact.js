import { React, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Line from '../Assets/Line.png';
import chordcash from '../Assets/chordcash.png';
import Footer from './footer';

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="font-Montserrat" data-aos="fade-up">
      <div className="mx-5 md:mx-16">
        <p className="text-2xl lg:text-4xl mt-12 lg:mt-28">Contact Us</p>
        <img src={Line} alt="Line" />
        <form onSubmit="" className="lg:grid lg:grid-cols-2 lg:space-x-28">
          <div className="space-y-5 grid">
            <input
              type="text"
              required
              className="mt-5 p-2 shadow-md focus:ring-2 focus:outline-none focus:ring-primary"
              placeholder="Your Name"
            />
            <input
              type="email"
              required
              className="p-2 shadow-md focus:ring-2 focus:outline-none focus:ring-primary"
              placeholder="Your Email"
            />
            <input
              type="tel"
              className="p-2 shadow-md focus:ring-2 focus:outline-none focus:ring-primary"
              required
              placeholder="Phone Number"
            />
          </div>
          <div className="mt-10 grid ">
            <input
              placeholder="Subject"
              required
              className="p-2 border-solid border-8 rounded-xl border-primary focus:ring-2 focus:outline-none focus:ring-primary"
            />
            <input
              className="p-2 pb-28 -mt-2 border-solid border-8 rounded-xl border-primary focus:ring-2 focus:outline-none focus:ring-primary"
              placeholder="Message"
              required
            />
          </div>
          <button className="mt-5 lg:mt-10 px-10 py-2 text-white bg-primary ">
            Submit
          </button>
        </form>
      </div>

      <div id="partners" className="mt-36 pb-36 mx-5">
        <p className="text-2xl lg:text-4xl mt-12 lg:mt-28">Partners</p>
        <img src={Line} alt="Line" />
        <img
          className="mx-auto mt-10 lg:mt-28"
          src={chordcash}
          alt="chordcash"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
