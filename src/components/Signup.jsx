import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirme, setPasswordConfirme] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    if (password !== passwordConfirme) {
      setError("Les mots de passe ne sont pas les mêmes");
    }else{
      e.preventDefault();
      setError('');
      try {
        await createUser(email, password);
        navigate('/home')
      } catch (error) {
        setError("La création de compte a échoué");
        }
        setLoading(false);
    }
    
  };

  return (
    <>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                      Inscription
                  </h1>
                  {error && <p class="text-center text-red-500">{error}</p>}
                  <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6">
                      <div>
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse email</label>
                          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nom@gmail.com" required="" onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div>
                          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <div>
                          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmer le mot de passe</label>
                          <input type="password" name="passwordConf" id="passwordConf" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => setPasswordConfirme(e.target.value)} />
                      </div>
                      <button type="submit" className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-2 my-2 text-white rounded-lg">S'inscrire</button>
                      <p class="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                          Vous avez déjà un compte ? 
                          <Link to='/signin' className='underline ml-1'>
                            Se connecter
                          </Link>
                      </p>
                  </form>
              </div>
          </div>
      </div>
    </section>
    </>
  );
};

export default Signup;