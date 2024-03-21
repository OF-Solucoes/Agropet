import logo from '../assets/logo.png'
import insta from '../assets/insta.png'
import zap from '../assets/zap.png'
import email from '../assets/email.png'

const Rodape = () => {

    return (
        <>
         <div className='flex flex-col p-5 sm:flex-row items-center justify-center bg-marron'>
                <div className='flex'>
                    <img className="logo" src={logo} alt="Logo da empresa"/>  
                </div> 
                <div className='flex flex-col pl-7 ml-5'>
                    <div className='flex items-left justify-left'>
                        <img className='isnta' src={insta} alt='instagram'/>
                        <p onClick={() =>  window.open("https://www.instagram.com/alilocalads/", "_black")} className='p-1 text-white cursor-pointer hover:scale-110  hover:text-primary-focus duration-300'>
                            alilocalads
                            </p>
                    </div>
                    <div className='flex items-left justify-left'>
                        <img className='isnta' src={zap} alt='whatssap'/>
                        <p onClick={() =>  window.open("http://wa.me/5573981198153", "_black")} className='p-1 text-white cursor-pointer hover:scale-110  hover:text-primary-focus duration-300'>
                            (73) 98119-8153
                        </p>
                    </div>
                    <div className=' flex items-left justify-left'>
                        <img className='isnta' src={email} alt='email'/>
                        <p className='p-1 text-white'>contado@aliads.com.br</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rodape