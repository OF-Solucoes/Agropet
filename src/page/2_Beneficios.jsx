import React, { useEffect, useRef, useState } from 'react';
import 'animate.css/animate.min.css';
import logo from '../assets/logo.png'
import pets from '../assets/pets.png'
import patas from '../assets/patas.png'
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
            <div  className="max-w-[508px] "  >
            <div  className={`max-w-[508px] pt-5 rounded-3xl duration-1000 ml-4 sm:block 
                    `}>
                        
                        <img ref={item} src={logo} alt='logo' className={`mx-auto 
                        animate__animated ${showAnimation ? 'animate-slide-Left-05' : ''}`} />
                        <p className={`text-center p-2 text-2xl text-marron
                             animate__animated ${showAnimation ? 'animate-slide-Left-05' : ''}`}>
                          Bem-vindo à Agropet Conceição! Oferecemos uma ampla seleção
                          de produtos para pets, incluindo rações nutritivas e acessórios essenciais. 
                          Nosso compromisso é proporcionar uma experiência de compra excepcional, 
                          cuidando do bem-estar e da felicidade do seu companheiro peludo. 
                          Descubra como podemos fazer a diferença na vida do seu pet!  

                        </p>
                        <img ref={item} src={patas} alt='patas' className='float-right ml-1 hidden sm:block' />
                    </div>             
            </div>
        
            <div className={`max-w-[608px] l p-6 animate__animated ${showAnimation ? 'animate-slide-Rigth-08' : ''}`}>
                
            <img ref={item} src={pets} alt='logo'  />
            </div>    
                                  
        </div>
    </section>
    )
}

export default Beneficios