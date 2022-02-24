import logo from './logo-hm640.png';
import './styles.css';
import { Link } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';

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
      <div className="App-gallery" id='gallery'>
        <Swiper className='swiper'
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className='swiper-slide'>
          <img src={logo} />
          Slide 1</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </div>
      <div className="App-services" id='services'>

      </div>
      <div className="App-contact" id='contact'>
        
      </div>
      <footer class="App-footer" id='footer'> 
          Envíame un WPP
      </footer>
    </div>
  );
}

export default App;