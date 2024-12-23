"use client"
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      // جلب إعداد الوضع الحالي من LocalStorage
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setDarkMode(savedTheme === 'dark');
      } else {
        // تحديد الوضع الافتراضي بناءً على إعداد النظام
        setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
    }, []);
  
    useEffect(() => {
      // حفظ الوضع المفضل للمستخدم في LocalStorage
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }, [darkMode]);


  return (
    <FontAwesomeIcon icon={darkMode ? faMoon : faSun} className="text-white ml-[10px] dark:text-black text-[35px] cursor-pointer" onClick={() => setDarkMode(!darkMode)} width={35} height={35}/>
  )
}
