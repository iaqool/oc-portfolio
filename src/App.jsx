import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import UGCVideos from './components/UGCVideos';
import AiProduction from './components/AiProduction';
import WebDevServices from './components/WebDevServices';
import Services from './components/Services';
import Cases from './components/Cases';
import Footer from './components/Footer';
import Marquee from './components/Marquee';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
      <Header />
      <Marquee />
      <main>
        <Hero />
        <UGCVideos />
        <AiProduction />
        <WebDevServices />
        <Services />
        <Cases />
      </main>
      <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
