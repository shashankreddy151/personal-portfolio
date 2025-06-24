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
    name: 'Mayo Clinic',
    position: 'Business Intelligence Analyst',
    url: 'https://www.mayoclinic.org/', // Replace with the actual URL if available
    startDate: '2024-02-01',
    endDate: 'Present',
    summary: 'Develop and maintain BI dashboards, support Epic analytics, and analyze healthcare datasets for actionable insights.',
    highlights: [
      'Developed and maintained 15+ BI dashboards in Tableau, providing actionable insights to clinical and operational teams.',
      'Supported Epic system analytics by leveraging Clarity and Caboodle, enhancing reporting capabilities.',
      'Analyzed healthcare datasets using SQL, identifying trends that improved patient care protocols.',
    ],
  },
  {
    name: 'Virinchi Technologies Limited',
    position: 'Data Analyst',
    url: 'https://www.virinchi.com/', // Replace with the actual URL if available
    startDate: '2020-08-01',
    endDate: '2022-09-30',
    summary: 'Extracted, analyzed, and visualized data to support key business initiatives.',
    highlights: [
      'Created complex SQL queries to extract and analyze data, supporting key business initiatives.',
      'Built interactive Tableau dashboards to visualize trends and KPIs for senior leadership.',
      'Assisted in developing data models and implementing data governance processes.',
      'Delivered ad-hoc analyses and reports, enhancing reporting efficiency by 30%.',
    ],
  },
  {
    name: 'NeoApp Technologies Pvt. Ltd.',
    position: 'Data Analyst Intern',
    url: 'https://www.neoapptechnologies.com/', // Replace with the actual URL if available
    startDate: '2019-06-01',
    endDate: '2020-07-31',
    summary: 'Supported business intelligence initiatives through data analysis and visualization.',
    highlights: [
      'Designed and implemented SQL queries for data extraction and reporting.',
      'Created Tableau dashboards for operational insights.',
      'Conducted data analysis to improve data accuracy by 20%.',
      'Collaborated with cross-functional teams to support business intelligence initiatives.',
    ],
  },
];


export default work;
