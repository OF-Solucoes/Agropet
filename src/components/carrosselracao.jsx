
import { Carousel } from 'react-bootstrap';
import racao1 from '../assets/racaoplus.png'
import racao2 from '../assets/racao2.png'
import racao3 from '../assets/racao3.png'
import racaogatop from '../assets/racaogatospurina.png'
import racaogato from '../assets/racaogato.png'
import granulado2 from '../assets/mitcanario.png'


function CarouselRacao() {
 

  return (
    <>
   
   <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 pb-7 mb-8 sm:pb-10 sm:mb-0"
          src={racao1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron'>Granplus cãoes porte grande</h3>
          <p className=' text-marron hidden xl:block'>Nutrição completa e balanceada para cães adultos, com ômega 3, fibras, prebiótico MOS, glicosamina e condroitina. Atende às diferentes necessidades de cada porte e fase de vida, sem corantes ou aromas artificiais.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 pb-1 mb-3 sm:pb-0 sm:mb-0"
          src={racaogatop}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron'>Purina gatos adultos</h3>
          <p className=' text-marron hidden xl:block'>Feito com uma seleção de ingredientes naturais e aprimorado com um prebiótico natural que auxilia no equilíbrio intestinal do seu gato.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100 pb-7 mb-8 sm:pb-0 sm:mb-0 "
          src={racao2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron'>Golden cães porte pequeno</h3>
          <p className=' text-marron hidden xl:block'>Nutrição deliciosa para filhotes de raças pequenas, promovendo crescimento e vitalidade.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 pb-1 mb-3 sm:pb-0 sm:mb-0"
          src={racaogato}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron'>Golden gatos castrados</h3>
          <p className=' text-marron hidden xl:block'>Auxilia no controle do peso, fornece vitaminas, minerais e proteínas essenciais, além de reduzir o odor das fezes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100 pb-3 mb-8 sm:pb-10 sm:mb-0"
          src={racao3}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron '>Premier cães filhotes</h3>
          <p className=' text-marron hidden xl:block'>Promove crescimento equilibrado, suporte às articulações, saúde intestinal e peso ideal. Sem conservantes nem aromatizantes artificiais.</p>
        </Carousel.Caption>
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 pb-2 mb-2 sm:pb-0 sm:mb-0"
          src={granulado2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className=' text-marron'>Mistura para aves</h3>
          <p className=' text-marron hidden xl:block'>Mantém plumagem brilhante, fortalece o sistema imunológico, favorece a digestão e absorção de nutrientes. Opção prática e conveniente em pacote de fácil armazenamento.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>   
    </>
);

}

export default CarouselRacao;