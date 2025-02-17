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
import { SunMoon } from "lucide-react";
import { useEffect, useState } from "react";
export default function Home() {
    const [theme, setTheme] = useState("light");
    function ToggleTheme() {
        if (theme == "light") {
            setTheme("dark");
        } else {
            setTheme("light");
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
            <div className="flex items-center shadow-sm dark:shadow-zinc-950 lg:pb-32 pb-12">
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
                className="fixed bottom-20 right-4 cursor-pointer lg:top-[1.4rem] text-gray-600 dark:text-zinc-400 lg:right-5 z-50"
            >
                <SunMoon size={24} />
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
