import { useEffect } from "react";
import nodejslambda3 from "/src/assets/images/nodejslambda3.png";
export default function Articles() {
    const article1 = () => {
        // Navigate to the desired URL
        window.open(
            "https://awsfordevelopers.hashnode.dev/a-guide-deploying-your-nodejs-application-on-lambda-function-using-docker",
            "_blank"
        );
    };
    const article2 = () => {
        // Navigate to the desired URL
        window.open(
            "https://awsfordevelopers.hashnode.dev/deploying-your-first-fastapi-application-on-amazon-ec2",
            "_blank"
        );
    };
    const article3 = () => {
        // Navigate to the desired URL
        window.open(
            "https://awsfordevelopers.hashnode.dev/a-step-to-step-guide-hosting-your-frontend-application-in-amazon-s3",
            "_blank"
        );
    };
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
            <div id="one" className="lg:mx-40 md:mx-40 mx-7 mt-12 ">
                {/* <div className="text-center text-5xl font-semibold my-24 mt-32">📖 Blogs</div> */}

                <div className="flex  items-center justify-between my-5">
                    <span className="lg:text-xl md:text-xl text-lg font-bold">
                        📰 Articles
                    </span>{" "}
                    <a
                        target="_blank"
                        href="https://awsfordevelopers.hashnode.dev/"
                        className="text-green-500 text-base"
                    >
                        View all articles →
                    </a>
                </div>

                <div className="flex lg:flex-row md:flex-row flex-col mb-10 lg:space-x-7 md:space-x-7 space-y-3 md:space-y-0 lg:space-y-0 text-gray-600">
                    <div
                        className=" lg:w-2/3 md:w-2/3 cursor-pointer"
                        onClick={article1}
                    >
                        <div className="articles ">
                            <div className="one  border border-gray-200  py-4  px-4  rounded-lg flex flex-col items-center">
                                <div className="">
                                    <img src={nodejslambda3}></img>
                                </div>
                                <div className="bg-gray-50 px-4 py-4 rounded-md">
                                    <p
                                        className="font-semibold lg:text-xl md:text-xl text-base "
                                        style={{ color: "##222222" }}
                                    >
                                        A Guide: Deploying your Node.Js
                                        Application on Lambda Function using
                                        Docker
                                    </p>

                                    <p>
                                        Nov 21, 2024 ·
                                        <span className="test-sm text-yellow-400">
                                            3 min read
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start space-y-3">
                        <div className="cursor-pointer" onClick={article2}>
                            <div className="articles">
                                <div className="one  border border-gray-200  py-6  px-8 bg-gray-50 rounded-lg">
                                    <p
                                        className="font-semibold lg:text-xl md:text-xl text-base"
                                        style={{ color: "##222222" }}
                                    >
                                        A Guide: Deploying your first FastAPI
                                        application on Amazon EC2
                                    </p>
                                    <br></br>
                                    <p>
                                        Oct 28, 2024 ·
                                        <span className="test-sm text-yellow-400">
                                            3 min read
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer" onClick={article3}>
                            <div className="articles">
                                <div className="one  border border-gray-200  py-6  px-8 bg-gray-50 rounded-lg">
                                    <p
                                        className="font-semibold lg:text-xl md:text-xl text-base"
                                        style={{ color: "##222222" }}
                                    >
                                        {" "}
                                        A step to step guide: Hosting your
                                        frontend application in Amazon S3
                                    </p>

                                    <p>
                                        <br></br>
                                        Sep 25, 2024 ·
                                        <span className="test-sm text-yellow-400">
                                            3 min read
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
