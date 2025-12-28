import Close from "../assets/svg/Close";
import Moon from "../assets/svg/Moon";
import Exit from "../assets/svg/Exit";

function ProfileMenu({ setProfileMenu }) {
  return (
    <div className="absolute top-0 left-0 h-screen bg-white p-4">
      <Close setProfileMenu={setProfileMenu} />
      <div className="flex flex-col gap-5 items-start mt-10">
        <button className="text-base md:text-lg 2xl:text-xl flex gap-2.5 items-center justify-center">
          <Exit />
          Cerrar Sesión
        </button>
        <button className="text-base md:text-lg 2xl:text-xl flex gap-2.5 items-center justify-center">
          <Moon />
          Modo Oscuro
        </button>
      </div>
    </div>
  );
}

export default ProfileMenu;
