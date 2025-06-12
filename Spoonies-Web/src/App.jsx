import {Routes, Route, BrowserRouter} from 'react-router-dom' 
import Login from '../src/login/Login'
import Home from '../src/home/Home'
import './App.css'
import Header from './header/Header'
import About from './about/About'
import Signup from './signup/signup'

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
