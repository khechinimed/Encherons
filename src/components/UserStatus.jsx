import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const UserStatus = () => {
  const styleIcon2 = { color: "white", cursor: "pointer", float:"right" }
  const { user, logout } = UserAuth();
  
  const handleLogout = async () => {
    try {
      await logout();
      alert('Vous venez de vous déconnecter')
    } catch (error) {
      alert('Erreur lors de votre déconnexion')
    }
  };

  function DropdownUser() {
    var element2 = document.getElementById("divUserMenu");

    if (element2.style.display === "none") {
      element2.style.display = "block";
    } else {
      element2.style.display = "none";
    }
  }
  
  if(!user){
  return (
    <button type="button" class="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to="/signin">Connexion</Link></button>
  )
  }else{
    return (
    <>
      <div onClick={DropdownUser} >
          <button type="button" class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Ouvrir le menu utilisateur</span>
              <div class="rounded-full"> < FaUserCircle size={30} style={styleIcon2} /> </div>
          </button>
      </div>

      <div id="divUserMenu" class="hidden">
        <div id="userMenu" class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
          <a href="/account" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Profil</a>
          <a href="/" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Paramètre</a>
          <a href="/" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2" onClick={handleLogout} ><Link to='/'>Déconnexion</Link></a>
        </div>
      </div>
    </>
    )
  }
};

export default UserStatus;