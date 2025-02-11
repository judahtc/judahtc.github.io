import { useEffect } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
// import { Outdent } from "lucide-react";
import { Outlet } from "react-router-dom";

function App() {
    useEffect(() => {
        const animatedTextOne = document.getElementById("one");

        if (animatedTextOne) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animatedTextOne.classList.add("animate-fade-in");
                        observer.disconnect();
                    }
                });
            });

            // Start observing the element
            observer.observe(animatedTextOne);

            // Cleanup observer when component is unmounted
            return () => {
                observer.disconnect();
            };
        }
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <>
            <div className="relative ">
                <div className="  ">
                    <NavBar></NavBar>
                </div>

                <div className="relative top-20 ">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default App;
