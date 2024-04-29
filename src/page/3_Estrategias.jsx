import React, { useEffect } from 'react';
import racao from '../assets/racao0.png'
import saude from '../assets/saude2.png'
import acessorios from '../assets/acessorios2.png'
import CarouselRacao from '../components/carrosselracao';
import CarouselSaude from '../components/carrosselsaude';
import CarouselAcessorios from '../components/carrosselacessorios';


const Estrategias = () => {
     
    return(
        <>
    <section className='flex flex-col sm:flex-row items-center justify-center'> 
    <div className='col sm:col-6'  >
        <img src={racao} alt="ração"  className='
        rounded-3xl'/>
    </div>
    <div  className='col sm:col-6' >
    <CarouselRacao/>
    </div>
       
    </section >  
    <section className='flex flex-col-reverse sm:flex-row items-center justify-center'> 
    
    <div  className='col sm:col-6' >
    <CarouselSaude/>
    </div>

    <div className='col sm:col-6'  >
        <img src={saude} alt="ração"  className='
        rounded-3xl'/>
    </div>
    </section >  
    <section className='flex flex-col sm:flex-row items-center justify-center'> 
    <div className='col sm:col-6'  >
        <img src={acessorios} alt="ração"  className='
        rounded-3xl'/>
    </div>
    <div  className='col sm:col-6' >
    <CarouselAcessorios/>
    </div>
       
    </section > 
   
    </>
    )
}

export default Estrategias