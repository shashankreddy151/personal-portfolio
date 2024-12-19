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
    position: 'Full Stack Developer',
    url: 'https://www.virinchi.com/',
    startDate: '2020-08-01',
    endDate: '2022-09-30',
    summary: 'Developed scalable web applications and enhanced system efficiency, supporting traffic of 50K+ users.',
    highlights: [
      'Built responsive and dynamic UI components using Next.js, Tailwind CSS, and Material-UI, enhancing user engagement.',
      'Designed scalable backend systems with Node.js and implemented MongoDB schemas for efficient data operations.',
      'Deployed AI models using TensorFlow and integrated OpenAI APIs to enable predictive analytics and intelligent interactions.',
      'Streamlined deployments with CI/CD pipelines leveraging GitHub Actions and Vercel, reducing release times by 60%.',
    ],
  },
  {
    name: 'NeoApp Technologies',
    position: 'Full Stack Developer Intern',
    url: 'https://www.neoapptechnologies.com/',
    startDate: '2020-02-01',
    endDate: '2020-07-31',
    summary: 'Developed full-stack applications and integrated APIs to enhance system performance and reliability.',
    highlights: [
      'Built full-stack applications using React, Node.js, and PostgreSQL, improving operational efficiency for internal tools.',
      'Integrated external APIs and GraphQL endpoints for real-time data processing, enhancing system responsiveness by 20%.',
      'Deployed application monitoring solutions using Grafana and Prometheus, ensuring high uptime and fast issue resolution.',
      'Collaborated with cross-functional teams to adopt best practices in OOP, clean code principles, and production-ready development.',
    ],
  },
];

export default work;
