import { useContext, useEffect, useRef, useState } from 'react';
import 'animate.css/animate.min.css';
import  logo  from '../assets/agropet2.png'
import  promImg  from '../assets/cachorro2.png'
import  DELIVERY  from '../assets/DELIVERY.png'
import BotaoAcao from '../components/botaoAcao'
import { BotaoContext } from '../providers/BotaoContext';
import Formulario from '../components/fom';

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
            <p className="font-hanken-grotesk mr-4 ml-4 text-white text-3xl font-bold text-justify  
            animate-slide-down-05">
                    Proporcione o melhor para seu Pet sem sair de casa com a Agropet

                    </p>
                    <br/>
                   
            <p className="font-hanken-grotesk mr-4 ml-4 text-amarelo-claro text-2xl font-bold text-justify  
            animate-slide-down-05">
                     Seja parte do nosso Clube VIP e desfrute de benefícios incríveis, como descontos irresistíveis, brindes especiais e a chance de ser o primeiro a conhecer nossos lançamentos. Inscreva-se agora!
                    </p>
                    
             <button id='vip' onClick={() =>  window.open("https://chat.whatsapp.com/Ldh5SeZwtb70OZViZ1yluG", "_black")} 
                                        className=' bg-primary-orange   text-white 
                                        rounded-full
                                        md: w-[230px]
                                        md: h-[50px]
                                         m-6 
                                        border-2 border-white
                                        shadow-md
                                        mx-auto block
                                        hover:-translate-y-1
                                        hover:scale-110
                                        hover:bg-primary-focus duration-300'>
                    Junte-se ao grupo vip!
                </button> 
           
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