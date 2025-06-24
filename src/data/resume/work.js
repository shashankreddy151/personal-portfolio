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
    position: 'AI-Focused Full Stack Developer',
    url: 'https://www.mayoclinic.org/',
    startDate: '2024-02-01',
    endDate: 'Present',
    summary:
      'Lead development of HIPAA-compliant healthcare applications, integrating AI/ML and full-stack features to enhance patient care systems.',
    highlights: [
      'Developed a comprehensive patient data management system serving 10,000+ patients.',
      'Reduced data processing time by 40% through optimized database queries and caching.',
      'Implemented a real-time notification system that improved staff response time by 25%.',
      'Led a team of 3 developers in migrating legacy systems to a modern React-based architecture.',
    ],
  },
  {
    name: 'New Jersey Institute of Technology',
    position: 'Teaching Assistant – Data Science Department',
    url: 'https://www.njit.edu/',
    startDate: '2023-05-01',
    endDate: '2023-12-31',
    summary:
      'Assisted in graduate-level Data Science courses with a focus on machine learning, statistical modeling, and Python programming.',
    highlights: [
      'Conducted lab sessions for Machine Learning and Data Analytics, reinforcing theoretical concepts through hands-on coding.',
      'Graded assignments and projects using tools like Python, Jupyter Notebook, and scikit-learn.',
      'Supported students through one-on-one sessions, helping them understand complex algorithms and modeling techniques.',
    ],
  },
];



export default work;
