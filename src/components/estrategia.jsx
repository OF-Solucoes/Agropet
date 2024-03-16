import React, { useEffect, useRef, useState } from 'react';
import foguetinho from '../assets/foguetinho.png'


const Estrategia = ({figura, altern, titulo, texto}) => {

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
    return (
        <>
          <div ref={item} className={`max-w-[408px] flex flex-col rounded-3xl lg:rounded-full  border-solid shadow-2xl
                               items-center justify-center sm:p-5 lg:p-5 sm:m-2 lg:m-1 w-[400px]  h-[220px]
                               animate__animated ${showAnimation ? 'animate-slide-Gira' : ''} `}>
                <div className='flex items-center justify-center '>                
                    <img className='rounded-full' src={figura} alt={altern} />
                </div>
                    <h6 className='text-azul-escuro text-1xl  font-bold text-justify '><strong>{titulo}</strong></h6>
                    <p className="text-white text-1xl  font-bold text-justify 
                                  p-1 md:p-4  flex items-center  justify-center">
                       {texto}
                    </p>
        </div>
        </>
    )
}
export default Estrategia