import './App.css';
import Navbar from './components/Navbar';
import Recipe from './components/Recipe';
import RecipeContainer from './components/RecipeContainer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Recipedetail from './components/Recipedetail';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<RecipeContainer/>}></Route>
        <Route path='/Recipedetail/:id' element={<Recipedetail/>} ></Route>
      </Routes>
    </Router>
    
    
    </>
    
  );
}

export default App;
