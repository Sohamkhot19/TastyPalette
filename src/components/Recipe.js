import React from 'react'

function Recipe() {
  return (
    <>
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-2">
<div className="max-w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="../samplefood.avif" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Food name</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Food description: some lines about that recipe</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:bg-blue-600 dark:hover:bg-orange-400 dark:focus:ring-blue-800">
            View Recipe
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
</div>

    </>


  )
}

export default Recipe