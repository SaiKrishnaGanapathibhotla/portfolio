import React from "react";

export default function Awards() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl text-center space-y-6">
                <h1 className="text-3xl font-semibold text-blue-800">Awards</h1>
                <ul className="space-y-3 text-left">
                    {[
                        'Received the "Phi Kappa Phi" Honor Award for academic excellence during my major at Auburn University at Montgomery (AUM)',
                        "Top Performer during the training period at HCL Tech, excelling in professional development",
                        'Administrative Support during the "AVIRBHAV2k19" Orientation Program, assisting in event coordination',
                        "Volunteer Peer-Tutor at Anurag Engineering College, supporting fellow students’ academic growth",
                    ].map((award, idx) => (
                        <li
                            key={idx}
                            className="bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors duration-200 text-gray-800 shadow-sm"
                        >
                            {award}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
