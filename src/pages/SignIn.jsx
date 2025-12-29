import { supabase } from "../supabaseClient.js";

import Mail from "../assets/svg/Mail";
import Lock from "../assets/svg/Lock";
import Notification from "../components/Notification";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  async function handleSignIn(e) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setNotification({
        type: "error",
        message: error.message,
      });
    } else {
      setNotification({
        type: "success",
        message: "Inicio de sesión exitoso...",
      });

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
  }

  return (
    <div className="p-2.5 flex h-screen items-center justify-center">
      <div className="bg-[#2C2F36] p-5 rounded-4xl lg:p-10 2xl:p-16">
        {notification && (
          <Notification
            type={notification.type}
            message={notification.message}
          />
        )}
        <h1 className="text-white text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center">
          Iniciar Sesión
        </h1>
        <div className="bg-[#2563EB] h-1 mt-3 w-40 mx-auto"></div>
        <form onSubmit={handleSignIn} className="mt-8 flex flex-col gap-5">
          <div className="flex gap-6 bg-[#D9D9D9] p-2 rounded-xl text-base md:text-lg 2xl:text-xl">
            <Mail />
            <input
              type="email"
              placeholder="Correo"
              className="placeholder:text-[#1F2937] placeholder:font-bold"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex gap-6 bg-[#D9D9D9] text-[#1F2937] p-2 rounded-xl text-base md:text-lg 2xl:text-xl">
            <Lock />
            <input
              type="password"
              placeholder="Contraseña"
              className="placeholder:text-[#1F2937] placeholder:font-bold"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="bg-[#60A5FA] text-[#1F2937] p-2 rounded-xl font-bold text-base md:text-lg 2xl:text-xl cursor-pointer hover:bg-[#2563EB] duration-500"
            type="submit"
          >
            Iniciar Sesión
          </button>

          <Link
            to="/signup"
            className="text-white font-bold text-sm md:text-base cursor-pointer"
          >
            No tienes cuenta?
            <span className="text-[#60A5FA]"> Regístrate aquí</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
