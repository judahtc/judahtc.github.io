export default function Skills() {
    const item: any = [
        {
            name: "Frontend",
            technologies: [
                "Angular",
                "React",
                "Typescript",
                "Javascript",
                "Tailwind",
                "shadcn",
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
                "SpringBoot",
                "Flask",
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
                "S3",
                "Route53",
                "CloudFormation",
                "CloudFront",
                "CloudWatch",
                "etc",
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
    ];
    return (
        <>
            <Card item={item} />
        </>
    );
}

export function Card({ item }) {
    const frontend_icon = (
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
    );

    return (
        <>
            <div className="grid grid-cols-2 mx-32">
                {item.map((inst: any, index: any) => (
                    <div
                        key={index}
                        className="px-3 py-3 border  border-gray-100 w-[30rem] mx-6 my-3 rounded-md flex space-x-3 items-center"
                    >
                        <div className="">{inst.icon}</div>
                        <div className="flex flex-col items-start">
                            <div>{inst.name}</div>
                            <div className="text-xs  grid grid-cols-5   items-start">
                                {inst.technologies.map((tech, index) => (
                                    <span
                                        className="bg-slate-50 px-2 mr-1 rounded mt-1"
                                        key={index}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
