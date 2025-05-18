import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaGithub, FaLock } from "react-icons/fa";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Select from "react-select";
import trabajosNoOficina from "../../data/trabajosNoOficina";



// Convierte tu array a formato para react-select
const trabajosOptions = trabajosNoOficina.map((trabajo) => ({
  value: trabajo,
  label: trabajo,
}));

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState<"" | "cliente" | "trabajador">(
    ""
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <div className="relative w-[1050px] h-[600px] overflow-hidden rounded-lg shadow-lg border-2 border-primary">
        <div className="flex w-full h-full">
          {/* Panel Izquierdo */}
          <div
            className={`w-1/2 flex flex-col justify-center items-center p-10 border-r-2 border-primary/30 transition-colors duration-500 ${
              showSignUp ? "bg-primary text-white" : "bg-accent text-primary"
            }`}
          >
            {!showSignUp ? (
              // Formulario de Iniciar Sesión
              <form
                className="w-full max-w-xs flex flex-col gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <h2 className="text-3xl font-bold text-primary mb-4 text-center">
                  Iniciar Sesión
                </h2>
                <div className="flex justify-center gap-4 text-xl mb-2 text-primary">
                  <FaFacebook className="cursor-pointer" />
                  <FaInstagram className=" cursor-pointer" />
                  <FaGithub className=" cursor-pointer" />
                </div>
                <span className="text-sm text-secondary text-center mb-2">
                  Use su correo y contraseña
                </span>
                <div className="flex items-center border rounded px-2 py-1 bg-popover">
                  <MdEmail className="text-secondary mr-2" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent outline-none flex-1 text-primary placeholder:text-secondary"
                  />
                </div>
                <div className="flex items-center border rounded px-2 py-1 bg-popover">
                  <FaLock className="text-secondary mr-2" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="bg-transparent outline-none flex-1 text-primary placeholder:text-secondary"
                  />
                </div>
                <a
                  href="#"
                  className="text-xs text-primary hover:underline text-right"
                >
                  ¿Olvidaste tu contraseña?
                </a>
                <button className="bg-primary text-white rounded py-2 font-semibold hover:bg-primary-dark transition">
                  INICIAR SESIÓN
                </button>
              </form>
            ) : (
              // Mensaje lateral para registro
              <div className="flex flex-col justify-center items-center h-full">
                <h2 className="text-3xl font-bold mb-4 text-center">
                  ¡Bienvenido!
                </h2>
                <p className="mb-8 text-center">
                  Ingrese sus datos personales para usar todas las funciones del
                  sitio
                </p>
                <button
                  className="border border-white rounded px-8 py-2 font-semibold hover:bg-white hover:text-primary transition"
                  onClick={() => setShowSignUp(false)}
                >
                  Iniciar Sesión
                </button>
              </div>
            )}
          </div>
          {/* Panel Derecho */}
          <div
            className={`w-1/2 flex flex-col justify-center items-center p-10 transition-colors duration-500 ${
              showSignUp ? "bg-accent text-primary" : "bg-primary text-white"
            }`}
          >
            {!showSignUp ? (
              // Mensaje lateral para login
              <div className="flex flex-col justify-center items-center h-full">
                <h2 className="text-3xl font-bold mb-4 text-center">
                  ¡Hola!
                </h2>
                <p className="mb-8 text-center">
                  Regístrese con sus datos personales para usar todas las funciones
                  del sitio
                </p>
                <button
                  className="border border-white rounded px-8 py-2 font-semibold hover:bg-white hover:text-primary transition"
                  onClick={() => setShowSignUp(true)}
                >
                  Registrarse
                </button>
              </div>
            ) : (
              // Registro con selección de tipo de usuario
              <div className="w-full max-w-xs flex flex-col gap-4">
                {!tipoUsuario ? (
                  <>
                    <h2 className="text-3xl font-bold mb-4 text-center">
                      Selecciona tu tipo de usuario
                    </h2>
                    <select
                      className="border rounded px-2 py-2 bg-popover text-primary"
                      value={tipoUsuario}
                      onChange={(e) =>
                        setTipoUsuario(
                          e.target.value as "cliente" | "trabajador"
                        )
                      }
                    >
                      <option value="">Selecciona...</option>
                      <option value="cliente">Cliente</option>
                      <option value="trabajador">Trabajador</option>
                    </select>
                    <button
                      className="border border-primary rounded px-8 py-2 font-semibold hover:bg-primary hover:text-white transition mt-4"
                      onClick={() => setShowSignUp(false)}
                    >
                      Volver
                    </button>
                  </>
                ) : (
                  <form
                    className="flex flex-col gap-4"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <h2 className="text-3xl font-bold mb-2 text-center">
                      Registrarse como{" "}
                      {tipoUsuario === "cliente"
                        ? "Cliente"
                        : "Trabajador"}
                    </h2>
                    <div className="flex items-center border rounded px-2 py-1 bg-popover">
                      <IoPeopleCircleOutline className="text-secondary mr-2" />
                      <input
                        type="text"
                        placeholder="Nombre"
                        className="bg-transparent outline-none flex-1 text-primary placeholder:text-secondary"
                        required
                      />
                    </div>
                    <div className="flex items-center border rounded px-2 py-1 bg-popover">
                      <MdEmail className="text-secondary mr-2" />
                      <input
                        type="email"
                        placeholder="Correo"
                        className="bg-transparent outline-none flex-1 text-primary placeholder:text-secondary"
                        required
                      />
                    </div>
                    <div className="flex items-center border rounded px-2 py-1 bg-popover">
                      <span className="text-secondary mr-2">@</span>
                      <input
                        type="tel"
                        placeholder="Teléfono"
                        className="bg-transparent outline-none flex-1 text-primary placeholder:text-secondary"
                        required
                      />
                    </div>
                    <div className="flex items-center border rounded px-2 py-1 bg-popover">
                      <span className="text-secondary mr-2">📍</span>
                      <input
                        type="text"
                        placeholder="Dirección"
                        className="bg-transparent outline-none flex-1 text-primary placeholder:text-secondary"
                        required
                      />
                    </div>
                    {tipoUsuario === "trabajador" && (
                      <div className="flex items-center border rounded px-2 py-1 bg-popover">
                        <span className="text-secondary mr-2">💼</span>
                        <div className="flex-1">
                          <Select
                            options={trabajosOptions}
                            placeholder="Selecciona o busca tu trabajo"
                            classNamePrefix="react-select"
                            isSearchable
                            styles={{
                              control: (provided) => ({
                                ...provided,
                                backgroundColor: "#f7f0ea", // Cambia el fondo del input
                                borderColor: "#e0e7ef",     // Cambia el borde
                                color: "#0a2c4d",           // Cambia el texto
                                minHeight: "40px",
                              }),
                              input: (provided) => ({
                                ...provided,
                                color: "#0a2c4d",           // Cambia el color del texto al escribir
                              }),
                              option: (provided, state) => ({
                                ...provided,
                                backgroundColor: state.isFocused ? "#e0e7ef" : "#fff", // Hover color
                                color: "#0a2c4d",
                              }),
                              singleValue: (provided) => ({
                                ...provided,
                                color: "#0a2c4d",
                              }),
                              menu: (provided) => ({
                                ...provided,
                                zIndex: 9999,
                              }),
                            }}
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex items-center border rounded px-2 py-1 bg-popover">
                      <FaLock className="text-secondary mr-2" />
                      <input
                        type="password"
                        placeholder="Contraseña"
                        className="bg-transparent outline-none flex-1 text-primary placeholder:text-secondary"
                        required
                      />
                    </div>
                    <div className="flex items-center border rounded px-2 py-1 bg-popover">
                      <FaLock className="text-secondary mr-2" />
                      <input
                        type="password"
                        placeholder="Confirmar contraseña"
                        className="bg-transparent outline-none flex-1 text-primary placeholder:text-secondary"
                        required
                      />
                    </div>
                    <button className="text-primary rounded py-2 font-semibold hover:bg-primary hover:text-white transition">
                      REGISTRARSE
                    </button>
                    <button
                      type="button"
                      className="text-xs text-secondary underline mt-2"
                      onClick={() => setTipoUsuario("")}
                    >
                      Cambiar tipo de usuario
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;