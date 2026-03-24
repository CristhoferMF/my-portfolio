import { useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState(() => {
    return window.localStorage.getItem("theme") || "dark";
  });

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToogler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  return [theme, themeToogler];
}

export default useDarkMode;
