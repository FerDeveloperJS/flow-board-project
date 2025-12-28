import { motion } from "motion/react";

function Notification({ message, type }) {
  if (type === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-green-500 p-3 rounded-xl font-medium absolute top-8 left-1/2 -translate-x-1/2"
      >
        <p className="text-base md:text-lg 2xl:text-xl text-white">{message}</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-red-500 p-3 rounded-xl font-medium absolute top-8 left-1/2 -translate-x-1/2"
    >
      <p className="text-base md:text-lg 2xl:text-xl text-white">{message}</p>
    </motion.div>
  );
}

export default Notification;
