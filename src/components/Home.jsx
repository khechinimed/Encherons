import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';


function Home() {
  return (
    <>
        <Navbar />
        <Header />
        <Categories />
        <FAQ />
        <Footer />
    </>
  )
}

export default Home;