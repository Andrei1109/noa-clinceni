import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import About from './components/About';
import UnitTypes from './components/UnitTypes';
import Advantages from './components/Advantages';
import Location from './components/Location';
import TechnicalTechnology from './components/TechnicalTechnology';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-accent selection:text-brand-primary">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <About />
        <UnitTypes />
        <Advantages />
        <Location />
        <TechnicalTechnology />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
