import { useState } from "react";
import Profile from "../assets/svg/Profile";
import Plus from "../assets/svg/Plus";
import ProfileMenu from "../components/ProfileMenu";
import PopUpBoard from "../components/PopUpBoard";
import PopUp from "../components/PopUp";

import { motion } from "motion/react";

function Home() {
  const [profileMenu, setProfileMenu] = useState(false);
  const [popUpBoard, setPopUpBoard] = useState(false);

  return (
    <div className="p-2.5 h-screen bg-[#E9E9E9] overflow-x-hidden">
      {popUpBoard && <PopUp />}
      {popUpBoard && <PopUpBoard setPopUpBoard={setPopUpBoard} />}

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
        <p className="text-center mt-5 text-base md:text-lg 2xl:text-xl">
          Aún no tienes tableros...
        </p>
      </section>
    </div>
  );
}

export default Home;
