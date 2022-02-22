import logo from './logo-hm640.png';
import './App.css';
import {Link} from 'react-scroll';

function App() {
  return (
    <div className="App">
      <header className="App-header" id='head'>

        <nav className="App-header-nav">
          <img className="App-header-nav-logo" src={logo} alt="logo" />
          <ul className="App-header-nav-list">
            <li className="Nav-list-item">
              <Link to='head' smooth={true}>Inicio</Link></li>
            <li className="Nav-list-item">
              <Link to='gallery' smooth={true}>Galería</Link></li>
            <li className="Nav-list-item">
              <Link to='services' smooth={true}>Servicios</Link></li>
            <li className="Nav-list-item">
              <Link to='contact' smooth={true}>Contacto</Link></li>
          </ul>
        </nav>    
        <section className="App-header-sec">
            HUGO MATEO BERTONE
        </section>
      </header>
      <div className="App-gallery" id="gallery">
        
      </div>
    </div>
  );
}

export default App;