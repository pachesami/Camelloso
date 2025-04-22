const SignUp = ()=> {

    return (
      
      <div className="min-h-screen py-20 bg-gradient-to-r from-indigo-100 via-blue-100 to-sky-100">
        <div className="container mx-auto " >
          <div className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
             <div className=" w-1/2 flex flex-col items-center justify-center p-12" style={{ backgroundImage: "url('/images/CamelloSinFondo.png')" }}>
             <h1>WELCOME</h1>               
              <div>
                <p className="">"Encuentra el talento que necesitas cuando lo necesitas un mejor futuro es con nosotros. En CAMELLOSO lo encontraras"</p>
              </div>
            </div>
            <div className="w-1/2 py-16 px-12">
              <h1 className="text- 3x1 mb-4">Register</h1>
              <p className="mb-4">Create your account </p>
              <form action="#">
                <div className="py-2">
                  <input type="text" placeholder="Firstname" className="border-gray-800 py-1 px-2" />
                  <input type="text" placeholder="Surname" className="border-gray-800 py-1 px-2" />
                  </div>
                  <div className="py-4">
                  <input type="text" placeholder="Email" className="border-gray-800 py-1 px-2 w-full"/>
                  </div>
                  <div>
                  <input type="password" placeholder="Password" className="border-gray-800 py-1 px-2 w-full" />
                  </div>
                  <div className="py-4">
                  <input type="password" placeholder="Confirm Password" className="border-gray-800 py-1 px-2 w-full" />
                  </div>
              </form>
              <div>
                <input type="checkbox" className="border-gray-400  "/>
                <span className="text-gray-500">Acepta <a className="text-emerald-400">terminos y condicciones </a> cemlloso tendra su informacion segura</span>
              </div>
              <div className="pt-10">
                <button className="  p-3 w-full text-center bg-gradient-to-tr from-slate-200 via-slate-300 to-slate-400">Register usuario
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
export default SignUp;