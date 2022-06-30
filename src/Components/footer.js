import { React } from 'react';
import FooterLogo from '../Assets/FooterLogo.png';

const Footer = () => {
  return (
    <div className="lg:flex justify-between bg-primary mt-28 mx-2 mb-2">
      <div className="lg:hidden m-2 lg:m-4">
        <div className="">
          <div>
            <img src={FooterLogo} alt="logo" className="w-1/2 mx-auto" />
          </div>
          <div className="text-white text-xs lg:text-sm text-center space-y-6">
            <div className=" flex flex-col lg:space-x-0 space-y-6">
              <a
                href="/"
                className="active:text-black active:underline hover:underline"
              >
                Home
              </a>
              <a
                href="/#About"
                className="active:text-black active:underline hover:underline"
              >
                About
              </a>
              <a
                href="/#Product"
                className="active:text-black active:underline hover:underline"
              >
                Product
              </a>
            </div>
            <div className="flex flex-col lg:mt-0 lg:space-x-0 space-y-6">
              <a
                href="/contact"
                className="active:text-black active:underline hover:underline"
              >
                Contact
              </a>
              <a
                href="/contact/#partners"
                className="active:text-black active:underline hover:underline"
              >
                Partners
              </a>
            </div>
          </div>
          <div className="my-6 text-center">
            <p className="text-base lg:text-base text-white ">
              Contact us at info@orinfund.com
            </p>
          </div>
        </div>
        <p className="text-xs mt-2 mx-8 text-center text-white">
          All material published on Orinfund.com is copyrighted (c) 2022 by
          Digital Music Commerce And Exchange Limited. All rights reserved
        </p>
      </div>

      <div className="hidden lg:flex space-x-48 bg-primary mt-5 mx-auto mb-2">
        <div className="m-2 lg:m-4">
          <div className="flex space-x-20">
            <div>
              <img className="w-1/2" src={FooterLogo} alt="logo" />
            </div>
            <div className="my-auto space-x-5">
              <p className="text-xs lg:text-base text-white ">
                Contact us at info@orinfund.com
              </p>
            </div>
          </div>
          <p className="text-xs mt-2 text-white">
            All material published on Orinfund.com is copyrighted (c) 2022
            <br /> by Digital Music Commerce And Exchange Limited. All rights
            reserved
          </p>
        </div>
        <div className="flex flex-row space-x-12 m-5 text-white text-sm my-auto mr-24">
          <div className="flex flex-col space-x-0 space-y-5">
            <a
              className="active:text-black active:underline hover:underline"
              href="/"
            >
              Home
            </a>
            <a
              className="active:text-black active:underline hover:underline"
              href="/#About"
            >
              About
            </a>
            <a
              className="active:text-black active:underline hover:underline"
              href="/#Product"
            >
              Product
            </a>
          </div>
          <div className="flex flex-col ml-0 mb-5 mt-0 space-x-0 space-y-5">
            <a
              className="active:text-black active:underline hover:underline"
              href="/contact"
            >
              Contact
            </a>
            <a
              className="active:text-black active:underline hover:underline"
              href="/contact/#partners"
            >
              Partners
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
