import { useEffect } from "react";

export default function Footer() {
    useEffect(() => {
        const animatedTextOne = document.getElementById("footer");

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
            <div
                className="container mx-auto w-4/5 lg:w-1/2 md:w-1/2 p-4 mt-32 mb-32"
                id="footer"
            >
                <div className="flex flex-col items-center">
                    <div className="font-bold  lg:text-5xl md:text-5xl text-3xl  mb-7">
                        Keep In Touch
                    </div>
                    <div className="w-2/3 text-center">
                        Anything to do with Entiprise{" "}
                        <span className="text-green-700">
                            Frontend Development, Backend Development, AWS Cloud
                            Engineering ,Automation or Data Engineering{" "}
                        </span>
                        , l am your guy.
                    </div>
                    <div>
                        <div className=" flex items-center space-x-2  mt-6 font-semibold lg:text-base md:text-base text-sm">
                            <div className="linkedin bg-gray-100 hover:bg-gray-200 px-2 py-[0.4rem] pr-3  rounded">
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/judah-t-chisare-a1b998174/"
                                    className="flex items-center space-x-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="green"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="lucide lucide-linkedin"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect
                                            width="4"
                                            height="12"
                                            x="2"
                                            y="9"
                                        />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>

                                    <span>LinkedIn</span>
                                </a>
                            </div>
                            <div className="email bg-gray-100 hover:bg-gray-200 px-2 py-[0.4rem] pr-3  rounded">
                                {" "}
                                <a
                                    target="_blank"
                                    href="mailto:jaycea247@gmail.com"
                                    className="flex items-center space-x-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="green"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="lucide lucide-mail"
                                    >
                                        <rect
                                            width="20"
                                            height="16"
                                            x="2"
                                            y="4"
                                            rx="2"
                                        />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                    <span>Email</span>
                                </a>
                            </div>

                            <div className="github bg-gray-100 hover:bg-gray-200 px-2 py-[0.4rem] pr-3  rounded">
                                <a
                                    target="_blank"
                                    href="https://drive.google.com/file/d/1bvldXKYswjGPBBtjz6uMf2cPtlrX97fl/view?usp=drive_link"
                                    className="flex items-center space-x-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="green"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="lucide lucide-file-user"
                                    >
                                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                        <path d="M15 18a3 3 0 1 0-6 0" />
                                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                                        <circle cx="12" cy="13" r="2" />
                                    </svg>

                                    <span>Resume</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
