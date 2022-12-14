import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import '../index.css';

import { Icon } from 'react-icons-kit'
import { eye } from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { ImCross } from "react-icons/im";

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  const { googleSignIn } = UserAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      setLoading(true);
      setError("")
      await signIn(email, password)
      navigate('/')
    } catch (error) {
      setError("La connexion a échoué veuillez réessayer")
    }setLoading(false);
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("")
      await googleSignIn();
      navigate("/");
    } catch (error) {
      setError("La connexion avec Google a échoué veuillez réessayer")
    }setLoading(false);
  };

  const [type, setType]=useState('password');
  const [icon, setIcon]=useState(eyeOff);
  const styleIcon = { color: "white", cursor: "pointer" }
  const styleIcon1 = { color: "white", cursor: "pointer", float:"right" }

  const handleToggle=()=>{    
    if(type==='password'){
      setIcon(eye);      
      setType('text');
    }
    else{
      setIcon(eyeOff);     
      setType('password');
    }
  };

  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <Link to='/'><div class="pr-2 pt-2"><ImCross size={15} style={styleIcon1}/></div></Link>
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                      Connexion
                  </h1>
                  {error && <p class="text-center text-red-500">{error}</p>}
                  <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" action="#">
                      <div>
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse email</label>
                          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nom@gmail.com" required="" onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div>
                          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                          <div class="relative">
                            <input type={type} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => setPassword(e.target.value)} />
                            <i class="absolute top-1 right-3 cursor-pointer" onClick={handleToggle}><Icon icon={icon} size={20} style={styleIcon} /></i>
                          </div>
                      </div>
                      <hr class="border-1 border-stone-300" />
                      <div class="text-center">
                        <button type="button" class="login-with-google-btn" 
                          onClick={handleGoogleSignIn}> Se connecter avec Google
                        </button>
                      </div>
                      <button type="submit" className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-2 my-2 text-white rounded-lg">Se connecter</button>
                      <p class="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                          <Link to='/ForgetPassword' className='underline ml-2'>
                            Mot de passe oublié
                          </Link>
                      </p>
                      <p class="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                          Vous n'avez pas encore de compte ? 
                          <Link to='/signup' className='underline ml-2'>
                            Céer un compte
                          </Link>
                      </p>
                  </form>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Signin;