import ProtectedRoutes from 'components/ProtectedRoutes';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import { Routes, Route} from "react-router-dom";

import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} exact /> 
        </Route>
        <Route exact path="/" element={<Login />} /> 
      </Routes>      
    </div>
  );
}

export default App;
