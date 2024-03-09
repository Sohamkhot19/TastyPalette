import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
function Recipedetail({recipe}) {
    const { id } = useParams();
    const [recipeDetail, setRecipeDetail] = useState(null);

    useEffect(() => {
        const fetchRecipeDetail = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();

                // Assuming the API response has a 'meals' property with detailed information
                setRecipeDetail(data.meals ? data.meals[0] : null);
            } catch (error) {
                console.error('Error fetching recipe detail:', error);
            }
        };

        fetchRecipeDetail();
    }, [id]);

    if (!recipeDetail) {
        return <div>Loading...</div>; // You can display a loading indicator while data is being fetched
    }
    const ingredients = Object.keys(recipeDetail)
    .filter(key => key.startsWith('strIngredient') && recipeDetail[key])
    .map(key => recipeDetail[key]);
    
    const measures = Object.keys(recipeDetail)
    .filter(key => key.startsWith('strMeasure') && recipeDetail[key])
    .map(key => recipeDetail[key]);

    const description = `${recipeDetail.strMeal} is a ${recipeDetail.strCategory} dish from ${recipeDetail.strArea}. It is known for its unique combination of flavors and ingredients.`;

  return (
    <>
    <a href="/" className="inline-flex items-center px-3 py-2  my-5 mx-10 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:bg-blue-600 dark:hover:bg-orange-400 dark:focus:ring-blue-800">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"/>
        </svg>
             Back to Recipies
    </a>
    <div className="my-10 ml-20  flex items-start">  
    <div className="recipe_desc mx-20">
        <h1 className='text-start mt-0 text-4xl mb-4'>{recipeDetail.strMeal}</h1>
        <p className='text-start mb-6 text-1xl'>{description}</p>
    
    <h1 className='text-4xl mb-4'>Ingredients</h1>


    <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Ingredients
                </th>
                <th scope="col" class="px-6 py-3">
                    Measures
                </th>
            </tr>
        </thead>
        <tbody>
        {ingredients.map((ingredient, index) => (
                        <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{ingredient}</td>
                            <td class="px-6 py-4">{measures[index]}</td>
                        </tr>
        ))}
            
        </tbody>
    </table>
</div>

    </div>
    


    <div className="flex-1">
    <img className="h-auto max-w-lg rounded-lg" src={recipeDetail.strMealThumb} alt="Recipe imag2"/>
    <h1 className='text-4xl mb-4 mt-8'>Instructions</h1>
                <p className='text-start mb-6 text-1xl w-full'>{recipeDetail.strInstructions}</p>
    </div>

    
    
</div>


    </>
  )
}

export default Recipedetail