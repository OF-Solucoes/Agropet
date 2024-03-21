import { useContext, useEffect, useRef, useState } from 'react';
import 'animate.css/animate.min.css';
import  logo  from '../assets/agropet2.png'
import  promImg  from '../assets/cachorro2.png'
import  DELIVERY  from '../assets/DELIVERY.png'
import BotaoAcao from '../components/botaoAcao'
import { BotaoContext } from '../providers/BotaoContext';

const Promessas = () =>{

    const { showModal } = useContext(BotaoContext)

    const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(false);
    }, 2000);

    // Limpe o timeout ao desmontar o componente para evitar vazamentos de memória
    return () => clearTimeout(timeout);
  }, []); // Executado apenas uma vez no carregamento do componente
   
    return(
        <header className="w-full h-[650px]  pt-1 bg-img_bg_fundo bg-no-repeat bg-center bg-cover">
        <div className="flex flex-col sm:flex-row items-center justify-center ">
            <div className="max-w-[508px] md:mr-20">
            <img  src={logo} alt='logo' />
            <h1 className="font-hanken-grotesk text-white text-2xl font-bold text-justify  
            animate-slide-down-05">
                    Aqui você encontra uma Variedade de produtos Exclusivos e de Alta Qualidade para seus Pets, com atendimento excepcional e experiência de compra segura.
                    </h1>
                    <br/>
                    <br/>
                    <h1 className="font-hanken-grotesk text-amarelo-claro text-2xl font-bold text-justify  
            animate-slide-down-05">
                    Cadastre-se e ganhe descontos exclusivos!
                    </h1>
                  <BotaoAcao texto={showModal ? 'Fechar formulário':"QUERO DESCONTO!"}/>
       <div className="flex flex-row  items-center justify-center ">
        </div >
                
            </div>
            
            <div className={`max-w-[508px] pt-5 duration-1000 md: ml-20 hidden sm:block ${animate ? 'animate-pulse' : ''}`}>
                <img  src={promImg} alt='cachoro' />
                <img  src={DELIVERY} alt='DELIVERY' />
                <h1 className="font-hanken-grotesk text-amarelo-claro text-4xl md:text-2xl font-bold text-justify  
            animate-slide-down-05">
                    Entrega Rápida e Qualidade Garantida
                    </h1>
            </div> 
            
       </div >
       
    

</header>
    )
}
export default Promessas