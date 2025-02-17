import About from "./About";
import Articles from "./Articles";
import Certs from "./Certs";
import Devider from "./Divider";
import Events from "./Events";
import Experties from "./Experties";
import Footer from "./Footer";
import MovingSkills from "./MovingSkills";
import MyPic from "./MyPic";

import Work from "./Work";

import HeroSection from "./HeroSection";
import SkillsPic from "./SkillsPic";
import { MoonStar, SunMoon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
    var themeMode = localStorage.getItem("theme");

    var [lightMode, SetlightMode] = useState(true);
    if (themeMode == "" || themeMode == " " || themeMode == undefined) {
        themeMode = "light";
    }

    const [theme, setTheme] = useState(themeMode);

    useEffect(() => {
        if (theme == "light") {
            SetlightMode(true);
        } else {
            SetlightMode(false);
        }
    }, []);
    function ToggleTheme() {
        if (theme == "light") {
            setTheme("dark");
            SetlightMode(false);

            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
            SetlightMode(true);
        }
    }

    useEffect(() => {
        if (theme == "dark") {
            document.querySelector("html")?.classList.add("dark");
        } else {
            document.querySelector("html")?.classList.remove("dark");
        }
    }, [theme]);
    return (
        <>
            <div className="flex items-center shadow-sm dark:shadow-none dark:border-b dark:border-zinc-900 lg:pb-32 pb-12">
                <HeroSection />
                <div className="hidden lg:block md:block">
                    <SkillsPic />
                </div>
            </div>

            <div className="flex items-center">
                <About />
                <div className="hidden lg:block md:block">
                    <MyPic />
                </div>
            </div>
            <Devider />

            <div
                onClick={ToggleTheme}
                className="fixed bottom-20 hidden lg:block right-6 cursor-pointer lg:top-[1.4rem] text-gray-600 dark:text-zinc-400 lg:right-5 z-50"
            >
                {lightMode ? (
                    <MoonStar fill="#4B5563" size={20} />
                ) : (
                    <SunMoon size={24} />
                )}
            </div>

            <div
                onClick={ToggleTheme}
                className="fixed block lg:hidden bottom-20 right-5 cursor-pointer lg:top-[1.4rem] text-gray-600 dark:text-zinc-400 lg:right-5 z-50"
            >
                {lightMode ? (
                    <MoonStar fill="#4B5563" size={32} />
                ) : (
                    <SunMoon size={32} />
                )}
            </div>
            <Certs />

            <Experties />
            <Articles />
            <MovingSkills />
            <Work />

            <Devider />
            <Events />
            <Footer />
        </>
    );
}
