import React from 'react';
import './skills.css';
import LabManagement from '../../assets/lab-management.png'; 
import SoftwareEngineering from '../../assets/software-engineering.png'; 
import Biopharma from '../../assets/biopharma.png'; 
const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">My Expertise</span>
            <span className="skillDesc">
                As a Lab Manager at Biotrial, I specialize in streamlining lab operations and ensuring compliance with key regulatory standards. Pursuing a Master's in Computer Software Engineering at Boston University, I am passionate about integrating software engineering with biopharma and biotech.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={LabManagement} alt="Lab Management" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Lab Management</h2>
                        <p>Expert in managing lab operations and ensuring compliance with FDA, CDC, and CLIA standards for clinical trials.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={SoftwareEngineering} alt="Software Engineering" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Software Engineering</h2>
                        <p>Deeply engaged in mastering software engineering, focusing on applications in biopharma and biotech.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Biopharma} alt="Biopharma" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Biopharma Innovation</h2>
                        <p>Committed to leveraging my biology and chemistry background to drive innovations in the biopharmaceutical field.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
