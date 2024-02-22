import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './Views/HomeView.jsx';
import NavBar from './components/Navbar/Navbar';
import PhoneView  from './Views/PhoneView.jsx';
import TabletView  from './Views/TabletView.jsx';
import ComputerView  from './Views/ComputerView.jsx';
import ConsoleView  from './Views/ConsoleView.jsx';
import HeadView from './Views/HeadView.jsx';
import TelevisoresView from './Views/TelevisoresView.jsx';
import Footer from './components/Footer/Footer.jsx';
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/phone" element={<PhoneView />} />
        <Route path="/tablet" element={<TabletView />} />
        <Route path="/pc" element={<ComputerView />} />
        <Route path="/console"element={<ConsoleView />} />
        <Route path="/head" element={<HeadView />} />
        <Route path="/tv" element={<TelevisoresView />} />
      </Routes>
      <Footer/>
    </Router>
  );
};


export default App;
