import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Sign_up from './routes/Sign_up';
import CreateEvent from './routes/CreateEvent';
import UserDetails from './routes/UserDetails';
import Login from './routes/Login';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Sign_up" element={<Sign_up/>}/>
        <Route path="/CreateEvent" element={<CreateEvent/>}/>
        <Route path="/UserDetails" element={<UserDetails/>}/>
      </Routes>
    </div>
  );
}

// export default App;
