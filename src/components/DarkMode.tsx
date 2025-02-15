import { useEffect, useState } from "react";

export default function DarkMode({ mode }: any) {
    const [theme, setTheme] = useState("dark");
    if (mode != "" || mode != " ") {
        setTheme(mode);
    }

    // function ToggleTheme() {
    //     if (theme == "light") {
    //         setTheme("dark");
    //     } else {
    //         setTheme("light");
    //     }
    // }

    useEffect(() => {
        if (theme == "dark") {
            document.querySelector("html")?.classList.add("dark");
        } else {
            document.querySelector("html")?.classList.remove("dark");
        }
    }, [theme]);
}
