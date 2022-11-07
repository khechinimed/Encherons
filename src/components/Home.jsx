import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Footer from '../components/Footer';


function Home() {
  return (
    <>
        <Navbar />
        <Header />
        <Categories />
        <Footer />
    </>
  )
}

export default Home;