import { JSX, useEffect, useState } from 'react';

export function DarkModb(): JSX.Element {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }
  }, [theme]);

  const handleChangeTheme = (): void => {
    setTheme((prevTheme: string) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="items-center  dark:bg-slate-950">
      <button 
        className="px-4 py-2 rounded-b-1 dark:text-white"
        onClick={handleChangeTheme}
      >
        ☀︎ 
      </button>
    </div>
  );
}

