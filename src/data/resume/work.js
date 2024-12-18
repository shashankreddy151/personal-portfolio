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
    name: 'Virinchi Technologies',
    position: 'Software Developer',
    url: 'https://www.virinchi.com/',
    startDate: '2021-08-01',
    endDate: '2022-09-30',
    summary: 'Enhanced software quality and optimized workflows, supporting scalable software applications.',
    highlights: [
      'Designed and documented 50+ test scenarios to validate business requirements and map test cases to system functionality.',
      'Executed data validation techniques and optimized database queries, improving query performance by 40%.',
      'Collaborated with development teams to improve product features, increasing system scalability by 30%.',
      'Streamlined project workflows using Agile methodologies, reducing delivery time by 25%.',
    ],
  },
  {
    name: 'NeoApp Technologies',
    position: 'Software Developer Intern',
    url: 'https://www.neoapptechnologies.com/',
    startDate: '2021-02-01',
    endDate: '2021-07-31',
    summary: 'Developed and executed QA processes to enhance software usability and reduce bugs.',
    highlights: [
      'Designed and executed QA processes for 10+ new product features, reducing bugs by 30%.',
      'Validated integration requirements and resolved data discrepancies, improving data accuracy by 20%.',
      'Collaborated with senior developers to implement RESTful APIs, aligning test scenarios with business needs.',
      'Enhanced software usability by designing user-friendly interfaces, increasing client satisfaction by 15%.',
    ],
  },
];

export default work;
