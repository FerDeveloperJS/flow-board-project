import Mail from "../assets/svg/Mail";
import Lock from "../assets/svg/Lock";

function SignIn() {
  return (
    <div className="p-2.5 flex h-screen items-center justify-center">
      <div className="bg-[#2C2F36] p-5 rounded-4xl lg:p-10 2xl:p-16">
        <h1 className="text-white text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center">
          Iniciar Sesión
        </h1>
        <div className="bg-[#2563EB] h-1 mt-3 w-40 mx-auto"></div>
        <form className="mt-8 flex flex-col gap-5">
          <div className="flex gap-6 bg-[#D9D9D9] p-2 rounded-xl text-base md:text-lg 2xl:text-xl">
            <Mail />
            <input
              type="text"
              placeholder="Correo"
              className="placeholder:text-[#1F2937] placeholder:font-bold"
            />
          </div>

          <div className="flex gap-6 bg-[#D9D9D9] text-[#1F2937] p-2 rounded-xl text-base md:text-lg 2xl:text-xl">
            <Lock />
            <input
              type="text"
              placeholder="Contraseña"
              className="placeholder:text-[#1F2937] placeholder:font-bold"
            />
          </div>

          <button
            className="bg-[#60A5FA] text-[#1F2937] p-2 rounded-xl font-bold text-base md:text-lg 2xl:text-xl"
            type="submit"
          >
            Iniciar Sesión
          </button>

          <p className="text-white font-bold text-sm md:text-base">
            No tienes cuenta?
            <span className="text-[#60A5FA]"> Regístrate aquí</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
