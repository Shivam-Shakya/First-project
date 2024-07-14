import './App.css';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero/Hero';
import Join from './Component/Join/Join';
import Plan from './Component/Plan/Plan';
import Program from './Component/Program/Program';
import Reasons from './Component/Reasons/Reasons';
import Testimonials from './Component/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Program />
      <Reasons />
      <Plan />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
