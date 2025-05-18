import { useRoutes, BrowserRouter } from 'react-router-dom'
import UpdateData from "../UpdateData";
import RequestService from "../RequestService/RequestService";
import NotFound from "../NotFound";
import Login from "../Login/Login";
import Doubts from "../Doubts";
import HistoryC from '../HistoryC';
import Home from "../Home/Home";
import Layout from '@/Components/Layout';
import HomeSingup from '../HomeSingup/HomeSingup';

const AppRoutes = () => {

  const routes = useRoutes ([
{
      element: <Layout/>,
      children: [
      {path: '/RequestService', element: <RequestService />}, //SOLICITAR SERVICIOS
      {path: '/UpdateData', element: <UpdateData /> },        //ACTUALIAR DATOS
      {path: '/HistoryC', element: <HistoryC />},             //HISTORY
      {path: '/HomeSingup', element: <HomeSingup />},                         //INICIO CUANDO SE REGISTRA
      {path: '/', element: <Home/>},                         //INICIO 
      {path: '/Doubts', element: <Doubts />},                 //DUDAS
    ],
  }, 
      {path: '/*', element: <NotFound />},                    //NO SE ENCUENTRA LA PAGINA 
      {path: '/Login', element: <Login />},                 //SESION

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
