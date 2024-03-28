
import Promessas from './1_Promessa';
import Beneficios from './2_Beneficios';
import Estrategias from './3_Estrategias';
import Promocao from './8_Promocao';
import Rodape from './9_Rodape'
import logo from '../assets/agropet.png'


import { FloatingWhatsApp } from 'react-floating-whatsapp'

function Home() {
  return (
  <>
      <header>
          <Promessas/>
      </header>
      <body className="w-full h-full bg-img_bg_fundo2 bg-no-repeat bg-center bg-cover">
            <Beneficios/>
            <Estrategias/>
            <Promocao/>
            <Rodape/>
            <FloatingWhatsApp
        phoneNumber="5573991426666"
        accountName="Agropet"
        allowEsc
        allowClickAway
        notification
        notificationSound
        statusMessage = "Normalmente respondemos dentro de 20 minutos"
        chatMessage= "Olá!🤝 Como podemos ajudar?"
        avatar={logo}
      />
       </body>
       <futter>
       </futter>
     
   
  </>
  );
}

export default Home;
