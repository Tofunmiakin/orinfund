import { React, useEffect } from 'react';
import Line from '../Assets/Line.png';
import chordcash from '../Assets/chordcash.png';
import Footer from './footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Partners = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="font-Montserrat" data-aos="fade-up">
      <div className="mt-36 pb-36 mx-10">
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

export default Partners;
