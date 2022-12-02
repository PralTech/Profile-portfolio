import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Services from './Components/Services/Services'
import Work from './Components/Works/work'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/work' element={<Work />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer/>
  </BrowserRouter>

  
}

export default App;
