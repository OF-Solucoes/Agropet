import React, { useEffect, useRef, useState } from 'react';
import 'animate.css/animate.min.css';
import casal from '../assets/casal.png'
import Beneficio from '../components/Beneficio';

const Beneficios = () => {

    const item = useRef();
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        function handleOpenScollAnimation() {
            const rect = item.current.getBoundingClientRect();

            if (rect.y + 300 <= (window.innerHeight || document.documentElement.clientHeight)) {
                setShowAnimation(true);
                window.removeEventListener('scroll', handleOpenScollAnimation);
            }
        }

        window.addEventListener('scroll', handleOpenScollAnimation);

        // Cleanup: Remove o listener quando o componente for desmontado
        return () => {
            window.removeEventListener('scroll', handleOpenScollAnimation);
        };
    }, []);

    useEffect(() => {
        if (showAnimation) {
            const timeoutId = setTimeout(() => {
                setShowAnimation(false);
            }, 700); 

            return () => clearTimeout(timeoutId);
        }
    }, [showAnimation]);


    return(

    <section  className='md:p-12' >
        <div className="flex flex-col sm:flex-row items-center justify-center">
            <div  className="max-w-[408px] "  >
            <div  className={`max-w-[408px] pt-5 duration-1000 ml-4 hidden sm:block 
                    animate__animated ${showAnimation ? 'animate-slide-Left-05' : ''}`}>
                        
                        <img ref={item} src={casal} alt='logo' />
                    </div>             
            </div>
        
            <div className={`max-w-[408px]  rounded-3xl  shadow-2xl p-6 animate__animated ${showAnimation ? 'animate-slide-Rigth-08' : ''}`}>
                
                <Beneficio 
                    titulo='Maximize Sua Presença Online:'
                    texto = 'Utilize nossas estratégias avançadas de tráfego pago para garantir que sua empresa seja vista pelos clientes certos, no momento certo'
                />

                <Beneficio 
                    titulo='Conquiste Clientes de Qualidade:'
                    texto = 'Dirija sua campanha de marketing diretamente para seu público-alvo, aumentando suas chances de gerar leads qualificados e aumentar suas vendas.'
                />

                <Beneficio 
                    titulo='Alcance Novos Patamares de Vendas:'
                    texto = 'Experimente um aumento significativo nas conversões e no crescimento das vendas com campanhas de publicidade online feitas sob medida para o seu negócio.'
                />
            </div>    
                                  
        </div>
    </section>
    )
}

export default Beneficios