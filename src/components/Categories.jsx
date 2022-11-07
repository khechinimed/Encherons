import React from 'react';
import Typed from 'react-typed';

function Categories() {
  return (
    <>
        <div class="flex justify-center items-center pt-2">
            <h1 className='md:text-1xl sm:text-2xl text-xl font-bold py-4 text-white'>Acheter tout ce dont vous avez besoin</h1>
            <Typed
            className='md:text-1xl sm:text-2xl text-xl font-bold md:pl-2 pl-2 text-[#2563EB]'
                strings={['Iphone 14', 'Rolex Submariner', 'BMW Série 4', 'Air Jordan 1']}
                typeSpeed={90}
                backSpeed={120}
                loop
            />
        </div>
        
        <div class="max-w-screen-sm mx-auto pb-5">
            <form>   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Faites parler vos envies..." required />
                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Recherche</button>
                </div>
            </form>
        </div>

        <section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-5 mb-5">
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                <img src="/ameublement.jpg" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                <div class="px-4 py-3 w-72">
                    <p class="text-base font-bold text-black truncate block capitalize text-center">Ameublement</p>
                </div>
                </a>
            </div>


            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                <img src="/art.jpg" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                <div class="px-4 py-3 w-72">
                    <p class="text-base	 font-bold text-black truncate block text-center">Art et décoration</p>
                </div>
                </a>
            </div>
        

            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                <img src="/bijoux.jpg" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                <div class="px-4 py-3 w-72">
                    <p class="text-base	 font-bold text-black truncate block text-center">Mode et bijoux</p>
                </div>
                </a>
            </div>
        

        
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                <img src="/montre.jpg" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                <div class="px-4 py-3 w-72">
                    <p class="text-base	 font-bold text-black truncate block text-center">Horlogerie</p>
                </div>
                </a>
            </div>


    
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                <img src="/telephone.jpg" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                <div class="px-4 py-3 w-72">
                    <p class="text-base	 font-bold text-black truncate block text-center">Informatique et téléphonie</p>
                </div>
                </a>
            </div>


        
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                <img src="/voiture.jpg" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                <div class="px-4 py-3 w-72">
                    <p class="text-base	 font-bold text-black truncate block text-center">Véhicules et engins</p>
                </div>
                </a>
            </div>

        </section>
    </>
  );
};

export default Categories