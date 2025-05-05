import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa"; // Added FaPhone

export default function Contact() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center space-y-6">
                <h1 className="text-3xl font-semibold text-blue-800">Contact</h1>
                <div className="space-y-4 text-left text-gray-700">
                    <p className="flex items-center hover:bg-blue-50 p-2 rounded-md transition duration-200">
                        <FaEnvelope className="mr-3 text-blue-600" />
                        <a href="mailto:saikrishnasharma26@gmail.com" className="text-blue-600 hover:underline">
                            saikrishnasharma26@gmail.com
                        </a>
                    </p>
                    <p className="flex items-center hover:bg-blue-50 p-2 rounded-md transition duration-200">
                        <FaLinkedin className="mr-3 text-blue-600" />
                        <a
                            href="https://www.linkedin.com/in/saikrishnag25"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Sai Krishna Ganapathibhotla
                        </a>
                    </p>
                    <p className="flex items-center hover:bg-blue-50 p-2 rounded-md transition duration-200">
                        <FaGithub className="mr-3 text-blue-600" />
                        <a
                            href="https://github.com/SaiKrishnaGanapathibhotla"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            github.com/SaiKrishnaG
                        </a>
                    </p>
                    <p className="flex items-center hover:bg-blue-50 p-2 rounded-md transition duration-200">
                        <FaPhone className="mr-3 text-blue-600" />
                        +1 (334) 669-6288
                    </p>
                </div>
            </div>
        </div>
    );
}
