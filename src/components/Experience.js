import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeCompany, setActiveCompany] = useState('amazon');
  
  const companies = {
    amazon: {
      name: "AMAZON",
      position: "Software Development Engineer",
      period: "JUL 2022 - PRESENT",
      details: [
        "Led development of end-to-end region build automation across Route 53 (AWS's DNS web service). This enabled the launch of customer-facing global services in new regions within a day, a significant reduction from the previous time-frame of a month.",
        "Re-built Route 53's core domain management and DNS systems to provide a better user experience to millions of customers."
      ]
    },
    wattpad: {
      name: "WATTPAD",
      position: "Software Developer",
      period: "SEP 2020 - JUN 2022",
      details: [
        "Developed key features for the Wattpad platform serving over 90 million monthly active users.",
        "Worked on the story reading experience and user engagement tools."
      ]
    },
    toronto: {
      name: "UNIVERSITY OF TORONTO",
      position: "Teaching Assistant",
      period: "JAN 2019 - APR 2020",
      details: [
        "Conducted tutorial sessions for undergraduate Computer Science courses.",
        "Provided guidance to students on programming concepts and assignments."
      ]
    },
    centivizer: {
      name: "CENTIVIZER",
      position: "Software Developer Intern",
      period: "MAY 2019 - AUG 2019",
      details: [
        "Built interactive cognitive games for dementia patients using React and Node.js.",
        "Integrated motion tracking technology to enhance user experience."
      ]
    },
    orangegate: {
      name: "ORANGE GATE",
      position: "Full Stack Developer",
      period: "MAY 2018 - AUG 2018",
      details: [
        "Designed and implemented responsive web applications using React and Django.",
        "Collaborated with design team to create intuitive user interfaces."
      ]
    }
  };

  const handleCompanyClick = (company) => {
    setActiveCompany(company);
  };

  const activeDetails = companies[activeCompany];

  return (
    <section className="experience" id="experience">
      <div className="section-header">
        <h2>/ experience</h2>
        <div className="section-line"></div>
      </div>

      <div className="experience-container">
        <div className="companies-list">
          {Object.keys(companies).map(company => (
            <button 
              key={company}
              className={`company-button ${activeCompany === company ? 'active' : ''}`}
              onClick={() => handleCompanyClick(company)}
            >
              {companies[company].name}
            </button>
          ))}
        </div>

        <div className="experience-details">
          <h3>
            <span className="position">{activeDetails.position}</span>
            {" @ "}
            <span className="company">{activeDetails.name}</span>
          </h3>
          <p className="period">{activeDetails.period}</p>
          <ul className="details-list">
            {activeDetails.details.map((detail, index) => (
              <li key={index}>
                <span className="arrow">▹</span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
