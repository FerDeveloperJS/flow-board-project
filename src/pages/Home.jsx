import { useState } from "react";
import Profile from "../assets/svg/Profile";
import Plus from "../assets/svg/Plus";
import ProfileMenu from "../components/ProfileMenu";

function Dashboard() {
  const [profileMenu, setProfileMenu] = useState(false);
  return (
    <div className="p-2.5 h-screen bg-[#E9E9E9]">
      <Profile setProfileMenu={setProfileMenu} />
      {profileMenu && <ProfileMenu setProfileMenu={setProfileMenu} />}
      <div className="flex flex-col items-center mt-14">
        <div className="w-40 h-24 xl:w-52 xl:h-36 rounded-2xl bg-[#2F2F2F] flex items-center justify-center">
          <Plus />
        </div>
        <p className="text-center font-medium text-sm md:text-base">
          Añadir tablero
        </p>
      </div>

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

export default Dashboard;
