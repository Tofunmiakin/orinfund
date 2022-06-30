import { React } from 'react';
import Line from '../Assets/Line.png';
import O from '../Assets/O.png';
import Arrow from '../Assets/Arrow.png';
import dArrow from '../Assets/dArrow.png';

const Product = () => {
  return (
    <div id="Product" className="mt-16 lg:mt-36 mx-4">
      <div className="lg:hidden">
        <div>
          <p className="text-xl md:text-3xl lg:text-5xl text-center">Product</p>
          <img
            src={Line}
            alt="divider"
            className="mt-2 mx-auto w-24 lg:w-auto"
          ></img>
          <div className="mt-10 lg:mt-20 flex justify-between">
            <div>
              <p className="text-primary font-bold text-3xl lg:text-4xl">
                Get Funding
              </p>
              <p className="text-xl lg:text-2xl font-bold mt-3 lg:mt-8">
                Get future income from
                <br /> your music catalog
              </p>
              <p className="text-primary text-right font-bold text-3xl lg:text-4xl mt-6 lg:mt-14">
                Stay in Control
              </p>
              <p className="text-xl text-right lg:text-2xl font-bold mt-3 lg:mt-8">
                Keep 100% ownership of your masters. Advances from $1,000 to
                $2,000,000
              </p>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center space-x-12">
            <img src={O} alt="O" className="-mt-5 h-48 lg:w-auto "></img>
            <img
              src={dArrow}
              alt="arrow"
              className=" h-36 lg:w-max lg:h-auto"
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className=" lg:mt-5 bg-primary my-auto text-white md:mr-32 lg:mr-0">
            <a
              href="https://orinfund.chordcash.com/"
              className="px-5 py-2 lg:w-full flex items-center justify-center text-xs lg:text-xl lg:h-24 font-bold lg:px-16 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-orange-700"
            >
              Get Funded Now
            </a>
          </button>
        </div>
      </div>

      <div className="hidden lg:flex mt-36 mx-16">
        <div>
          <p className="text-5xl">Product</p>
          <img className="mt-2 w-auto" src={Line} alt="divider" />
          <div className="mt-20 flex justify-between">
            <div>
              <p className="text-primary font-bold text-4xl">Get Funding</p>
              <p className="text-2xl font-bold mt-8">
                Get future income from your music catalog
              </p>
              <p className="text-primary font-bold text-4xl mt-14">
                Stay in Control
              </p>
              <p className="text-2xl font-bold mt-8">
                Keep 100% ownership of your masters. Advances from $1,000 to
                $2,000,000
              </p>
            </div>
            <div className="-mr-8">
              <img className="-mt-5 w-auto" src={O} alt="O" />
            </div>
          </div>
          <div className="flex justify-between">
            <img className="w-max h-auto" src={Arrow} alt="arrow" />
            <button className="mt-5 bg-primary my-auto text-white mr-0">
              <a
                className=" py-2 w-full flex items-center justify-center text-xl h-24 font-bold px-16 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-orange-700"
                href="https://orinfund.chordcash.com/"
              >
                Get Funded Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
