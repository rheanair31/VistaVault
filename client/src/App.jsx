import {BrowserRouter, Routes, Route}from 'react-router-dom'
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Sign-in" element={<SignIn/>}/>
    <Route path="/Sign-up" element={<SignUp/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>;
}
