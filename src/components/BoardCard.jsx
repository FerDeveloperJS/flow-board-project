import WorkSpace from "../assets/svg/WorkSpace";
import { motion } from "motion/react";

function BoardCard({ boardName }) {
  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer w-fit"
      whileHover={{
        scale: 1.05,
        y: -6,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
      }}
    >
      <div className="bg-[#2F2F2F] p-3.5 flex items-center justify-center w-32 h-20 xl:w-44 xl:h-28 rounded-xl">
        <WorkSpace />
      </div>
      <h3 className="md:text-lg lx:text-xl 2xl:text-2xl font-medium">
        {boardName}
      </h3>
    </motion.div>
  );
}

export default BoardCard;
