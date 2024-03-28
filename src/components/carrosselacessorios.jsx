
import { Carousel } from 'react-bootstrap';
import acess1 from '../assets/coleira.png'
import acess2 from '../assets/mordedores.png'
import acess3 from '../assets/acessórios.png'
import saude4 from '../assets/neodexa.png'
import saude5 from '../assets/omega_3.png'
import saude6 from '../assets/frontLine.png'
import saude7 from '../assets/simparic.png'



function CarouselAcessorios() {
 

  return (
    <>
   
   <Carousel>   
      <Carousel.Item>
        <img
          className="d-block w-100 pb-7 mb-8 sm:pb-2 sm:mb-2"
          src={acess1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron'>COLEIRAS E CAIXAS DE TRANSPORTE</h3>
          {/* <p className=' text-marron hidden xl:block'>Suplemento vitamínico mineral para cães, com probióticos e prebióticos. Promove pele saudável e pelos brilhantes em todas as fases da vida.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100 pb-7 mb-8 sm:pb-0 sm:mb-0 "
          src={acess2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron'>MORDEDORES</h3>
          {/* <p className=' text-marron hidden xl:block'>Repele pulga e carrapato quando sobe no animal, é Indicado para cães e gatos acima de 2 meses e Protege o seu pet por até 5 meses.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 pb-7 mb-8 sm:pb-0 sm:mb-0"
          src={acess3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron'>BRINQUEDOS</h3>
          {/* <p className=' text-marron hidden xl:block'>Frontline é uma linha completa de antipulgas e carrapatos que combate e protege cães e gatos da infestação de pulgas e carrapatos.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>   
    </>
);

}

export default CarouselAcessorios;