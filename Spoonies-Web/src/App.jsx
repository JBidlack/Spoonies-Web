import {Routes, Route, BrowserRouter} from 'react-router-dom' 
import Login from '../src/login/Login'
import Home from '../src/home/Home'
import './App.css'
import Header from './header/Header'
import About from './about/About'
import Signup from './signup/signup'
import Dashboard from './UserDashboard/Dashboard'

function App() {
  

  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
