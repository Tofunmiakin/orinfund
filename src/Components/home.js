import { useEffect } from 'react';
import create from '../Assets/create.png';
import profit from '../Assets/profit.png';
import ellipse from '../Assets/ellipse.png';
import rectangle from '../Assets/rectangle.png';
import homepic from '../Assets/homepic.png';
import pitch from '../Assets/pitch.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import africa from '../Assets/africa.png';
import mrectangle from '../Assets/mrectangle.png';
import mellipse from '../Assets/mellipse.png';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up">
      <div className="lg:flex">
        <div className="text-center lg:text-left lg:ml-10">
          <p className="text-4xl lg:text-7xl font-black mt-5 md:mt-20">
            A Marketplace <br />
            for Intellectual <br />
            Property Funding
          </p>
          <p className="text-base lg:text-3xl font-light mt-3 md:mt-12">
            Financing the African Creative Industries
          </p>
          <button className="bg-primary text-white mt-5 font-bold hover:bg-orange-700 py-2 lg:py-3">
            <a className="px-4 lg:px-6 text-xs lg:text-base" href="/#Product">
              See Options
            </a>
          </button>
        </div>
        <div className="w-full mx-auto md:w-2/5 lg:w-2/5">
          <img src={africa} alt="africa" />
        </div>
      </div>

      <div className="lg:hidden bg-primary mt-4 flex flex-col relative">
        <div className="flex flex-col pt-16 text-xl text-white ">
          <div
            className="flex flex-col items-center space-y-2"
            data-aos="fade-right"
          >
            <img src={pitch} alt="money" className="mx-auto"></img>
            <p className="text-xl lg:text-3xl font-bold">Pitch</p>
          </div>
          <div
            className="flex flex-col items-center space-y-2 mb-5 mt-10 lg:mt-0"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            <img src={profit} alt="palette" className="mx-auto"></img>
            <div className="text-center">
              <p className="text-xl lg:text-3xl font-bold">Get Money</p>
            </div>
          </div>
          <div
            className="flex flex-col items-center space-y-2 mt-8 lg:mt-0"
            data-aos="fade-right"
            data-aos-delay="2000"
          >
            <img src={create} alt="money bag" className="mx-auto"></img>
            <p className="text-xl lg:text-3xl font-bold">Create</p>
          </div>
        </div>
        <div className="flex justify-between -mb-48">
          <img className="" src={mellipse} alt="O cut" />
          <img className="-mr-8" src={mrectangle} alt="bottom cut" />
        </div>
      </div>

      <div className="relative bg-primary mt-4 mx-2">
        <img className="hidden lg:flex" src={ellipse} alt="O cut" />
        <img
          className="hidden lg:flex absolute right-0 bottom-0"
          src={rectangle}
          alt="bottom cut"
        />
        <div className="hidden lg:flex justify-between -mt-48 mb-10">
          <img src={homepic} alt="homepic" />
          <div className="relative my-48 inset-0 left-8 top-28 mr-96 -mt-32 mb-24">
            <div className="flex flex-col text-2xl text-white space-y-10">
              <div
                className="flex flex-col items-center space-y-2"
                data-aos="fade-right"
              >
                <img className="mx-auto" src={pitch} alt="pitch" />
                <p className="text-3xl font-bold">Pitch</p>
              </div>
              <div
                className="flex flex-col items-center space-y-2 mb-5 mt-10"
                data-aos="fade-right"
                data-aos-delay="1000"
              >
                <img className="mx-auto" src={profit} alt="Get Money" />
                <div className="text-center">
                  <p className="text-3xl font-bold">Get Money</p>
                </div>
              </div>
              <div
                className="flex flex-col items-center space-y-2 mb-5 mt-10"
                data-aos="fade-right"
                data-aos-delay="2000"
              >
                <img className="mx-auto" src={create} alt="create" />
                <div className="text-center">
                  <p className="text-3xl font-bold">Create</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
