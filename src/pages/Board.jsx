import Profile from "../assets/svg/Profile";
import ProfileMenu from "../components/ProfileMenu";
import Collaborators from "../assets/svg/Collaborators";
import ViewList from "../assets/svg/ViewList";
import Burger from "../assets/svg/Burger";
import LeftArrow from "../assets/svg/LeftArrow";
import PopUpCollaborators from "../components/PopUpCollaborators";

import PopUp from "../components/PopUp";

import { useState } from "react";

import { motion, AnimatePresence } from "motion/react";

function Board() {
  const [menu, setMenu] = useState(false);
  const [popUpCollaborators, setPopUpCollaborators] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  return (
    <div className="p-2.5 h-screen bg-[#E9E9E9]">
      {popUp && <PopUp />}
      {profileMenu && <ProfileMenu setProfileMenu={setProfileMenu} />}

      {menu === false && <Burger setMenu={setMenu} />}
      {popUpCollaborators && (
        <PopUpCollaborators
          setPopUpCollaborators={setPopUpCollaborators}
          setPopUp={setPopUp}
        />
      )}
      <AnimatePresence>
        {menu && (
          <motion.aside
            className="bg-white absolute top-0 left-0 p-3 h-screen"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <LeftArrow setMenu={setMenu} />

            <div className="mt-5">
              <Profile setProfileMenu={setProfileMenu} />

              <div className="mt-20 flex flex-col gap-5">
                <button
                  className="flex gap-2.5 items-center text-base md:text-lg 2xl:text-xl text-[#1F2937] font-medium cursor-pointer"
                  onClick={() => {
                    setPopUpCollaborators(true);
                    setPopUp(true);
                  }}
                >
                  <Collaborators />
                  Colaboradores
                </button>

                <div className="flex gap-2.5 items-center text-base md:text-lg 2xl:text-xl text-[#1F2937] font-medium">
                  <ViewList />
                  Tableros
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Board;
