import React from "react";

export default function Skills() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">
                <h1 className="text-3xl font-semibold text-blue-800 mb-6">Skills</h1>
                <ul className="space-y-2 text-left">
                    {[
                        "React.js",
                        "ASP.Net MVC",
                        "Tailwind CSS",
                        "C#.Net",
                        "SQL Server",
                        "RabbitMQ",
                        "Entity Framework",
                        "ADO.Net",
                        "ServiceNow",
                        "JavaScript",
                        "HTML & CSS",
                        "Bootstrap",
                        "Figma",
                        "Git & GitHub",
                    ].map((skill, idx) => (
                        <li
                            key={idx}
                            className="bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors duration-200 text-gray-800 shadow-sm"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
