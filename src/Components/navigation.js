import { Fragment } from 'react';
import OrinLogo from '../Assets/OrinLogo.png';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
  return (
    <div id="Home" className="mx-5 md:mx-16 font-Montserrat">
      <Popover className="relative bg-white">
        {({ open }) => (
          <>
            <div id="Home" className="max-w-100% mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <a href="/">
                    <span className="sr-only">LOGO</span>
                    <img className="h-16 " src={OrinLogo} alt="Logo" />
                  </a>
                </div>

                {/* Menu bar for small screens */}

                <div className="-mr-2 -my-2 lg:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>

                <div className="hidden lg:flex space-x-16 text-lg my-auto font-normal">
                  <a href="/">Home</a>
                  <HashLink to="/#About">About</HashLink>
                  <HashLink to="/#Product">Product</HashLink>
                </div>
                <button className="hidden lg:flex bg-primary text-base text-white font-bold hover:bg-orange-700">
                  <a
                    className="px-8 py-4"
                    href="https://orinfund.chordcash.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Funded Now
                  </a>
                </button>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-16 w-auto"
                          src={OrinLogo}
                          alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        <HashLink
                          to="/#About"
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            About
                          </span>
                        </HashLink>
                        <HashLink
                          to="/#Product"
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            Product
                          </span>
                        </HashLink>
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div>
                      <a
                        href="https://orinfund.chordcash.com/"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-orange-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Funded Now
                      </a>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default Navigation;
