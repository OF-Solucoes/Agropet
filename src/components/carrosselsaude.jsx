
import { Carousel } from 'react-bootstrap';
import saude1 from '../assets/microdine.png'
import saude2 from '../assets/pelefood.png'
import saude3 from '../assets/pulgoff.png'
import saude4 from '../assets/neodexa.png'
import saude5 from '../assets/omega_3.png'
import saude6 from '../assets/frontLine.png'
import saude7 from '../assets/simparic.png'



function CarouselSaude() {
 

  return (
    <>
   
   <Carousel>   
      <Carousel.Item>
        <img
          className="d-block w-100 pb-7 mb-8 sm:pb-2 sm:mb-2"
          src={saude2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron'>PELEFOOD DOG</h3>
          <p className=' text-marron hidden xl:block'>Suplemento vitamínico mineral para cães, com probióticos e prebióticos. Promove pele saudável e pelos brilhantes em todas as fases da vida.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100 pb-7 mb-8 sm:pb-0 sm:mb-0 "
          src={saude3}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron'>COLEIRA PULGOFF</h3>
          <p className=' text-marron hidden xl:block'>Repele pulga e carrapato quando sobe no animal, é Indicado para cães e gatos acima de 2 meses e Protege o seu pet por até 5 meses.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 pb-7 mb-8 sm:pb-0 sm:mb-0"
          src={saude6}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron'>FRONTLINE</h3>
          <p className=' text-marron hidden xl:block'>Frontline é uma linha completa de antipulgas e carrapatos que combate e protege cães e gatos da infestação de pulgas e carrapatos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 pb-7 mb-8 sm:pb-0 sm:mb-0"
          src={saude4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron'>NEODEXA F CREME</h3>
          <p className=' text-marron hidden xl:block'>É indicado para cães, gatos e equinos em lesão de pele infectada ou não. Lesões pruriginosas onde é necessário eliminar a coceira e a dor local.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100 pb-10 mb-10 sm:pb-0 sm:mb-0"
          src={saude5}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron mt-1 sm:pt-0'>Organnact Omega Cat 3+6 +D</h3>
          <p className=' text-marron hidden xl:block'>Suplemento mineral vitamínico para gatos, com Ômega 3, Ômega 6 e vitamina D, essenciais para a saúde e bem-estar.</p>
        </Carousel.Caption>
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 pb-7 mb-8 sm:pb-0 sm:mb-0"
          src={saude7}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron'>SIMPARIC</h3>
          <p className=' text-marron hidden xl:block'>Comprimido mastigável altamente palatável, eficaz contra pulgas resistentes. Indicado para controle da Dermatite Alérgica à Picada de Pulgas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>   
    </>
);

}

export default CarouselSaude;