import { useState } from "react";
import { supabase } from "../supabaseClient";
import Close from "../assets/svg/Close";
import Pencil from "../assets/svg/Pencil";

import Notification from "./Notification";

function PopUpBoard({ setPopUpBoard }) {
  const [boardName, setBoardName] = useState("");
  const [notification, setNotification] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error("Usuario no autenticado");
      return;
    }

    const { error } = await supabase.from("boards").insert({
      name: boardName,
      owner_id: user.id,
    });

    if (error) {
      setNotification({
        type: "error",
        message: error.message,
      });
    } else {
      setNotification({
        type: "success",
        message: "Tablero agregado con exito...",
      });
    }

    setTimeout(() => {
      setPopUpBoard(false);
    }, 2000);
  }

  return (
    <div className="bg-white z-50 h-64 rounded-xl p-5 absolute top-32 left-1/2 -translate-x-1/2">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      <Close setPopUpBoard={setPopUpBoard} />

      <form onSubmit={handleSubmit} className="mt-16 flex flex-col gap-5">
        <div className="flex gap-6 bg-black/35 text-[#1F2937] p-2 rounded-xl text-base md:text-lg 2xl:text-xl">
          <Pencil />
          <input
            type="text"
            placeholder="Nombre del tablero"
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
            className="placeholder:text-[#1F2937] placeholder:font-bold"
            required
          />
        </div>

        <button
          className="bg-[#60A5FA] text-[#1F2937] p-2 rounded-xl font-bold text-base md:text-lg 2xl:text-xl cursor-pointer hover:bg-[#2563EB] duration-500"
          type="submit"
        >
          Añadir tablero
        </button>
      </form>
    </div>
  );
}

export default PopUpBoard;
