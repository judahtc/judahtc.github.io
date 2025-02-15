import { useState, useEffect } from "react";
import judahimage2 from "/src/assets/images/judahimage2.jpg";
export default function About() {
    const [readMore, setReadMore] = useState(true);

    // This will handle the "Read more" functionality
    function readmore() {
        setReadMore(!readMore);
    }

    useEffect(() => {
        const animatedText = document.getElementById("animatedText");

        // Check if the element exists
        if (animatedText) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Apply the fade-in animation when the element is in view
                        animatedText.classList.add("animate-fade-in");
                        observer.disconnect(); // Stop observing once animation has been triggered
                    }
                });
            });

            // Start observing the element
            observer.observe(animatedText);

            // Cleanup observer when component is unmounted
            return () => {
                observer.disconnect();
            };
        }
    }, []); // Empty dependency array ensures this effect runs only once

    const localstyle = {
        fontFamily: "Raleway, Arial, sans-serif",
    };

    return (
        <>
            <div
                className="lg:ml-36 lg:mr-20 lg:mt-24 lg:w-1/2 md:ml-52 md:mr-20 md:mt-24 md:w-1/2 mx-3 mt-8  opacity-0 transform translate-y-10 rounded-lg bg-gradient-to-br  lg:py-3 lg:px-3 px-2 " // Added opacity and translation
                id="animatedText"
                style={localstyle}
            >
                <div className="title lg:hidden  font-bold text-lg lg:ml-3 md:ml-3  text-gray-700  lg:font-extrabold lg:text-2xl mb-5 lg:text-white md:font-extrabold md:text-2xl  md:text-white">
                    ⚡About Me
                </div>

                <div className="lg:w-11/12 lg:ml-3 lg:mb-3 lg:text-base w-full ml-3 mb-3 text-[0.90rem] leading-6">
                    <p className="first mb-3 mr-3">
                        I am a passionate software Engineer experienced in
                        architecturing, designing and developing Enterprice Web
                        Applications since 2020. I program in various
                        programming languages including and not limited to
                        Python, TypeScript, JavaScript, C# and Java.
                    </p>

                    <p className="mr-3 ">
                        {readMore ? (
                            <span>
                                I am a certified AWS Professional with extensive
                                experience designing, implementing, and managing
                                cloud-based solutions. My expertise spans
                                building secure, scalable, and cost-effective
                                architectures using core AWS services. I
                                specialize in developing and deploying
                                serverless applications, optimizing cloud{" "}
                                <i
                                    className="text-blue-500 cursor-pointer"
                                    onClick={readmore}
                                >
                                    Read more ...
                                </i>
                            </span>
                        ) : (
                            <span>
                                I am a certified AWS Professional with extensive
                                experience designing, implementing, and managing
                                cloud-based solutions. My expertise spans
                                building secure, scalable, and cost-effective
                                architectures using core AWS services. I
                                specialize in developing and deploying
                                serverless applications, optimizing cloud
                                infrastructure for performance and cost, and
                                ensuring compliance with industry standards such
                                as ISO 27001 and GDPR. With hands-on experience
                                in DevOps practices, I leverage tools like AWS
                                CodePipeline, Terraform, and Elastic Beanstalk
                                to automate deployments and streamline
                                development workflows{" "}
                                <i
                                    className="text-blue-500 cursor-pointer"
                                    onClick={readmore}
                                >
                                    Read less ...
                                </i>
                            </span>
                        )}
                    </p>
                    <div className="flex justify-center items-center mt-10 -mb-3 md:hidden lg:hidden">
                        <div className="mx-auto ">
                            <img
                                src={judahimage2}
                                alt="me"
                                className="circular-image-1"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
