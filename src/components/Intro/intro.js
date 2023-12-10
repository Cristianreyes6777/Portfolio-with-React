import React from 'react';
import './intro.css';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hi,</span>
                <span className="introText">
                    I'm <span className="introName">Cristian Reyes</span> <br />
                </span>
                <p className="introPara">
                    Leveraging a strong foundation in Life Sciences, a M.S in Software Engineering, 
                    and industry experience, I explore the intersection of science and technology. 
                    As a dedicated advocate for discovery, I blend scientific and software development 
                    expertise to innovate in drug discovery and research, aiming to shape a better tomorrow 
                    in Biopharma.
                </p>
                <Link to="/contact"> {/* Update the link to your contact page */}
                    <button className="btn">
                        <img src={btnImg} alt="Hire" className='btnImg'/> Hire Me
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default Intro;