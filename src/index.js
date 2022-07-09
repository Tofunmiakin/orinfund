import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Components/navigation';
import Contact from './Components/contact';
import Partners from './Components/partners';
import ContactSuccess from './Components/contactSuccess';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* <Route path="/contact/success" element={<ContactSuccess />}></Route> */}
        <Route path="/partners" element={<Partners />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
