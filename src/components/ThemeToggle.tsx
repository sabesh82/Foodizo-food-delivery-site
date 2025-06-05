import { useEffect, useState } from "react";
import { LuMoonStar } from "react-icons/lu";
import { MdSunny } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-md fixed top-5 right-8 
    sm:static sm:ml-auto cursor-pointer"
    >
      {theme === "dark" ? <MdSunny /> : <LuMoonStar />}
    </button>
  );
};

export default ThemeToggle;
