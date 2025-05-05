import React from "react";
import profileImg from "../assets/saikrishna.jpg"; // Ensure the image is in place

export default function About() {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl w-full text-center">
                <img
                    src={profileImg}
                    alt="Profile"
                    className="mx-auto w-40 h-40 rounded-full object-cover shadow-lg mb-6 border-4 border-blue-200"
                />
                <h1 className="text-3xl font-bold text-blue-700 mb-2">Sai Krishna Ganapathibhotla</h1>
                <p className="text-lg text-gray-800 font-medium mb-3">Hey,I'm Krishna - Software Engineer</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                    With 3.2 years of experience, currently pursuing a Master's in Computer Science.
                    Skilled in designing, coding, troubleshooting, and optimizing user interfaces. Proven ability to
                    deliver results in dynamic environments. Seeking a challenging role to leverage my problem-solving
                    skills, effective communication, and commitment to impactful results.
                </p>
            </div>
        </div>
    );
}


