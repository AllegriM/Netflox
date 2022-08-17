import { Spinner } from '@chakra-ui/react';
import ProtectedRoutes from 'components/ProtectedRoutes';
import MovieContextProvider from 'context/SearchMovieContext';
import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";

import 'styles/App.css';
import 'styles/medias.css';

const Home = lazy(() => import('./pages/Home/index'));
const MovieDetail = lazy(() => import('./pages/MovieDetail/MovieDetail'));
const SearchMovie = lazy(() => import('./pages/SearchMovie/SearchMovie'));
const WatchList = lazy(() => import('./pages/WatchList/WatchList'));
const Login = lazy(() => import('./pages/Login/Login'));


function App() {

  return (
    <MovieContextProvider>
      <Suspense fallback={<Spinner size='xl' color='red' />}>
        <div className='App'>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route index path='/home' element={<Home />} exact />
              <Route path='/movie/:movieID' element={<MovieDetail />} />
              <Route path='/search/:keyword' element={<SearchMovie />} />
              <Route path='/watchlist' element={<WatchList />} />
            </Route>
            <Route exact path='/' element={<Login />} />
          </Routes>
        </div>
      </Suspense>
    </MovieContextProvider>
  );
}

export default App;
