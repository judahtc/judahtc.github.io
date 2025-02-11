import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
    const me = "{JC}";
    const me1 = "{ JC }";

    const [toggle, SetToggle] = useState(false);

    function toggleFunc() {
        SetToggle(!toggle);
    }
    return (
        <div className="navbar bg-gray-50 w-full z-50 shadow-neutral-200 fixed">
            <div className="  text-gray-500 flex items-center justify-between py-3 lg:px-24 md:px-24 px-2 w-full font-bold">
                <div className="font-bold text-2xl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 90 90"
                        width="40"
                        height="40"
                    >
                        <defs>
                            <filter
                                id="shadow"
                                x="-50%"
                                y="-50%"
                                width="200%"
                                height="200%"
                            >
                                <feDropShadow
                                    dx="0"
                                    dy="4"
                                    stdDeviation="6"
                                    flood-color="rgba(0, 0, 0, 0.3)"
                                />
                            </filter>
                        </defs>

                        <circle
                            cx="100"
                            cy="100"
                            r="95"
                            fill="url(#gradient)"
                            filter="url(#shadow)"
                        />

                        <circle
                            cx="100"
                            cy="100"
                            r="85"
                            fill="none"
                            stroke="#6B7280"
                            stroke-width="6"
                        />

                        <text
                            x="50%"
                            y="50%"
                            text-anchor="middle"
                            dominant-baseline="central"
                            font-family="Arial, sans-serif"
                            font-size="64"
                            font-weight="bold"
                            fill="#6B7280"
                        >
                            {me}
                        </text>
                    </svg>
                </div>
                <div
                    className="menu lg:hidden md:hidden block cursor-pointer"
                    onClick={toggleFunc}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-menu"
                    >
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                </div>
                <div className="hidden lg:block md:block">
                    <div className="nav-items  lg:space-x-5 lg:flex-row lg:font-bold md:space-x-5 md:flex-row md:font-bold text">
                        <NavLink to="/">
                            {" "}
                            <span className="hover:bg-white px-2  pt-[0.4rem] pb-[0.5rem] rounded-md hover:cursor-pointer">
                                Home
                            </span>
                        </NavLink>
                        <a
                            target="_blank"
                            href="https://awsfordevelopers.hashnode.dev/"
                        >
                            <span className="hover:bg-white px-2  pt-[0.4rem] pb-[0.5rem] rounded-md hover:cursor-pointer">
                                Blog
                            </span>
                        </a>
                        <Link to="/projects">
                            <span className="hover:bg-white px-2  pt-[0.4rem] pb-[0.5rem] rounded-md hover:cursor-pointer">
                                Projects
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {toggle && (
                <div className="text-white px-4 pb-3 absolute top-0 lg:hidden block  md:hidden right-0 w-80 h-[50rem] bg-black rounded-bl-xl slideNav">
                    <div className="flex items-center justify-between mt-5">
                        <div className="font-bold">{me1}</div>
                        <div className="cursor-pointer" onClick={toggleFunc}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-square-x"
                            >
                                <rect
                                    width="18"
                                    height="18"
                                    x="3"
                                    y="3"
                                    rx="2"
                                    ry="2"
                                />
                                <path d="m15 9-6 6" />
                                <path d="m9 9 6 6" />
                            </svg>
                        </div>
                    </div>
                    <hr className="my-5"></hr>
                    <div className="block lg:hidden md:hidden font-bold">
                        <div className="nav-items flex flex-col md:font-bold text space-y-5">
                            <NavLink
                                onClick={toggleFunc}
                                to="/"
                                className="cursor-pointer"
                            >
                                Home
                            </NavLink>

                            <NavLink
                                onClick={toggleFunc}
                                target="_blank"
                                to="https://awsfordevelopers.hashnode.dev/"
                                className="cursor-pointer"
                            >
                                Blog
                            </NavLink>
                            <NavLink
                                onClick={toggleFunc}
                                to="/projects"
                                className="cursor-pointer"
                            >
                                Projects
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
