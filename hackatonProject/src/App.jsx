import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './assets/Views/HomeView';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/phone" element={<PhoneView />} />
        <Route path="/tablet" element={<TabletView />} />
        <Route path="/pc" element={<ComputerView />} />
        <Route path="/console"element={<ConsoleView />} />
        <Route path="/head" element={<HeadView />} />
        <Route path="/tv" element={<TElevisoresView />} />
       
      </Routes>
     
    </>
  );
  
};

export default App;
