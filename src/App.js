import './App.css';
import Navbar from './components/Navbar';
import RecipeContainer from './components/RecipeContainer';
import Recipedetail from './components/Recipedetail';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>

    <Router>

      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/RecipeContainer' element={<RecipeContainer/>}></Route>
        <Route path='/Recipedetail/:id' element={<Recipedetail/>} ></Route>
      </Routes>
    </Router>
    
    
    </>
    
  );
}

export default App;
