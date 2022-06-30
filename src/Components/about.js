import { React } from 'react';
import OrinLogo from '../Assets/OrinLogo.png';
import Line from '../Assets/Line.png';
import about from '../Assets/about.png';

const About = () => {
  return (
    <div id="About" className="mx-8">
      <div className="lg:hidden ml-4 lg:mx-16 mt-20 text-center">
        <div className="flex flex-col items-center">
          <div className="flex space-x-2 mx-auto">
            <p className=" text-xl md:text-3xl lg:text-5xl font-light">About</p>
            <img
              src={OrinLogo}
              alt="Logo"
              className="h-10 md:h-16 lg:h-auto -ml-6 md:-ml-2 lg:ml-4 -mt-2 md:-mt-2 lg:-mt-6"
            />
          </div>
          <img src={Line} alt="divider" className=""></img>
        </div>

        <div className="mt-10 lg-mt-0"></div>
        <p className="text-lg md:text-2xl font-light">
          Orinfund is a Creative Investment vehicle tasked with establishing a
          pan-African vault of valuable creative assets.
        </p>
        <img src={about} alt="about" className="mx-auto" />
        <p className="mt-8 font-bold text-sm lg:text-lg">
          It is founded by Digital Music Commerce And Exchange Ltd.
        </p>
        <p className="mt-4 font-bold text-sm lg:text-lg">
          Digital Music Commerce And Exchange Ltd is a fully operational catalog
          administration, intellectual property acquisition, licensing, and
          rights management company based in Lagos, Nigeria with subsidiaries in
          Ghana and Tanzania.
        </p>
      </div>

      <div className="hidden lg:flex mx-0">
        <div className="w-screen ml-4 mx-16 mt-20">
          <div className="flex my-auto">
            <div>
              <p className="text-5xl font-light">About</p>
              <img className="mt-2 w-auto" src={Line} alt="divider" />
            </div>
            <img className="h-auto ml-4 -mt-6" src={OrinLogo} alt="Logo" />
          </div>
          <p className="text-2xl font-light">
            Orinfund is a Creative Investment vehicle tasked
            <br /> with establishing a pan-African vault of valuable creative
            assets.
          </p>
          <p className="mt-8 font-bold text-lg">
            It is founded by Digital Music Commerce And Exchange Ltd.
          </p>
          <p className="mt-4 font-bold text-lg">
            Digital Music Commerce And Exchange Ltd is a fully operational
            catalog administration, intellectual property acquisition,
            licensing, and rights management company based in Lagos, Nigeria
            with subsidiaries in Ghana and Tanzania.
          </p>
        </div>
        <div>
          <img src={about} alt="about" className="mt-0 w-screen" />
        </div>
      </div>
    </div>
  );
};

export default About;
