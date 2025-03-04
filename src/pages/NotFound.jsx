import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  const handleHomeClick = () => {
    navigate("/dashboard");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex items-center justify-center h-screen bg-gray-100"
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          Sorry, the page you are looking for doesn't exist not found.
        </p>
        <button
          onClick={handleClick}
          className="inline-block bg-indigo-500 text-white px-3 py-2 rounded-lg hover:bg-indigo-600 transition"
        >
          Go Back
        </button>
        <button
          onClick={handleHomeClick}
          className="inline-block bg-indigo-500 text-white px-3 py-2 rounded-lg hover:bg-indigo-600 transition ml-5"
        >
          Home
        </button>
      </div>
    </motion.div>
  );
};
