import { useState } from 'react';
import  presente  from '../assets/obrigado.png'


import { format, addDays } from 'date-fns';


const CupomAgropet = ({nome}) => {

    const hoje = new Date();

    const dataMais15Dias = addDays(hoje, 15);

    const data = format(dataMais15Dias, 'dd/MM/yyyy');

    
    return(
        <>
          
            <div className= "border-dashed w-80 m-5 border-4 bg-white border-green-900 ">
                <img src={presente} alt='presente' className='flex items-center justify-center pl-20 ml-5 mt-[-80px]'/>
               <h2 className="flex items-center justify-center text-2xl text-red-600">
                   <strong> OBRIGADO </strong>  
                </h2> 
                <h2 className="flex items-center justify-center text-center text-1xl text-azul-escuro">
                    <strong> {nome} </strong> 
                </h2> 
                <p className='text-center pt-4 ml-10 mr-10 text-gray-600'>
                Em breve entraremos em contato. 
                </p>
               
                <button onClick={() =>  window.open("http://wa.me/5573991426666", "_black")} 
                                        className='bg-green-500  text-white 
                                        rounded-full
                                        md: w-[230px]
                                        md: h-[40px]
                                         mx-5 my-3  
                                        border-2 border-green-700
                                        shadow-md
                                        hover:-translate-y-1
                                        hover:scale-110
                                        hover:bg-green-600 duration-300'>
                    Falar com o vendedor agora
                </button>
            </div>
       
        </>
    )
}

export default CupomAgropet