import foguetinho from '../assets/foguetinho.png'


const Beneficio = ({titulo, texto}) => {
    return(
    <div className="flex flex-col sm:flex-row  items-center justify-center">
        <img src={foguetinho} alt='logo' />
        <h3 className="text-primary-blue text-1xl font-bold text-justify p-1 md:pt-4">
           <strong className="text-azul-escuro">{titulo}</strong> {texto}
        </h3>
    </div>
    )
}

export default Beneficio