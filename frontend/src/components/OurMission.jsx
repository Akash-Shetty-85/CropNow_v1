import React from 'react';
import img1 from '../assets/m1.png';
import img2 from '../assets/m2.png';
import img3 from '../assets/m3.png';
import img4 from '../assets/m4.png';
import './OurMission.css';

const OurMission = () => {
  return (
    <>
      <section className="mission-section">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-subtitle">
          Smart farming rooted in tradition, powered by technology.<br />
          Helping farmers grow better, sustainably.
        </p>

        <div className="mission-container">
          <div className="mission-grid">
            <div className="mission-card">
              <h3>Who We Are</h3>
              <p>
                At CropNow, we're on a mission to make farming smarter, more efficient, and sustainable.
                We are a passionate agri-tech team empowering farmers with tools that boost yield,
                save resources, and support eco-friendly practices.
              </p>
            </div>

            <div className="mission-card">
              <img src={img1} alt="Mission image 1" />
            </div>

            <div className="mission-card">
              <img src={img2} alt="Mission image 2" />
            </div>

            <div className="mission-card">
              <h3>What We Build</h3>
              <p>
                We develop easy-to-use agri-tech solutions like crop monitoring, smart irrigation, and pest
                control tools that simplify decisions and boost farm efficiency, profitability, and precision.
              </p>
            </div>

            <div className="mission-card">
              <h3>Powered by Tradition, Driven by Technology</h3>
              <p>
                We blend generations of farming wisdom with cutting-edge tech. Since 2023, we’ve worked with
                farmers, scientists, and engineers to create smart solutions that honor tradition while shaping
                the future of agriculture.
              </p>
            </div>

            <div className="mission-card">
              <img src={img3} alt="Mission image 3" />
            </div>

            <div className="mission-card">
              <img src={img4} alt="Mission image 4" />
            </div>

            <div className="mission-card">
              <h3>Why We're Different</h3>
              <p>
               At CropNow, we design tech that fits farmers—not the other way around. Our tools are practical, easy to use, and built with real farming needs in mind, helping boost productivity and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMission;
