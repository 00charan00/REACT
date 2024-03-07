import Login from './login/Login.jsx';
import Register from './register/Register.jsx';
import Home from './Home.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/' element={<Login />}></Route>
            <Route path='/home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
