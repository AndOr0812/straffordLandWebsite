import React from 'react';
import ImgCarousel from '../Carousel/carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../40/forty.css';

class Forty extends React.Component {
  render() {
    return (
      <div className='fortyDesc'>
        <ImgCarousel/>
        
        <p>elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
    )
  }
}

export default Forty;