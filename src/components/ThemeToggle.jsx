import { useState,useEffect } from "react"
import { Moon,Sun } from "lucide-react"
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
     
    // here the value of the toggletheme is remembered with the help of useeffect and localstorage
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if(storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        }else {
            localStorage.setItem("theme", "Light");
            setIsDarkMode(false);
        }
    }, [])
 
    //here the value is assigned and set in local storage
    const toggleTheme=() => {
        if(isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    // here using tailwind css is given to the buttons and using js the button changes the color
    return <button onClick={toggleTheme} 
    className={cn(
        "fixed top-5 right-3 z-50 p-2.5 rounded-full border border-border bg-card/80 backdrop-blur-sm shadow-sm transition-all duration-300 hover:scale-105 md:right-5",
        "focus:outline-none"
    )}>
         {isDarkMode ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5 text-blue-900" />}
    </button>
};