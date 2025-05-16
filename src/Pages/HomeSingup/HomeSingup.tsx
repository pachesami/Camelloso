import Navbar from "@/Components/Navbar/Navbar";

const HomeSingup = () => {
  return (
    <>
      <Navbar variant="full" />
      <div>
        <h1 className="text-4xl font-bold text-center text-primary mt-4 mb-2">
          ¿Interesado en cambiar tus datos personales?
        </h1>
        <p className="text-lg text-center text-surface mt-2 mb-6">
          ¡Aquí tienes el paso a paso detallado para que cambies tus datos personales!
        </p>    
      </div>
    </>
  )
}

export default HomeSingup;