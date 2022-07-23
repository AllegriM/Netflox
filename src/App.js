import ProtectedRoutes from 'components/ProtectedRoutes';
import Home from 'pages/Home';
import Login from 'pages/Login/Login';
import MovieDetail from 'pages/MovieDetail/MovieDetail';
import { Routes, Route } from "react-router-dom";

import 'styles/App.css';
import 'styles/medias.css';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path='/home' element={<Home />} exact />
          <Route path='/movie/:movieID' element={<MovieDetail />} />
        </Route>
        <Route exact path='/' element={<Login />} /> 
      </Routes>      
    </div>
  );
}

export default App;
