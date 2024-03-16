import { useState } from 'react';
import  presente  from '../assets/presente.png'
import  tickt  from '../assets/tiquet.jpeg'
import BotaoAcao from './botaoAcao'
import { format, addDays } from 'date-fns';


const CupomBrservice = ({nome}) => {

    const hoje = new Date();

    const dataMais15Dias = addDays(hoje, 15);

    const data = format(dataMais15Dias, 'dd/MM/yyyy');

    
    return(
        <>
          
            <div className= "border-dashed w-80 border-4 bg-white border-green-900 ">
                <img src={presente} alt='presente' className='flex items-center justify-center pl-20 ml-5 mt-[-40px]'/>
               <h2 className="flex items-center justify-center text-2xl text-red-600">
                   <strong> PARABÉNS </strong>  
                </h2> 
                <h2 className="flex items-center justify-center text-center text-1xl text-azul-escuro">
                    <strong> {nome} </strong> 
                </h2> 
                <p className='text-center pt-4 ml-10 mr-10 text-gray-600'>
                    Você ganhou 20% de desconto na lavagem do seu carro. 
                </p>
                <p className='text-center pt-4 ml-10 mr-10 text-gray-600'>
                    Apresente seu cupom: 
                </p>
                <img src={tickt} alt='tickt' className='flex items-center justify-center pl-9'/>
            
                <p className='text-center pt-10 ml-2 mr-1'>
                    VÁLIDO ATÉ {data}.
                </p>
                <button onClick={() =>  window.open("http://wa.me/5573999911120", "_black")} 
                                        className='bg-green-500  text-white 
                                        rounded-full
                                        md: w-[230px]
                                        md: h-[40px]
                                        ml-8 m-4 
                                        border-2 border-green-700
                                        shadow-md
                                        hover:-translate-y-1
                                        hover:scale-110
                                        hover:bg-green-600 duration-300'>
                    Clique aqui e agende já!
                </button>
            </div>
       
        </>
    )
}

export default CupomBrservice