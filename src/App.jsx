import { BrowserRouter, Routes, Route } from 'react-router-dom';
import data from './Data.json';
import Header from './components/Header';
import Home from './pages/home';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import TestPage from './pages/TestPage';
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';


function App() {
  const {homeData, aboutData} = data;
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={homeData}/>} />
        <Route path="/test" element={<TestPage data={homeData}/>} />
        <Route path="/about" element={<About data={aboutData}/>} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
