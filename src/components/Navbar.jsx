import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return ( 
    <>
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black font-semibold'>
        <h1 className='w-full text-3xl font-bold text-[black]'><a>ENCHÈRONS</a></h1>
        <ul className='hidden md:flex'>
          <li className='p-4'><a>Accueil</a></li>
          <li className='p-4'><a>Acheter</a></li>
          <li className='p-4'><a>Vendre</a></li>
          <li className='p-4'><a>Connnexion</a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[black] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[white] m-4'><a>ENCHÈRONS</a></h1>
            <li className='p-4 border-b border-white text-white'><a>Accueil</a></li>
            <li className='p-4 border-b border-white text-white'><a>Acheter</a></li>
            <li className='p-4 border-b border-white text-white'><a>Vendre</a></li>
            <li className='p-4 border-b border-white text-white'><a>Connexion</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;