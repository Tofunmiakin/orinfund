import { React, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Line from '../Assets/Line.png';
import Footer from './footer';
import { useForm, ValidationError } from '@formspree/react';
import ContactSuccess from './contactSuccess';

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const [state, handleSubmit] = useForm('mnqwyknw');
  if (state.succeeded) {
    return <Contact />;
  }

  return (
    <div className="font-Montserrat" data-aos="fade-up">
      <div className="mx-5 md:mx-16">
        <p className="text-2xl lg:text-4xl mt-12 lg:mt-28">Contact Us</p>
        <img src={Line} alt="Line" />
        <form
          onSubmit={handleSubmit}
          className="lg:grid lg:grid-cols-2 lg:space-x-28"
        >
          <div className="space-y-5 grid">
            <input
              id="name"
              type="text"
              name="name"
              required
              className="mt-5 p-2 shadow-md focus:ring-2 focus:outline-none focus:ring-primary"
              placeholder="Your Name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              id="email"
              required
              name="email"
              type="email"
              className="p-2 shadow-md focus:ring-2 focus:outline-none focus:ring-primary"
              placeholder="Your Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <input
              id="telephone"
              name="phone"
              type="tel"
              className="p-2 shadow-md focus:ring-2 focus:outline-none focus:ring-primary"
              placeholder="Phone Number (Optional)"
            />
            <ValidationError
              prefix="Telephone"
              field="telephone"
              errors={state.errors}
            />
          </div>
          <div className="mt-10 grid ">
            <input
              id="subject"
              name="subject"
              placeholder="Subject (Optional)"
              className="p-2 border-solid border-8 rounded-xl border-primary focus:ring-2 focus:outline-none focus:ring-primary"
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              className="p-2 pb-28 -mt-2 border-solid border-8 rounded-xl border-primary focus:ring-2 focus:outline-none focus:ring-primary"
              placeholder="Message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="mt-5 lg:mt-10 px-10 py-2 text-white bg-primary "
          >
            Submit
          </button>
        </form>
      </div>

      {/* <div id="partners" className="mt-36 pb-36 mx-5">
        <p className="text-2xl lg:text-4xl mt-12 lg:mt-28">Partners</p>
        <img src={Line} alt="Line" />
        <img
          className="mx-auto mt-10 lg:mt-28"
          src={chordcash}
          alt="chordcash"
        />
      </div> */}
      <Footer />
    </div>
  );
};

export default Contact;
