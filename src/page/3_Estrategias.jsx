import React from 'react';
import Estrategia from '../components/estrategia';
import analise from '../assets/analise.jpeg'
import estrategia from '../assets/estrategia.jpeg'
import otimizacao from '../assets/otimizacao.jpeg'
import relatorio from '../assets/relatorio.jpeg'
import escala from '../assets/escala.jpeg'
import suporte from '../assets/suporte.jpeg'
import racao from '../assets/racao.png'
import ControlledCarousel from '../components/carrocell';


const Estrategias = () => {
    

    return(
        <>
    <section className='flex flex-col sm:flex-row items-center justify-center'> 
    <div className='col sm:col-6'  >
        <img src={racao} alt="ração"  className='
        rounded-3xl'/>
    </div>
    <div  className='col sm:col-6' >
    <ControlledCarousel/>
    
    </div>
       
    </section >  
   
    </>
    )
}

export default Estrategias