import React from 'react';

import racao from '../assets/racao.png'
import saude from '../assets/saude.jpeg'
import acessorios from '../assets/acessorios.jpeg'
import CarouselRacao from '../components/carrosselracao';


const Estrategias = () => {
    

    return(
        <>
    <section className='flex flex-col sm:flex-row items-center justify-center'> 
    <div className='col sm:col-6'  >
        <img src={racao} alt="ração"  className='
        rounded-1xl'/>
    </div>
    <div  className='col sm:col-6' >
    <CarouselRacao/>
    </div>
       
    </section >  
    <section className='flex flex-col-reverse sm:flex-row items-center justify-center'> 
    
    <div  className='col sm:col-6' >
    <CarouselRacao/>
    </div>

    <div className='col sm:col-6'  >
        <img src={saude} alt="ração"  className='
        rounded-1xl'/>
    </div>
    </section >  
    <section className='flex flex-col sm:flex-row items-center justify-center'> 
    <div className='col sm:col-6'  >
        <img src={acessorios} alt="ração"  className='
        rounded-1xl'/>
    </div>
    <div  className='col sm:col-6' >
    <CarouselRacao/>
    </div>
       
    </section > 
   
    </>
    )
}

export default Estrategias