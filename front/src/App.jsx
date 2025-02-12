import './App.css'
import Home from './views/Home/Home'
import NavBar from './components/Navbar/NavBar'
import MyAppointments from './views/MyAppointments/MyAppointments'
import Register from './views/Register/Register'
import Login from './views/Login/Login';
import {Route, Routes, useLocation} from 'react-router-dom'
import NewAppointment from './views/NewAppointment/NewAppointment'



function App() {
  const location = useLocation()
  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/register' && <NavBar />}
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/appointments' element={<MyAppointments />} />
        <Route path='/newAppointment' element={<NewAppointment />} />
      </Routes>
    </>
  )
}

export default App
