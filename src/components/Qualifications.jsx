import React from "react";

const qualifications = [
    {
        level: "Schooling",
        institution: "Bharath Public School",
        course: "SSC",
        gpa: "9.7 GPA",
        year: "2013",
    },
    {
        level: "Intermediate",
        institution: "Sri Vidya Junior College",
        course: "MPC",
        gpa: "95%",
        year: "2015",
    },
    {
        level: "Undergraduate",
        institution: "Anurag Engineering College",
        course: "B.Tech in CSE",
        gpa: "9.06 CGPA",
        year: "2019",
    },
    {
        level: "Postgraduate",
        institution: "Auburn University at Montgomery",
        course: "Masters in CS",
        gpa: "3.9 CGPA",
        year: "2025",
    },
];

export default function Qualifications() {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full p-4">
                {qualifications.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-xl rounded-2xl p-6 border hover:shadow-2xl transition duration-300"
                    >
                        <h2 className="text-2xl font-bold text-blue-700 mb-2">{item.level}</h2>
                        <p className="text-lg font-medium text-gray-800">{item.institution}</p>
                        <p className="text-gray-600">{item.course}</p>
                        <p className="text-gray-700">{item.gpa}</p>
                        <p className="text-gray-500">Year: {item.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
