import Navbar
 from "./components/navbar";

 import Home from './pages/home';
 import Register from './pages/register'
 import Login from './pages/login'

 import { Routes, Route } from 'react-router-dom'

 import axios from "axios"

 import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function App() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('')

  let onLogin = async(inputUsername, inputPassword) => {
    try {
        // Step1. Validasi inputan jangan ada yg kosong

        // Step2. Check apakah username dan password nya ada?
        let response = await axios.get(`http://localhost:5000/users?username=${inputUsername}&password=${inputPassword}`)
        if(response.data.length === 0) throw { message: 'Account Not Found' }
        setUsername(response.data[0].username)
        navigate("/");
    } catch (error) {
    }
  }

  return (
    <>
      <Navbar myUsername={{username}} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login myFunc={{onLogin}} />} />
      </Routes>
    </>
  );
}

export default App;
