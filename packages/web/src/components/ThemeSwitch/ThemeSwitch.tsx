import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    document.body.className = isDark ? "dark-theme" : "";
  }, [isDark]);

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeSwitch;
