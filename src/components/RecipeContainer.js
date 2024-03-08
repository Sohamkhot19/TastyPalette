import React from 'react'
import Recipe from './Recipe'

function RecipeContainer() {
  return (
    <>
    <div className="mainhead text-center font-bold text-3xl mb-4">Search Your recipe</div>
    

    <form className="max-w-md mx-auto">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative flex items-center">
        <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input 
            type="search" 
            id="default-search" 
            className="block w-full p-4 pl-10 h-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-100 focus:border-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" 
            placeholder="Search Recipe..." 
            required 
        />
        <button 
            type="submit" 
            className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-4 py-2 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-yellow-200"
        >
            Search
        </button>
    </div>
</form>



    <h1 className='text-center px-1 py-1 font-bold text-2xl my-2'>Our Popular Recipies</h1>
    <div className="container my-3 flex flex-wrap mx-10">
        
    <Recipe/>
    <Recipe/>
    <Recipe/>
    <Recipe/>
    <Recipe/>
    <Recipe/>
    <Recipe/>
    <Recipe/>
    <Recipe/>
    <Recipe/>
    <Recipe/>
    <Recipe/>
    </div>
    
    </>
  )
}

export default RecipeContainer