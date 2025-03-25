/** @format */

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  // Ensure default theme is always light
  useEffect(() => {
    if (!theme) setTheme("light");
  }, [theme, setTheme]);

  const isDarkMode = theme === "dark";

  return (
    <motion.div
      className="cursor-pointer p-2 rounded-full"
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      initial={{ rotate: 0, scale: 1 }}
      animate={{ rotate: isDarkMode ? 270 : 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {isDarkMode ? (
        <motion.div
          key="moon"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="h-6 w-6 text-yellow-400" />
        </motion.div>
      ) : (
        <motion.div
          key="sun"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="h-6 w-6 text-orange-500" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default ThemeToggle;
