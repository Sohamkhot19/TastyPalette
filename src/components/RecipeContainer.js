import React from 'react'
import Recipe from './Recipe'

function RecipeContainer() {
  return (
    <>
    <h1 className='text-center px-1 py-1 font-bold text-4xl my-2'>Our Popular Recipies</h1>
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