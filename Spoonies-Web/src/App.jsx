import {Routes, Route, BrowserRouter} from 'react-router-dom' 
import Login from '../src/login/Login'
import Home from '../src/home/Home'
import './App.css'
import Header from './header/Header'

function App() {
  

  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
