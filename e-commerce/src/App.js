import Navbar
 from "./components/navbar";

 import Home from './pages/home';
 import Register from './pages/register'
 import Login from './pages/login'
 import Menu from "./pages/menu";

 import { Routes, Route } from 'react-router-dom'

 import axios from "axios"

 import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

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
        localStorage.setItem("id", response.data[0].id)
        navigate("/");
    } catch (error) {
    }
  }

  let keepLogin = async() => {
    try {
      // Step-1 Untuk mengecek user sudah pernah login atau belum, dilihat dari local storage nya
      let getId = parseInt(localStorage.getItem("id"))

      // Step-2 Setelah mendapatkan id nya, kita cek id tersebut di dalam database untuk mendapatkan username nya
      let response = await axios.get(`http://localhost:5000/users/${getId}`)
      setUsername(response.data.username)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    keepLogin()
  }, [])

  return (
    <>
      <Navbar myUsername={{username}} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        {/* <Route path='/register' element={username? navigate('/') : <Register />} />
        <Route path='/login' element={username? navigate('/') : <Login myFunc={{onLogin}} />} /> */}
      </Routes>
    </>
  );
}

export default App;
