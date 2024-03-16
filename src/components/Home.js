import React from "react";
import images from "../imageurls.json"
import Footer_component from "./Footer";

function Home() {
  return (
    <>
    {/* hero section */}
      <h1 className="text-center text-4xl my-2 font-semibold">
        Welcome to Tasty Palette
      </h1>

      <div className="flex mx-5 my-5 justify-center">
        <div className="mt-14">
          <h1 className="text-3xl mr-14 my-5 font-bold">
            Your Ultimate Recipe Destination!
          </h1>
          <p className="text-xl w-96 text-slate-600">
            Are you tired of the same old recipes? Do you crave culinary
            inspiration from around the world? Look no further! Tasty Palette
            brings you a treasure trove of delicious recipes, curated just for
            you.
          </p>
          <a
            href="/RecipeContainer"
            className="inline-flex items-center px-3 py-2  my-5 mx-10 text-xl font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:bg-blue-600 dark:hover:bg-orange-400 dark:focus:ring-blue-800"
          >
            Explore Recipes
          </a>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-96 w-96 mt-3 ">
        {images.map((imageUrl, index) => (
        <div key={index} className="overflow-hidden hover:scale-110 transition-transform duration-300 ease-in-out">
          <img className="h-24 max-w-32 rounded-lg" src={imageUrl} alt={`foodimg ${index}`} />
        </div>
      ))}
        </div>
      </div>
      <hr class="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
      {/* features section */}
      <h1 className="text-4xl text-center font-semibold mt-14 mb-0">What do you get here</h1>
      <div className="relative">
  <div className="w-full h-72 bg-orange-300 absolute top-0 left-0 z-10 mt-28"></div>
  <div className="mt-24 flex justify-center my-10">

    <span className="block max-w-56 p-6 h-80 mx-8 bg-white border border-gray-200 rounded-lg shadow-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative z-20">
      <div className="w-24 h-24 rounded-full bg-orange-300 overflow-hidden mx-10">
        <img src="../search.png" alt="" />
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Discover Delightful Recipes
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Explore a diverse collection of recipes from various cuisines and styles.
      </p>
    </span>

    <span className="block max-w-56 p-6 h-80 mx-8 mt-16 bg-white border border-gray-200 rounded-lg shadow-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative z-20">
      <div className="w-24 h-24 rounded-full bg-orange-300 overflow-hidden mx-10">
        <img src="../cooking.png" alt="" />
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Easy-to-Follow Instructions
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Our recipes feature simple instructions for both beginners and experienced cooks.
      </p>
    </span>

    <span className="block max-w-56 p-6 h-80 mx-8 bg-white border border-gray-200 rounded-lg shadow-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative z-20">
      <div className="w-24 h-24 rounded-full bg-orange-300 overflow-hidden mx-10">
        <img src="../suggestion.png" alt="" />
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Personalized Suggestions
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Tailored recommendations based on your preferences, allergies, and favorite ingredients.
      </p>
    </span>

    <span className="block max-w-56 p-6 h-80 mx-8 mt-16 bg-white border border-gray-200 rounded-lg shadow-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative z-20">
      <div className="w-24 h-24 rounded-full bg-orange-300 overflow-hidden mx-10">
        <img src="../diversity.png" alt="" />
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Join Our Culinary Community
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Connect with food enthusiasts, share recipes, and discover new flavors together.
      </p>
    </span>

  </div>
</div>

{/* user reviews section */}
<h1 className="text-3xl font-semibold text-center mb-2">User Reviews </h1>

<div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
            <p class="my-4">If you care for your time, I hands down would go with this."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile pic"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Bonnie Green</div>
                <div class="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div>
            </div>
        </figcaption>    
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
            <p class="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile pic"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Roberta Casas</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
            </div>
        </figcaption>    
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
            <p class="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile pic"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Jese Leos</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
            </div>
        </figcaption>    
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
            <p class="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile pic"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Joseph McFall</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">CTO at Google</div>
            </div>
        </figcaption>    
    </figure>
</div>


{/* footer */}
          <Footer_component/>

    </>
  );
}

export default Home;
