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
    position: 'Software Developer',
    url: 'https://www.mayoclinic.org/', // Replace with the actual URL if available
    startDate: '2024-02-01',
    endDate: '2024-10-30',
    summary: 'Designing and implementing data solutions to enhance analytics and operational efficiency.',
    highlights: [
      'Data Pipeline Development: Designed and implemented scalable ETL pipelines using AWS Glue and Lambda, improving data processing efficiency by 30%.',
      'Machine Learning Integration: Developed and deployed machine learning models for real-time analytics, resulting in a 25% increase in campaign response rates through personalized interventions.',
      'Collaboration on AI Solutions: Worked closely with data scientists and product managers to design AI-driven marketing solutions, improving campaign performance by 20% in six months.',
      'Data Quality Assurance: Established and maintained data validation frameworks, improving data accuracy by 15%.',
    ],
  },
  {
    name: 'Virinchi Technologies',
    position: 'Software Developer',
    url: 'https://www.virinchi.com/', // Replace with the actual URL if available
    startDate: '2020-08-01',
    endDate: '2022-09-30',
    summary: 'Analyzed data to drive business improvements and optimize marketing strategies.',
    highlights: [
      'Customer Segmentation: Utilized SQL and Python for customer segmentation, increasing targeted marketing effectiveness by 25%.',
      'Data Visualization: Developed interactive dashboards and reports in Tableau, enabling data-driven decisions that reduced campaign costs by 30%.',
      'Automated Reporting: Automated reporting and data extraction workflows, reducing manual processes by 40%.',
    ],
  },
  {
    name: 'NeoApp Technologies',
    position: 'Software Developer Intern',
    url: 'https://www.neoapptech.com/', // Replace with the actual URL if available
    startDate: '2019-06-01',
    endDate: '2020-07-31',
    summary: 'Gained hands-on experience in data analytics and predictive modeling.',
    highlights: [
      'Predictive Modeling: Developed predictive models to identify key customer behaviors, improving customer retention by 15%.',
      'NLP Analytics: Implemented Natural Language Processing (NLP) techniques to analyze customer feedback, providing actionable insights that increased customer satisfaction by 10%.',
    ],
  },
];


export default work;
