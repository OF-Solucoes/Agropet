
import racao from '../assets/racaoplus.png'
import { Carousel } from 'react-bootstrap';

function ControlledCarousel() {
 

  return (
    <>
   
   <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 text-marron"
          src={racao}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron'>First slide label</h3>
          <p className=' text-marron'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={racao}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron'>Second slide label</h3>
          <p className=' text-marron'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Adicione mais itens do carrossel conforme necessário */}
    </Carousel>   
    </>
);

}

export default ControlledCarousel;