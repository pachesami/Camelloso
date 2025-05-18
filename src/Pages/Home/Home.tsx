import Slinder from "@/Components/Slinder";
import Carrusel from "@/Components/Carrusel/Carrusel";
import StepCard from "../../Components/StepCard";
import desempleo from "../../../images/desempleo.jpeg";
import villavicencio from "../../../images/villavo.jpeg";
import Letras from "../../../images/letras.png";
import { SiGooglemaps } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaAddressBook, FaUserTie, FaBullhorn, FaCheck } from 'react-icons/fa';
import Navbar from "@/Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      <>
        <Navbar variant="minimal" />
        <div className="w-full min-h-screen c home-bg relative overflow-hidden">
          {/* Imagen decorativa fija en la esquina derecha */}
          <Link to="/Login">
          <img 
            src={Letras} 
            alt="Decoración Letras" 
            className="hidden md:block fixed top-130 right-0 h-40 w-auto opacity-60 z-50 select-none cursor-pointer"
            style={{ pointerEvents: "auto" }}
          />
        </Link>
          {/* Carrusel ocupa todo el ancho */}
          <div className="w-full bg-primary">
            <Carrusel />
          </div>
        
          {/* Sección: ¿Cómo solicitar un servicio? */}
          <div>
            <h1 className="text-4xl font-bold text-center text-primary mt-4 mb-2">
              ¿Cómo solicitar un servicio?
            </h1>
            <p className="text-lg text-center text-secondary mt-2 mb-6">
              ¡Aquí tienes el paso a paso detallado para que puedas solicitar tu servicio fácilmente!
            </p>
          </div>

          <div className="py-1 w-full  flex justify-center">
            <div className="space-y-4w-full max-w-5xl">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.2, duration: 0.5, type: "spring" }}
                >
                  <StepCard
                    index={index}
                    {...step}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sección: Cambiar datos personales */}
          <div className="relative flex-col items-center justify-center min-h-screen bg-primary-light py-5 bg-primary overflow-hidden">
  {/* Curva decorativa superior */}
  <svg
    className="absolute top-0 left-0 w-full"
    viewBox="0 0 1440 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ zIndex: 1 }}
    preserveAspectRatio="none"
  >
    <path
      d="M0,80 C480,160 960,0 1440,80 L1440,0 L0,0 Z"
      fill="#f7f0ea"
    />
  </svg>
  <div className="relative z-10">
    <h1 className="text-4xl font-bold text-center text-primary mt-4 mb-2 text-black">
      ¿Interesado en cambiar tus datos personales?
    </h1>
    <p className="text-lg text-center text-surface mt-2 mb-6 text-secondary">
      ¡Aquí tienes el paso a paso detallado para que cambies tus datos personales!
    </p>
  </div>
  {/* Curva decorativa inferior */}
  <svg
    className="absolute bottom-0 left-0 w-full rotate-180"
    viewBox="0 0 1440 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ zIndex: 1 }}
    preserveAspectRatio="none"
  >
    <path
      d="M0,80 C480,160 960,0 1440,80 L1440,0 L0,0 Z"
      fill="#f7f0ea"
    />
  </svg>
</div>

          {/* Sección: Noticias */}
          <div className="flex-col items-center justify-center min-h-screen bg-surface py-5">
            <h1 className="text-4xl font-bold text-center text-primary mt-4 mb-6">
              ¡Noticias!
            </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 w-full">
              {[ // Agrupa tus noticias en un array para mapearlas
                {
                  img: desempleo,
                  alt: "Gráfico de tasa de desempleo",
                  title: "Bajo tasa de desempleo de desocupación en Villavicencio, pero ...",
                  link: "https://periodicodelmeta.com/bajo-tasa-de-desocupacion-en-villavicencio-pero/",
                  desc: "La alta tasa de informalidad y la brecha de desempleo que afecta más a las mujeres son fenómenos que deben atacarse para que no solo disminuya el desempleo en Villavicencio, sino que ese trabajo mejore la calidad de vida de las personas."
                },
                {
                  img: villavicencio,
                  alt: "Gráfico de tasa de desempleo en Medellín, Bucaramanga y Villavicencio",
                  title: "Medellín, Bucaramanga y Villavicencio las que registraron menor tasa de desempleo",
                  link: "https://www.larepublica.co/economia/medellin-bucaramanga-y-villavicencio-las-que-registraron-menor-tasa-de-desempleo-4051283",
                  desc: "De acuerdo con el reporte del Departamento Administrativo Nacional de Estadísticas, Dane, las grandes ciudades que mostraron una menor tasa de desocupación fueron: Medellín (8,4%), Bucaramanga (8,7%), Villavicencio (9,5%)."
                },
                {
                  img: desempleo,
                  alt: "Gráfico de tasa de desempleo",
                  title: "Villavicencio se mantiene entre las ciudades con menor desempleo en Colombia",
                  link: "https://www.viveelmeta.com/villavicencio-se-mantiene-entre-las-ciudades-con-menor-desempleo-en-colombia-45438/",
                  desc: "Según el Departamento Administrativo Nacional de Estadística (DANE), Villavicencio registró en febrero una tasa de desempleo del 8,8 %, ubicándose entre las más bajas, junto a Medellín (7,3 %) y Neiva (9,1 %)."
                }
              ].map((noticia, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.2, duration: 0.6, type: "spring" }}
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 8px 32px 0 rgba(60,60,180,0.18)",
                    y: -8,
                  }}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center text-xl font-semibold border-2 border-primary transition-all duration-300 flex flex-col gap-3"
                >
                  <img
                    src={noticia.img}
                    alt={noticia.alt}
                    className="w-full h-44 object-cover rounded-md mb-2"
                  />
                  <h1 className="text-black text-lg font-bold text-left underline capitalize mb-1">
                    <a
                      href={noticia.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {noticia.title}
                    </a>
                  </h1>
                  <p className="line-clamp-6 text-justify text-secondary text-base font-normal">
                    {noticia.desc}
                  </p>
                </motion.div>
              ))}
              </div>
          </div>

          <div className="flex-col items-center justify-center min-h-screen bg-primary-light py-5">
          </div>
          <Slinder />
        </div>
      </>
    );
  };

export default Home;
