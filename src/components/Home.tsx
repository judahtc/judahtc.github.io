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
export default function Home() {
    return (
        <>
            <div className="flex items-center shadow-sm lg:pb-32 pb-12">
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
