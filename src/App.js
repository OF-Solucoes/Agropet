import './App.css';
import { BotaoProvider } from './providers/BotaoContext';
import Rotas from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { LeadProvider } from './providers/leadContext';

function App() {
  return (
  <>
    <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
          <LeadProvider>
            <BotaoProvider>
              <Rotas/>
            </BotaoProvider>
          </LeadProvider>
  </>
  );
}

export default App;
