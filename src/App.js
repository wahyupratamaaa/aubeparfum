import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';

import Error from './pages/Error';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import ScrollToTop from './pages/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
