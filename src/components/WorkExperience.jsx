import React, { useState } from "react";

const companies = [
    {
        id: 1,
        name: "NCR Corporation",
        role: "PS1 Engineer",
        duration: "Nov 2022 - Mar 2023",
        projects: [
            {
                name: "JUMBO POS Project",
                description:
                    "Spearheaded the implementation of Application Configuration Services and testing through the NCR Web Client tool. Developed and implemented the application service button in POS machines. Designed and developed new requirements, coded for both front-end and backend, created design documents for user stories. Executed functional and performance testing of the application, significantly improving functionality and enhancing user experience in POS machines.",
            },
        ],
    },
    {
        id: 2,
        name: "HCL Technologies",
        role: "Senior Analyst",
        duration: "Dec 2019 - Nov 2022",
        projects: [
            {
                name: "Certificate Management Dashboard",
                description:
                    "Developed a dashboard to track certificate expirations in Windows servers. Designed and implemented new features, wrote knowledge articles, and improved system efficiency by alerting users about expiring certificates, ensuring timely updates.",
            },
            {
                name: "Hosting Information Database Project",
                description:
                    "Built a system for remote website creation, task scheduler automation, and application monitoring. Designed new features, handled troubleshooting, documented solutions, and contributed to production stability through robust testing.",
            },
        ],
    },
];

export default function WorkExperience() {
    const [selectedCompany, setSelectedCompany] = useState(null);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
            <div className="max-w-5xl w-full">
                <h1 className="text-3xl font-semibold mb-6 text-center text-blue-800">Work Experience</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {companies.map((company) => (
                        <div
                            key={company.id}
                            onClick={() => setSelectedCompany(company.id)}
                            className={`border-2 rounded-2xl p-5 shadow-md transition duration-300 cursor-pointer hover:shadow-xl hover:border-blue-600 ${selectedCompany === company.id ? "border-blue-600 bg-white" : "bg-white"
                                }`}
                        >
                            <h2 className="text-xl font-bold text-gray-800">{company.name}</h2>
                            <p className="text-gray-700">{company.role}</p>
                            <p className="text-sm text-gray-500">{company.duration}</p>
                        </div>
                    ))}
                </div>

                {selectedCompany && (
                    <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                            Projects at {companies.find((c) => c.id === selectedCompany).name}
                        </h2>
                        <ul className="space-y-4">
                            {companies
                                .find((c) => c.id === selectedCompany)
                                .projects.map((project, idx) => (
                                    <li key={idx} className="border-b pb-4">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{project.name}</h3>
                                        <p className="text-gray-700 text-sm">{project.description}</p>
                                    </li>
                                ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
