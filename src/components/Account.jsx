import React from 'react';
import { UserAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MdOutgoingMail } from "react-icons/md";

const Account = () => {
  const { user } = UserAuth();
  const styleIcon3 = { color: "white" }

  function profilPhoto() {
    var photoUrl = user.photoURL;

    if(photoUrl !== ''){
      return photoUrl;
    }else{
      return 
    }
  }

  return (
    <>
      <Navbar/>
      <div class="mx-auto mt-10 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col items-center pb-10 pt-10">
            <img class="mb-4 w-24 h-24 rounded-full shadow-lg" src={user.photoURL}/>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user && user.displayName}</h5>
            <span class="mb-1 text-sm text-gray-500 dark:text-gray-400">Statut : utilisateur</span>
            <div class="flex"><div class="mt-auto mb-auto pr-3"><MdOutgoingMail size={25} style={styleIcon3}/></div><h6 class="mt-auto mb-auto text-md font-medium text-gray-900 dark:text-white">{user && user.email}</h6></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;