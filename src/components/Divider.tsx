export default function Devider() {
    return (
        <>
            <div className="mt-24 mx-28">
                <div className="flex items-center space-x-6">
                    <div className="flex-1 h-px bg-gray-100"></div>
                    <span className="text-red-500 font-bold">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#E5E7EB"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-globe"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                            <path d="M2 12h20" />
                        </svg>
                    </span>
                    <div className="flex-1 h-px bg-gray-100"></div>
                </div>
            </div>
        </>
    );
}
