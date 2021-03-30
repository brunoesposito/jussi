import React from 'react';
import { NextPage } from 'next';

import {
  Header,
  Banner,
  Stores,
  Soluctions,
  About,
  Contact,
  Newsletter,
  Footer,
} from 'layouts';

const Home: NextPage = () => (
  <>
    <Header />
    <Banner />
    <Stores />
    <Soluctions />
    <About />
    <Contact />
    <Newsletter />
    <Footer />
  </>
);

export default Home;
