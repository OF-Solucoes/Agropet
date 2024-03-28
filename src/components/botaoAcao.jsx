
import { BotaoContext } from "../providers/BotaoContext";
import { useContext } from "react";

const BotaoAcao = ({texto}) => {
    const { showModal, setShowModal, rolarParaFormulario } = useContext(BotaoContext)

    const mostrarFormulario = () => {
        setShowModal(!showModal)
        rolarParaFormulario()
      };

    return(
        <>
         <div className="flex items-center justify-center md:pt-2 mt-0 ">
          <button onClick={mostrarFormulario} className='
                bg-primary-orange 
                text-white 
                rounded-full
                md: w-[300px]
                md: h-[50px]
                m-3
                border-2 border-white
                shadow-md
                hover:-translate-y-1
                hover:scale-110
                hover:bg-primary-focus duration-300
                ' 
                type="submit"
                >                   
                 {texto}    
            </button>
          </div> 
        </>
    )
}
export default BotaoAcao