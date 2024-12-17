import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello Welcome to</h5>
        <h1>Free Thought</h1>
        <h5 className="text-light">The right to think is the beginning of freedom, and speech must be 
        protected from the government because speech is the beginning of thought".</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        {/* <HeaderSocials /> */}
      </div>
    </header>
  );
};

export default Header;
