import { useContext, useEffect, useRef, useState } from 'react';
import 'animate.css/animate.min.css';
import  mariana  from '../assets/mariana.png'
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
        <header className="w-full h-[650px] pt-9 bg-img_bg_fundo bg-no-repeat bg-center bg-cover">
        <div className="flex flex-col sm:flex-row items-center justify-center ">
            <div className="max-w-[408px]">
            <h1 className="text-white text-4xl md:text-5xl font-bold text-center p-2 md:p-4 m-3 md:m-4 
            animate-slide-down-05">
                    Seu faturamento está estagnado ou em queda?
                    </h1>
            </div>
            
            <div className={`max-w-[408px] pt-5 duration-1000 ml-4 hidden sm:block ${animate ? 'animate-pulse' : ''}`}>
                <img  src={mariana} alt='logo' />
            </div> 
            <div className="max-w-[408px]">
                <h1 className="text-white text-4xl md:text-5xl font-bold text-center p-2 md:p-4 m-2  md:m-4  animate-slide-down-08">
                  Está na hora de sua empresa aparecer. Alcance <strong className='text-primary-gray'>
                    novos clientes</strong> e impulsione seu faturamento.
                </h1>
            </div>
            
       </div >
       
    <BotaoAcao texto={showModal ? 'Fechar formulário':"Quero novos clientes"}/>
       <div className="flex flex-row  items-center justify-center ">
        </div >

</header>
    )
}
export default Promessas