import React from 'react';
import { Link } from 'react-router-dom';

const Passwordreset = () => {
    const handlePasswordReset = async (values, actions) => {
        const { email } = values
        try {
          await this.props.firebase.passwordReset(email)
          console.log('Mail de reset mot de passe envoye avec succes')
          this.props.navigation.navigate('Login')
        } catch (error) {
          actions.setFieldError('general', error.message)
        }
    }

    return (
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                        Réinitialisation mot de passe
                    </h1>
                    <form onSubmit={handlePasswordReset} class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nom@gmail.com" required=""/>
                        </div>
                        <button type="submit" className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-2 my-2 text-white rounded-lg">Envoyer le code de réinitialisation</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                            Vous n'avez pas encore de compte ? 
                            <Link to='/signup' className='underline ml-1'>
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

export default Passwordreset;