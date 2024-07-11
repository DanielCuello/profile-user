import React from 'react';
import Header from '../app/components/Header/page';
import About from '../app/components/About/page';
import Interests from '../app/components/Interests/page';
import ContactForm from '../app/components/ContactForm/page';
import Footer from './components/Footer/page';
import './globals.css';



const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Interests />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;