
import './App.css';
//import MoviesGrid from './components/moviesGrid';
import NavBar from './components/NavBar'

import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import MovieDetails from './pages/MoviesDetails';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter className="App">

          <div> 
            <NavBar />  
          </div>
        <Routes>

          
          <Route path="/movie" element={ <MovieDetails />}>
          </Route>
        
          <Route exact path="/" element={ <LandingPage />}>
            
          </Route>
        
        </Routes>
    </BrowserRouter>
  );
}

export default App;

