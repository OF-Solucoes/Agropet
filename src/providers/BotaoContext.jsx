import { createContext, useContext, useRef, useState } from "react";

export const BotaoContext = createContext({})

export const BotaoProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false)

    const formRef = useRef(null);

    const rolarParaFormulario = () => {
        formRef.current.scrollIntoView({ behavior: 'smooth' });
      };
    
    return (
        <BotaoContext.Provider value={{
            showModal,
            setShowModal,
            formRef,
            rolarParaFormulario
        }}>
            {children}
        </BotaoContext.Provider>
    ) 
}

export const useScroll = () => {
    return useContext(BotaoContext);
  };