import foguete from '../assets/foguete.png'
import trafegopago from '../assets/trafegopago.png'
import casal from '../assets/casal.png'
import { Button } from 'react-bootstrap'
import { useContext, useRef, useState } from 'react'
import FormPipefy from '../components/formPipefy'
import BotaoAcao from '../components/botaoAcao'
import { BotaoContext, useScroll } from '../providers/BotaoContext'

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
                                    <h3 className="text-primary-blue
                                            text-2xl 
                                            font-bold text-justify
                                            p-1 md:p-4
                                           
                                            ">Pronto para levar o seu negócio ao próximo nível? </h3>
                                               
                                   <h3 className="text-primary-orange
                                            text-3xl 
                                            font-bold text-justify
                                            p-1 md:pt-4 md:ml-12
                                           
                                            ">Comece agora! </h3>          
                             </div>                

                    </div>    

                    <div className=" pt-5 sm:pl-12 sm:ml-12 duration-1000 max-w-[408px] ml-4 hidden sm:block">
                                <img src={foguete} alt='logo' />
                     </div >          
            </div  > 

            {showModal?
            <h2 ref={formRef} className="text-primary-blue text-2xl font-bold text-center p-2 md:p-4">
            Por favor, preencha o formulário e nossa equipe entrará em contato o mais breve possível!
            </h2> 
            :
            <h2 ref={formRef} className="text-primary-blue text-2xl font-bold text-center p-2 md:p-4">
               Clique no botão abaixo e ganhe o 1º mês gratis com nossos especialistas!
               </h2> 
            }
   
 
    <BotaoAcao texto= {showModal ? 'Fechar formulário': 'Quero meu 1º mês gratis'}/>
                                <div>
      < FormPipefy />
    </div>

                                <div className="flex flex-col sm:flex-row items-center justify-center ">
           
            <div className=" pt-5 duration-1000 max-w-[408px] ml-4 hidden sm:block">
                <img src={trafegopago} alt='logo' />
            </div> 
            <div className="max-w-[408px]">
            <h2 className="text-primary-orange
                               text-2xl 
                               font-bold text-center
                               p-2 md:p-4 
                               
                               ">Descubra como a ALI pode impulsionar o sucesso do seu negócio.</h2>  
            </div>
            
       </div >
      
                                 
    </section>
 )
}

export default Promocao