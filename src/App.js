
import './App.css';
//import MoviesGrid from './components/moviesGrid';

import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import MovieDetails from './pages/MoviesDetails';

function App() {
  return (
    <BrowserRouter className="App">

        
        <Routes>

          <Route path="/movie" element={ <MovieDetails />}>
          </Route>
        
          <Route exact path="/">
            Home
          </Route>
        
        </Routes>
    </BrowserRouter>
  );
}

export default App;

