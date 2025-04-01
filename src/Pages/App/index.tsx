import { useRoutes, BrowserRouter } from 'react-router-dom'
import UpdateData from "../UpdateData";
import RequestService from "../RequestService";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Doubts from "../Doubts";
import HistoryC from '../HistoryC';
import Home from "../Home";
import SignUp from "../SingUp";
import Layout from '@/Components/Layout';

const AppRoutes = () => {

  const routes = useRoutes ([
{
      element: <Layout/>,
      children: [
      {path: '/RequestService', element: <RequestService />}, //SOLICITAR SERVICIOS
      {path: '/UpdateData', element: <UpdateData /> },        //ACTUALIAR DATOS
      {path: '/HistoryC', element: <HistoryC />},             //HISTORY
      {path: '/', element: <Home />},                         //INICIO
      {path: '/Doubts', element: <Doubts />},                 //DUDAS
    ],
  }, 
      {path: '/*', element: <NotFound />},                    //NO SE ENCUENTRA LA PAGINA 
      {path: '/Signin', element: <SignIn />},                 //SESION
      {path: '/SignUp', element: <SignUp />},                 //REGISTRAR

])
     

  return routes
};

const App = () =>{

  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
