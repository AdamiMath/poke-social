
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Photo from './Components/Photo/Photo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import { UserStorage } from './UserContext'
import User from './Components/User/User'
import ProtectedRouter from './Components/Helper/ProtectedRouter'

function App() {
 

  return (
  <div>
    <BrowserRouter>
    <UserStorage>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/*" element={<Login />} />
        <Route path="conta/*" element={<ProtectedRouter><User /></ProtectedRouter>} />
        <Route path="foto/:id" element={<Photo />} />
      </Routes>
      <Footer />
      </UserStorage>
    </BrowserRouter>
  </div>
  )
}

export default App
