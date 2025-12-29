import Close from "../assets/svg/Close";
import Pencil from "../assets/svg/Pencil";

function PopUpBoard({ setPopUpBoard }) {
  return (
    <div className="bg-white z-50 h-64 rounded-xl p-5 absolute top-32 left-1/2 -translate-x-1/2">
      <Close setPopUpBoard={setPopUpBoard} />
      <form className="mt-16 flex flex-col gap-5">
        <div className="flex gap-6 bg-black/35 text-[#1F2937] p-2 rounded-xl text-base md:text-lg 2xl:text-xl">
          <Pencil />
          <input
            type="text"
            placeholder="Nombre del tablero"
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
