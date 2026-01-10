import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Footer from './components/Footer';
import Legal from './components/Legal';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <HowItWorks />
            <Locations />
            <Testimonials />
            <Partners />
          </main>} 
        />
        <Route path="/legal" element={<Legal />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;