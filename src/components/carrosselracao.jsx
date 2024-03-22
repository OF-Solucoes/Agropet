
import { Carousel } from 'react-bootstrap';
import racao1 from '../assets/racaoplus.png'
import racao2 from '../assets/racao2.png'
import racao3 from '../assets/racao3.png'
import racao4 from '../assets/racao4.png'


function CarouselRacao() {
 

  return (
    <>
   
   <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 pb-7 mb-8 sm:pb-0 sm:mb-0"
          src={racao1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron'>GRANPLUS</h3>
          <p className=' text-marron'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 pb-7 mb-8 sm:pb-0 sm:mb-0 "
          src={racao2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron'>GOLDEN</h3>
          <p className=' text-marron'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 pb-7 mb-8 sm:pb-0 sm:mb-0"
          src={racao3}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron'>PREMIER</h3>
          <p className=' text-marron'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 pb-7 mb-8 sm:pb-0 sm:mb-0"
          src={racao4}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron'>FINOTRATO</h3>
          <p className=' text-marron'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>   
    </>
);

}

export default CarouselRacao;