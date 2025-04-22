import Slinder from "@/Components/Slinder";
import StepCard from "../../Components/StepCard";
import desempleo from "../../../images/desempleo.jpeg";
import villavicencio from "../../../images/villavo.jpeg";
import { SiGooglemaps } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaAddressBook, FaUserTie, FaBullhorn, FaCheck } from 'react-icons/fa';

const steps = [
    { number: 1, icon: <FaAddressBook />, title: 'Acceder a la interfaz de solicitud', description: 'Para comenzar, ingresa a la interfaz de solicitud de servicio en nuestra plataforma.', color: '#FFD700' },
    { number: 2, icon: <FaUserTie />, title: 'Rellenar el formulario de solicitud', description: 'Deberás completar el formulario con la dirección exacta del domicilio donde deseas que llegue el trabajador. Luego, selecciona el tipo de labor que necesitas y proporciona una breve descripción del servicio que requieres. Finalmente, elige el método de pago preferido, entre efectivo o transferencia bancaria.', color: '#6495ED' },
    { number: 3, icon: <SiGooglemaps />, title: 'Verificar la dirección en el mapa', description: 'Encontrarás un mapa interactivo. Utiliza este mapa para asegurarte de que la dirección que ingresaste es correcta.', color: '#32CD32' },
    { number: 4, icon: <FaBullhorn />, title: 'Solicitar el servicio', description: 'Una vez que hayas completado todos los campos del formulario y hayas verificado la dirección, haz clic en el botón que dice "Solicitar servicio". Este será el paso final para enviar tu solicitud.', color: '#00CED1' },
    { number: 5, icon: <FaCheck />, title: 'Esperar la confirmación del trabajador', description: 'Después de enviar tu solicitud, tu pedido quedará pendiente hasta que un trabajador lo acepte. En cuanto un trabajador acepte tu solicitud, recibirás una notificación y podrás empezar a comunicarte con él.', color: '#1E90FF' },
    { number: 6, icon: <FaPhoneVolume />, title: 'Comunicación con el trabajador', description: 'Una vez que el trabajador acepte el servicio, podrás iniciar un chat con él dentro de la plataforma. Aquí podrás coordinar todos los detalles relacionados con el trabajo: horarios, materiales, preguntas adicionales, entre otros.', color: '#1E90FF' },
];

const Home = () => {
    return (
      <div className="flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 via-blue-100 to-sky-100">
        
        <Slinder />
  
        {/* Sección: ¿Cómo solicitar un servicio? */}
        <div>
          <h1 className="text-4xl font-bold text-center text-black mt-4 mb-2">
            ¿Cómo solicitar un servicio?
          </h1>
          <p className="text-lg text-center text-gray-600 mt-2 mb-6">
            ¡Aquí tienes el paso a paso detallado para que puedas solicitar tu servicio fácilmente!
          </p>
        </div>
  
        <div className="px-10 py-6 max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <StepCard key={step.number} index={index} {...step} />
          ))}
        </div>
  
        {/* Sección: Cambiar datos personales */}
        <div className="flex-col items-center justify-center min-h-screen bg-gradient-to-r from-sky-300 to-sky-500 py-5">
          <h1 className="text-4xl font-bold text-center text-black mt-4 mb-2">
            ¿Interesado en cambiar tus datos personales?
          </h1>
          <p className="text-lg text-center text-white mt-2 mb-6">
            ¡Aquí tienes el paso a paso detallado para que cambies tus datos personales!
          </p>
        </div>
  
        {/* Sección: Noticias */}
        <div className="flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 via-blue-100 to-sky-100 py-5">
          <h1 className="text-4xl font-bold text-center text-black mt-4 mb-6">
            ¡Noticias!
          </h1>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">
            {/* Noticia 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md text-center text-xl font-semibold transition-transform duration-300 transform hover:scale-105">
              <img src={desempleo} alt="Gráfico de tasa de desempleo" />
              <h1 className="font-serif subpixel-antialiased text-2xl font-bold text-blue-400 text-left underline capitalize">
                <a
                  href="https://periodicodelmeta.com/bajo-tasa-de-desocupacion-en-villavicencio-pero/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bajo tasa de desempleo de desocupación en Villavicencio, pero ...
                </a>
              </h1>
              <p className="italic line-clamp-8 text-justify">
                La alta tasa de informalidad y la brecha de desempleo que afecta más a las mujeres son fenómenos que deben atacarse para que no solo disminuya el desempleo en Villavicencio, sino que ese trabajo mejore la calidad de vida de las personas.
              </p>
            </div>
  
            {/* Noticia 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md text-center text-xl font-semibold transition-transform duration-300 transform hover:scale-105">
              <img src={villavicencio} alt="Gráfico de tasa de desempleo en Medellín, Bucaramanga y Villavicencio" />
              <h1 className="font-serif subpixel-antialiased text-2xl font-bold text-blue-400 text-left underline capitalize">
                <a
                  href="https://www.larepublica.co/economia/medellin-bucaramanga-y-villavicencio-las-que-registraron-menor-tasa-de-desempleo-4051283"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medellín, Bucaramanga y Villavicencio las que registraron menor tasa de desempleo
                </a>
              </h1>
              <p className="italic line-clamp-8 text-justify">
                De acuerdo con el reporte del Departamento Administrativo Nacional de Estadísticas, Dane, las grandes ciudades que mostraron una menor tasa de desocupación fueron: Medellín (8,4%), Bucaramanga (8,7%), Villavicencio (9,5%).
              </p>
            </div>
  
            {/* Noticia 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md text-center text-xl font-semibold transition-transform duration-300 transform hover:scale-105 ">
              <img src={desempleo} alt="Gráfico de tasa de desempleo" />
              <h1 className="font-serif subpixel-antialiased text-2xl font-bold text-blue-400 text-left underline capitalize">
                <a
                  href="https://www.viveelmeta.com/villavicencio-se-mantiene-entre-las-ciudades-con-menor-desempleo-en-colombia-45438/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Villavicencio se mantiene entre las ciudades con menor desempleo en Colombia
                </a>
              </h1>
              <p className="italic line-clamp-8 text-justify">
                Según el Departamento Administrativo Nacional de Estadística (DANE), Villavicencio registró en febrero una tasa de desempleo del 8,8 %, ubicándose entre las más bajas, junto a Medellín (7,3 %) y Neiva (9,1 %).
              </p>
            </div>
          </div>
        </div>
  
        {/* Sección vacía (¿la quieres eliminar o la vas a usar después?) */}
        <div className="flex-col items-center justify-center min-h-screen bg-gradient-to-r from-sky-300 to-sky-500 py-5">

        </div>
      </div>
    );
  };
  
  export default Home;
  