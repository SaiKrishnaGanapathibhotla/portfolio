// App.jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Qualifications from "./components/Qualifications";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import { motion } from "framer-motion";

export default function App() {
    const [selected, setSelected] = useState("About");

    return (
        <div className="flex h-screen">
            <Sidebar selected={selected} setSelected={setSelected} />
            <div className="flex-1 p-6 overflow-auto">
                <motion.div
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    {selected === "About" && <About />}
                    {selected === "Qualifications" && <Qualifications />}
                    {selected === "Work Experience" && <WorkExperience />}
                    {selected === "Skills" && <Skills />}
                    {selected === "Awards" && <Awards />}
                    {selected === "Contact" && <Contact />}
                </motion.div>
            </div>
        </div>
    );
}