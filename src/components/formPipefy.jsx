import { BotaoContext } from "../providers/BotaoContext";
import { useContext } from "react";

const FormPipefy = () => {
   
  const { showModal } = useContext(BotaoContext)

    return(
        <>
      {/* {showModal && (
        <div>
          <iframe
            width="560"
            height="580"
            src="https://app.pipefy.com/public/form/keohADA-?embedded=true"
            frameBorder="0"
          ></iframe>
        </div>
      )} */}
       {showModal && (
        <div className="w-full">
          {/* 
            As classes md:w-2/3, lg:w-1/2 e xl:w-1/3 especificam que o elemento 
            ocupará 2/3 da largura em telas médias (md), 1/2 da largura em telas grandes (lg) 
            e 1/3 da largura em telas extra grandes (xl). 
            Em telas pequenas (menores que md), o elemento ocupará a largura total (w-full).
          */}
          
    

          <iframe
            className="w-full h-96"
            src='https://app.pipefy.com/public/form/goQwV0Ri?embedded=true'
            frameBorder="0"
          ></iframe>
        </div>
      )}
        </>
    )
}
export default FormPipefy