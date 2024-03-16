import React from 'react';


const InputCadastro =({ id, label, register, error, ...restoPropiedades }) => {


    return(
        <div>
            {label? <label htmlFor={id}>{label}</label>:null}
            <br/>
            <input
            id={id}
            {...register}
            {...restoPropiedades }
            />
            {error ? <p style={{color:"red"}}>{error}</p>: null }
        </div>

    )
}

export default InputCadastro
