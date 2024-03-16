import React from 'react';
import Estrategia from '../components/estrategia';
import analise from '../assets/analise.jpeg'
import estrategia from '../assets/estrategia.jpeg'
import otimizacao from '../assets/otimizacao.jpeg'
import relatorio from '../assets/relatorio.jpeg'
import escala from '../assets/escala.jpeg'
import suporte from '../assets/suporte.jpeg'

const Estrategias = () => {
  

    return(
        <>
    <section className=' bg-img_bg_fundotec pb-12 rounded-3xl xl:rounded-full '> 
    <div>
         <h2 className="text-white text-4xl font-bold text-center p-5 md:pt-4">
                Como Alcançamos o Sucesso Online:
        </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center">
                            
                  <Estrategia 
                  figura={analise} 
                  altern='análise' 
                  titulo='Análise' 
                  texto='Iniciamos com uma análise do seu negócio.'
                  />             
                
                <Estrategia 
                  figura={estrategia} 
                  altern='Estratégia Personalizada' 
                  titulo='Estratégia Personalizada' 
                  texto='Definimos a melhor plataforma de anúncios para seu negócio.'
                  />

                <Estrategia 
                  figura={otimizacao} 
                  altern='Otimização' 
                  titulo='Otimização' 
                  texto='Maximizamos o retorno sobre o investimento e buscamos melhores resultados.'
                  />                     
        
            </div>
   
            
            <div className="flex flex-col sm:flex-row items-center justify-center">
                            
                  <Estrategia 
                  figura={relatorio} 
                  altern='Relatórios' 
                  titulo='Relatórios' 
                  texto='Fornecemos insights valiosos para orientar suas próximas ações de marketing.'
                  /> 

                <Estrategia 
                  figura={escala} 
                  altern='Plano de Escala' 
                  titulo='Plano de Escala' 
                  texto='Projetamos o crescimento consistente e sustentável do seu negócio.'
                  />

                <Estrategia 
                  figura={suporte} 
                  altern='Suporte ao Cliente' 
                  titulo='Suporte ao Cliente' 
                  texto='Oferecemos suporte contínuo para responder suas perguntas e atender suas preocupações.'
                  />
                    
                    
            </div>
       </div>
    </section >  
    </>
    )
}

export default Estrategias