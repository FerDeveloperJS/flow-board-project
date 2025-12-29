import Close from "../assets/svg/Close";
import PersonPlus from "../assets/svg/PersonPlus";

function PopUpCollaborators({ setPopUpCollaborators, setPopUp }) {
  return (
    <div className="bg-white z-50 w-72 h-64 rounded-xl p-5 absolute top-32 left-1/2 -translate-x-1/2">
      <Close
        setPopUpCollaborators={setPopUpCollaborators}
        setPopUp={setPopUp}
      />
      <div className="flex gap-2.5 mt-10 items-center">
        <PersonPlus />
        Agregar colaborador
      </div>
    </div>
  );
}

export default PopUpCollaborators;
