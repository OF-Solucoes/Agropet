import pets from '../assets/petsfooter.png'
import insta from '../assets/insta.png'
import zap from '../assets/zap.png'
import email from '../assets/email.png'

const Rodape = () => {

    return (
        <>
         <div className='flex flex-col sm:flex-row items-center justify-center bg-img_bg_footer'>
                <div className='flex m-3'>
                    <img className="logo sm:mr-10 sm:pr-10" src={pets} alt="Cão e gato"/>  
                </div> 
                <div className='flex flex-col items-center justify-center'>
                    <div>
                        <p  className='font-hanken-grotesk m-2 text-white text-5xl outline-black'>
                        FRETE GRÁTIS  
                        </p>
                    </div>
                    <div>
                        <p className='font-hanken-grotesk text-white text-center text-3xl bg-azulfooter'>
                         Produtos com até 50% de desconto 
                        </p>
                    </div>
                </div> 
                <div className='flex flex-col pl-7 ml-5'>
                    <div className='flex items-left justify-left'>        
                        <p onClick={() =>  window.open("https://www.instagram.com/agropet_conceicao/", "_black")} 
                        className='p-1 text-marron cursor-pointer hover:scale-110  hover:text-primary-focus duration-300'>
                            Siga-nos no Instagram
                            </p>
                    </div>
                    <div className='flex items-left justify-left'>        
                        <p onClick={() =>  window.open("https://www.google.com.br/maps/dir//Av.+F%C3%A9lix+Mendon%C3%A7a,+16+-+Nossa+Sra.+da+Concei%C3%A7%C3%A3o,+Itabuna+-+BA,+45605-332/@-14.7899401,-39.3514814,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x739aa67f8d0d8b7:0xd7f62c54971f5bdd!2m2!1d-39.2690796!2d-14.7899547?entry=ttu", "_black")} 
                        className='p-1 text-marron cursor-pointer hover:scale-110  hover:text-primary-focus duration-300'>
                            Como chegar
                            </p>
                    </div>
                        <div className='flex items-left justify-left'>         
                            <p className='text-marron '>
                            Telefone: (73) 99142-6666
                            </p>
                        </div>

                    {/* <div className=' flex items-left justify-left'>
                        <img className='isnta' src={email} alt='email'/>
                        <p className='p-1 text-white'>contado@aliads.com.br</p>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Rodape