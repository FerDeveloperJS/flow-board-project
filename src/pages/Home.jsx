import { supabase } from "../supabaseClient.js";

import { useState, useEffect } from "react";

import Profile from "../assets/svg/Profile";
import Plus from "../assets/svg/Plus";
import ProfileMenu from "../components/ProfileMenu";
import PopUpBoard from "../components/PopUpBoard";
import PopUp from "../components/PopUp";
import BoardCard from "../components/BoardCard";

import { motion } from "motion/react";

function Home() {
  const [profileMenu, setProfileMenu] = useState(false);
  const [popUpBoard, setPopUpBoard] = useState(false);
  const [boards, setBoards] = useState([]);

  async function fetchBoards() {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error("No hay usuario", userError);
      return;
    }

    const { data, error } = await supabase
      .from("boards")
      .select("id, name, created_at")
      .eq("owner_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error trayendo boards:", error);
    } else {
      setBoards(data);
    }
  }

  useEffect(() => {
    fetchBoards();
  }, []);

  return (
    <div className="p-2.5 h-screen bg-[#E9E9E9] overflow-x-hidden">
      {popUpBoard && <PopUp />}
      {popUpBoard && (
        <PopUpBoard setPopUpBoard={setPopUpBoard} fetchBoards={fetchBoards} />
      )}

      <Profile setProfileMenu={setProfileMenu} />
      {profileMenu && <ProfileMenu setProfileMenu={setProfileMenu} />}

      {popUpBoard === false && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center mt-14"
          onClick={() => setPopUpBoard(true)}
        >
          <div className="w-40 h-24 xl:w-52 xl:h-36 rounded-2xl bg-[#2F2F2F] flex items-center justify-center">
            <Plus />
          </div>
          <p className="text-center font-medium text-sm md:text-base">
            Añadir tablero
          </p>
        </motion.div>
      )}

      <section className="mt-24">
        <h2 className="text-lg md:text-xl lx:text-2xl 2xl:text-3xl font-black text-center mt-10">
          Mis tableros
        </h2>

        <div className="mt-10 flex gap-10 w-fit mx-auto">
          {boards.length === 0 ? (
            <p className="text-center text-gray-500">
              Aún no tienes tableros...
            </p>
          ) : (
            boards.map((board) => (
              <BoardCard key={board.id} boardName={board.name} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
