import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import InputCadastro from './inputForm';
import  presente  from '../assets/presente.png'
import { useContext, useState } from 'react';
import CupomBrservice from './cupom';
import api from '../service/api';
import { LeadContext } from '../providers/leadContext';
import { toast } from 'react-toastify';
import logo from '../assets/agropet.png'



const schema = yup.object({
 
  nome: yup.string().required("Nome obrigatório."),
  telefone: yup.string().required("Telefone obrigatório.").matches(
    /^(\(?\d{2}\)?\s?)?(\d{4,5}-?\d{4}|\(?\d{2}\)?\s?9\d{4}-?\d{4})$/,
    'Formato inválido de número de telefone'
  ),
  email: yup.string().email("Email inválido."),
})

const Formulario = () => {

  const {register, handleSubmit, watch, formState: { errors }, reset} = useForm({
    resolver:yupResolver(schema)
  });
   
  const [cupom, setCupom] = useState(false)
  const [nome, setNome] = useState("")
  const {createLead, retornoUmLead } = useContext(LeadContext) 

  const handleRegister = async ({nome,telefone, email}) => {
    const lead = {
      nome,
      tel:telefone,
      email:"não usado",
      envCliente: false,
      observ:`Sem comentários`,
    }
    
    if(await retornoUmLead(telefone)){
    toast.error(
      "Ops! Parece que você já resgatou seu cupom e está participando da nossa promoção. Se precisar de ajuda ou tiver dúvidas, entre em contato conosco."
    )
    } else {
    createLead(2, lead)
    setNome(nome) 
    setCupom(true)
    }
  }

    return(
      <>
      {cupom?
      <CupomBrservice nome={nome}/>
      :
      <form onSubmit={handleSubmit(handleRegister)} className='"transition ease-in-out delay-150
      bg-white bg-opacity-80 
      flex justify-center items-center flex-col
      text-primary-black
      text-1xl 
      rounded-[5%] 
      p-4 md:p-1 mb-5
      md: w-[300px]
      font-bold text-cente
      '>
        <h5 className="font-hanken-grotesk mr-4 ml-4 text-marron text-1xl font-bold text-center  
            animate-slide-down-05">
                    Registre-se aqui para receber nossas promoções!
                    </h5>
    
      <fieldset title='trdtyd'> 
      <div className="mb-3">
             <InputCadastro
             label="Nome"
             id="Nome"
             type="text" 
             placeholder='Seu nome' 
             defaultValue="" 
             register= {register("nome")} 
             className="form-control"
             aria-describedby="emailHelp"
             error={errors.nome?.message}
             />
         </div>
         <div className="mb-3">
             <InputCadastro
             label="Telefone"
             id="telefone"
             type="text" 
             placeholder='(DD)9XXXX-XXXX' 
             defaultValue="" 
             register= {register("telefone")} 
             className="form-control"
             aria-describedby="emailHelp"
             error={errors.telefone?.message}
             />
         </div>
         <div className="mb-3">
             <InputCadastro
             label="Email"
             id="email"
             type="text" 
             placeholder='exemplo@exemplo.com' 
             defaultValue="" 
             register= {register("email")} 
             className="form-control"
             aria-describedby="emailHelp"
             error={errors.email?.message}
             />
         </div>
      </fieldset>
       <br/>
       
       <button onClick={() =>   handleRegister} 
                                        className='
                                         text-white 
                                        rounded-full
                                        md: w-[230px]
                                        md: h-[40px]
                                        ml-8 m-4
                                        border-2 
                                        shadow-md
                                        hover:-translate-y-1
                                        hover:scale-110
                                        hover:bg-primary-focus duration-300'
                                        style={{ 
                                          background: 'linear-gradient(to right, #FF8C00, #FFA500)'
                                          }}>
                                        
                    Enviar
                </button>
     </form>
    }
     </>

    )
}
export default Formulario