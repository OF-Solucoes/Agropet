import { useContext, useRef, useState } from 'react'
// import BotaoAcao from '../components/botaoAcao'
import { BotaoContext, useScroll } from '../providers/BotaoContext'
// import promo1 from '../assets/Promo1.png'
// import promo2 from '../assets/Promo2.png'
// import promo3 from '../assets/Promo3.png'
// import promo4 from '../assets/Promo4.png'
// import promo5 from '../assets/Promo5.png'
// import Formulario from '../components/fom'


const Promocao = ( ) => {

      const { showModal } = useContext(BotaoContext)

      const { formRef } = useScroll();
   

 return(
    <section className='flex flex-col 
                        items-center 
                        justify-center '    >
            
            <div className="flex flex-col 
                            sm:flex-row 
                            items-center 
                            justify-center 
                           ">
                 
        
                    <div className="max-w-[408px]  rounded-md ">
                           
                    </div> 

                     <div className="max-w-[408px]  rounded-md ">
                           
                             <div className="flex flex-col sm:flex-col items-center justify-center">
                                    <h3 className="text-primary-orange
                                            text-3xl 
                                            font-bold text-justify
                                            p-1 md:p-4
                                           
                                            ">Descubra agora mesmo nossas ofertas irresistíveis! </h3>
                                 
                    {/* <div className="flex flex-col xl:flex-row items-center justify-center
                                    pt-5 sm:p-8 sm:m-2 max-w-[300px] ml-4 ">
                              <img className='rounded-full  shadow-2x  bg-marron' src={promo1} alt='logo' />
                               <img className='rounded-full  shadow-2xl  bg-marron' src={promo2} alt='logo' />
                               <img className='rounded-full shadow-2xl bg-marron' src={promo3} alt='logo' />
                               <img className='rounded-full  shadow-2xl bg-marron' src={promo4} alt='logo' />
                               <img className='rounded-full shadow-2xl bg-marron' src={promo5} alt='logo' />
                               
                     </div >    */}
{/*                                                
                                   <h3 className="text-marron
                                            text-3xl 
                                            font-bold text-center
                                            p-3 md:pt-4 md:ml-12
                                           
                                            ">últimas unidades de nossas rações em promoção!  </h3>           */}
                             </div>                

                    </div>    
       
            </div  > 
            {/* <h3 ref={formRef} className="text-marron text-3xl font-bold text-center p-5 md:p-4">
            últimas unidades de nossas rações em promoção!
               </h3>  */}

            {/* <h2 ref={formRef} className="text-primary-orange text-2xl font-bold text-center p-2 md:p-4">
               Peça agora e ganhe Delivery Grátis!!
               </h2>  */}
             
      
   
 
                                <div>

    </div>
    <button id='vendedor' onClick={() =>  window.open("http://wa.me/557391426666", "_black")} 
                                        className=' bg-primary-orange   text-white 
                                        rounded-full
                                        md: w-[230px]
                                        md: h-[50px]
                                        ml-8 m-4 
                                        border-2 border-white
                                        shadow-md
                                        hover:-translate-y-1
                                        hover:scale-110
                                        hover:bg-primary-focus duration-300'>
                    Falar com o vendedor
                </button>                                            
      
                                 
    </section>
 )
}

export default Promocao