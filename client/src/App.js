import './App.scss';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="hero">
     <Navbar />
     <Introduction />
     <Projects />
     <Footer />
    </div>
  );
}

export default App;
