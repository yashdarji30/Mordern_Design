import react from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Pricing from './sections/Pricing';
import Faq from './sections/Faq';
import Download from './sections/Download';
import Footer from './sections/Footer';

const App = () => {
  return(
    <mai className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Download />
      <Footer />
    </mai>
  )
}

export default App;