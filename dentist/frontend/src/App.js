// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/Signup';
import MainPage from './pages/MainPage';
import LoginPage from './pages/Login';
import DentistPage from './pages/DentistPage';
import LaboratoryPage from './pages/LaboratoryPage';


function App() {
  return (

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/dentists" element={<DentistPage/>} />
            <Route path="/laboratory" element={<LaboratoryPage authed={true}/>} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
