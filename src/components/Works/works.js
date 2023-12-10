import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/Weather application.png';
import Portfolio3 from '../../assets/Multiverse Picture.png';
import Portfolio4 from '../../assets/Password Generator.png';
import Portfolio5 from '../../assets/Horseon picture.png';
import Portfolio6 from '../../assets/workDayScheduler.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Projects</h2>
            <div className="worksImgs">
                <a href="https://cristianreyes6777.github.io/Weather-Application/" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio1} alt="Weather Application" className="worksImg" />
                </a>
                <a href="https://cristianreyes6777.github.io/SEAL-team-6/" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio3} alt="Multiverse Project" className="worksImg" />
                </a>
                <a href="Uhttps://cristianreyes6777.github.io/random-password-generator/" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio4} alt="Password Generator" className="worksImg" />
                </a>
                <a href="https://cristianreyes6777.github.io/Optimizing-with-semantics/" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio5} alt="Horseon Project" className="worksImg" />
                </a>
                <a href="https://cristianreyes6777.github.io/Workday-Scheduler/" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio6} alt="Work Day Scheduler" className="worksImg" />
                </a>
            </div>
        </section>
    );
}

export default Works;
