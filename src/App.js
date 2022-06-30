import './App.css';
import Home from './Components/home';
import About from './Components/about';
import Product from './Components/product';
import Footer from './Components/footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App font-Montserrat">
      <Home />
      <About />
      <Product />
      <Footer />
    </div>
  );
};

export default App;
