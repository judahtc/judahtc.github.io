import { useEffect, useState } from "react";
import { DatabaseBackup, MoonStar, SunMoon } from "lucide-react";
import { Button } from "./ui/button";

export default function Skills() {
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
    const item: any = [
        {
            name: "Frontend",
            technologies: [
                "Angular",
                "React",
                "Typescript",
                "NextJS",
                "vite",
                "Figma",
                "Axios",
                "RxJS",

                "Tailwind",
                "shadcn",
                "Bootstrap",
                "CCS",
                "HTML",
            ],
            icon: (
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
                    className="lucide lucide-laptop-minimal"
                >
                    <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
                    <line x1="2" x2="22" y1="20" y2="20" />
                </svg>
            ),
        },
        {
            name: "Backend",
            technologies: [
                "Django",
                "FastApi",
                "Typescript",
                "Flask",
                "Node.js",
                "SpringBoot",
                "ASP.NET Core",
                "Flask",
                "SQLAlchemy",
                "JWT",
                "Docker",
                "Jenkins",
                "PyTest",
            ],
            icon: (
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
                    className="lucide lucide-code"
                >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            ),
        },
        {
            name: "AWS",
            technologies: [
                "Lambda",
                "ec2",
                "beanstalk",
                "Load Balancers",
                "API Gateway",
                "S3",

                "Route53",
                "CloudFormation",
                "CloudFront",

                "SQS",
                "SNS",
                "CodePipeline",
                "CloudWatch",
                "RDS",
                " Auto Scaling",
            ],
            icon: (
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
                    className="lucide lucide-cloud"
                >
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
            ),
        },
        {
            name: "Databases",
            technologies: [
                "Postgres",
                "MySQL",
                "SSMS",
                "Dynamo",
                "Oracle",
                "Redis",
                "AWS RDS",
                "AWS Aurora",
            ],
            icon: (
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
                    className="lucide lucide-database"
                >
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                    <path d="M3 12A9 3 0 0 0 21 12" />
                </svg>
            ),
        },
        {
            name: "Data Engineering",
            technologies: [
                "AWS Glue",
                "Apache Airflow",
                "Hadoop",
                "Databricks",
                "Pyspark",
                "AWS Athena",
                "Redshift",
                " EventBridge",
                "Apache Kafka",
            ],
            icon: <DatabaseBackup />,
        },
    ];
    return (
        <>
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
            <Card item={item} />
        </>
    );
}

export function Card({ item }: any) {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto justify-center w-fit h-full ">
                {item.map((inst: any, index: any) => (
                    <div
                        key={index}
                        className="px-3 py-3 border  border-gray-100 dark:border-zinc-900 dark:text-zinc-400 lg:w-[90%] w-[89%] mx-6 my-3 rounded-md flex space-x-3 items-center"
                    >
                        <div className="">{inst.icon}</div>
                        <div className="flex flex-col items-start">
                            <div>{inst.name}</div>
                            <div className="text-xs  grid grid-cols-5   items-start">
                                {inst.technologies.map(
                                    (tech: string, index: string) => (
                                        <span
                                            className="bg-slate-50 dark:bg-zinc-900 px-2 mr-1 rounded mt-1 "
                                            key={index}
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center">
                <div className=""></div>
                <div className="lg:mx-40 ">
                    <Button>Contact Me</Button>
                </div>
            </div>
        </>
    );
}
