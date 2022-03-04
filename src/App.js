import logo from './logo-hm640.png'
import './styles.css';
import './examples.css';
import './fullpage.css';
import { Link } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';

function App() {

      /** Versión alfa base **/

  return (
    /**<div className="App">
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
            <h1>HUGO MATEO BERTONE</h1>
        </section>
      </header>
      
      <div className="App-gallery" id='gallery'>
        
      </div>
      <div className="App-services" id='services'>

      </div>
      <div className="App-contact" id='contact'>
        
      </div>
      <footer className="App-footer" id='footer'> 
          Envíame un WPP
      </footer>
      <div className="section" id="section1">
        <div className="slide" id="slide1"><h1>Slide Backgrounds</h1></div>
        <div className="slide" id="slide2"><h1>Totally customizable</h1></div>
      </div>
      <div id="fullpage">
	      <div class="section" id="section1">
		      <div class="slide" id="slide1"><h1>Foto 1</h1></div>
		      <div class="slide" id="slide2"><h1>Foto 2</h1></div>
	      </div>
      </div>
    </div>**/
    <div id="fullpage">
      <div class="section" id="section1">
        <div class="slide" id="slide1"><h1>Foto 1</h1></div>
        <div class="slide" id="slide2"><h1>Foto 2</h1></div>
      </div>
      <div class="section" id="section0"><h1>Hugo Mateo Bertone</h1></div>
      <div class="section" id="section2"><h1>Foto 3<br />0000</h1></div>
      <div class="section" id="section3"><h1>Foto 4</h1></div>
    </div>
  );
}

export default App;