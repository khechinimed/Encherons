import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';
import { ImCross } from "react-icons/im";

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const { resetPassword } = UserAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const styleIcon1 = { color: "white", cursor: "pointer", float:"right" }

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setLoading(true);
      setError("");
      await resetPassword(email);
      setMessage("Mail de réinitialisation envoyé, consultez votre boite mail et suivez les instructions");
    } catch (error) {
      setError("Erreur lors de la réinitialisation veuillez réessayer");
    }
    setLoading(false);
  };

  return (
    <>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <Link to='/home'><div class="pr-2 pt-2"><ImCross size={15} style={styleIcon1}/></div></Link>
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                    Mot de passe oublié
                  </h1>
                  {error && <p class="text-center text-red-500">{error}</p>}
                  {message && <p class="text-center text-white">{message}</p>}
                  <form onSubmit={handleResetPassword} class="space-y-4 md:space-y-6">
                      <div>
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse email</label>
                          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nom@gmail.com" required="" onChange={(e) => setEmail(e.target.value)} />
                      </div>                     
                      <button type="submit" className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-2 my-2 text-white rounded-lg">Envoyer le mail de réinitialisation</button>
                      <p class="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                          Vous avez déjà un compte ? 
                          <Link to='/signin' className='underline ml-2'>
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

export default ForgetPassword;