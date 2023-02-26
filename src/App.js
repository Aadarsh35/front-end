import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import loginPage from './container'

const App = () => (
  <div>
    <Navbar />
    <Header />
    {/* <AboutUs />
    <SpecialMenu />
    <Chef />
    <loginPage />
    <Intro />
    <Laurels />
    <FindUs />
    <Footer /> */}
  </div>
);

export default App;
