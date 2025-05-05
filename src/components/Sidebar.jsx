// Sidebar.jsx
import React from "react";

const menuItems = [
    "About",
    "Qualifications",
    "Work Experience",
    "Skills",
    "Awards",
    "Contact",
];

export default function Sidebar({ selected, setSelected }) {
    return (
        <div className="w-64 bg-gray-100 p-4 shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Portfolio</h2>
            <ul className="space-y-2">
                {menuItems.map((item) => (
                    <li key={item}>
                        <button
                            onClick={() => setSelected(item)}
                            className={`w-full text-left px-4 py-2 rounded-lg transition duration-300 ${selected === item
                                    ? "bg-blue-600 text-white shadow"
                                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                                }`}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
