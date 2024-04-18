import { createContext, useState } from "react";
import api from "../service/api";
import { toast } from "react-toastify";


export const LeadContext = createContext({})

export const LeadProvider = ({children})=>{

    const createLead = async (idCampanha, formData) => {
       
        try {
            const { data } = await api.post(
                `lead/${idCampanha}`,
                {...formData},
            )
            
            
            return data
            
        } catch (error) {
            toast.error("Algo deu errado, por favor, tente novamente!")
        }
    }

    const retornoUmLead = async (idTel) => {
        
        try {
            const  { data }  = await api.get(
                `lead/${idTel}`,
               
                )
               
                return data
    } catch (error) {
            toast.error("Algo deu errado, por favor, tente mais tarde!") 
        }
}

    return (
        <LeadContext.Provider value={{
            createLead,
            retornoUmLead,
        }}>
        {children}
        </LeadContext.Provider>
    )
}