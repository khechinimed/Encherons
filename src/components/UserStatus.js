import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const UserStatus = () => {
    const { user, logout } = UserAuth();
  
    const handleLogout = async () => {
      try {
        await logout();
        console.log('Vous etes deconnecte')
      } catch (e) {
        console.log(e.message);
      }
    };
  
    if(!user){
        return (
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to="/signin">Connexion</Link></button>
        )
    }else{
        return (
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogout}><Link to="/home">Déconnexion</Link></button>
        )
    }

  };

export default UserStatus;