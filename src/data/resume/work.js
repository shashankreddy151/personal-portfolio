/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'DataArt',
    position: 'Business Analyst',
    url: 'https://www.dataart.com/', // Replace with the actual URL if available
    startDate: '2024-02-01',
    endDate: 'Present',
    summary: 'Collaborating with stakeholders to develop and implement data-driven software solutions.',
    highlights: [
      'Stakeholder Collaboration: Partnered with 10+ stakeholders to document and deliver tailored software solutions, increasing client satisfaction by 20%.',
      'Dashboard Development: Designed and deployed 20+ Tableau and Power BI dashboards, reducing reporting time by 30% and cutting operational costs by 12%.',
      'Workflow Automation: Streamlined workflows, saving 300+ hours annually and reducing operational errors by 15%.',
      'Customer Segmentation: Implemented customer segmentation strategies, boosting marketing ROI by 20% through targeted campaigns.',
      'Data Governance: Established robust governance policies, ensuring 98% data accuracy and compliance with industry regulations.',
      'Predictive Analytics: Led the development of predictive models, identifying growth opportunities that increased revenue by 10%.',
    ],
  },
  {
    name: 'Data Economy',
    position: 'Data Analyst',
    url: 'https://www.dataeconomy.com/', // Replace with the actual URL if available
    startDate: '2019-06-01',
    endDate: '2022-08-31',
    summary: 'Analyzed and visualized data to enhance operational efficiency and support business decisions.',
    highlights: [
      'SQL Development: Wrote complex SQL queries to process datasets and generate insights, increasing data retrieval efficiency by 40%.',
      'Risk Management: Conducted operational and market risk assessments, mitigating compliance risks by 20%.',
      'Data Visualization: Developed 15+ interactive dashboards using Tableau and Power BI, increasing transparency across teams by 35%.',
      'Predictive Modeling: Built predictive models to enhance forecasting accuracy, resulting in a 15% improvement in planning efficiency.',
      'Collaboration: Collaborated with 30+ stakeholders to identify gaps and implement data solutions, improving decision-making.',
      'Process Improvement: Optimized ETL processes, saving 200+ hours annually and improving data reliability by 30%.',
    ],
  },
  {
    name: 'Applied Data Finance',
    position: 'Junior Analyst - Business Process (Internship)',
    url: 'https://www.applieddatafinance.com/', // Replace with the actual URL if available
    startDate: '2019-01-01',
    endDate: '2019-05-31',
    summary: 'Gained experience in business process improvement and data-driven decision-making.',
    highlights: [
      'Data Cleaning: Improved data accuracy by 30% through rigorous cleaning and transformation of large datasets.',
      'Dashboard Creation: Developed Power BI dashboards, reducing manual reporting time by 20%.',
      'SQL Querying: Designed SQL scripts to automate data extraction and streamline ETL processes, enhancing reporting speed by 15%.',
      'Market Analysis: Analyzed marketing datasets, boosting campaign ROI by 10% through actionable insights.',
      'Ad-hoc Reporting: Performed ad-hoc analyses to support executive decision-making, enhancing operational efficiency.',
      'Process Documentation: Documented 10+ business processes, streamlining workflows and improving team collaboration by 25%.',
    ],
  },
];


export default work;
