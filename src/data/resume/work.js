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
    name: 'National Small Industries Corporation Limited',
    position: 'Project Intern',
    url: 'https://www.nsic.co.in/Home/Index', // Update with the actual URL if available
    startDate: '2019-01-01',
    endDate: '2019-04-01',
    summary: 'Developed an advanced machine learning system to predict machinery failures, successfully reducing unplanned downtime by 30% through accurate forecasting of breakdowns.',
    highlights: [
      'Designed and implemented real-time predictive models to analyze sensor data, enabling proactive maintenance decisions.',
      'Key Skills: Machine Learning, Predictive Analytics, Python, TensorFlow, Time-Series Analysis.',
      'Skills: Machine Learning, Predictive Analytics, Python, TensorFlow.',
    ],
  },
  {
    name: 'Electronics Corporation of India Limited (ECIL)',
    position: 'Student Intern',
    url: 'https://www.ecil.co.in/', // Update with the actual URL if available
    startDate: '2018-07-01',
    endDate: '2018-11-01',
    summary: 'Spearheaded the development of an AI-powered traffic management system, achieving a remarkable 20% improvement in traffic flow.',
    highlights: [
      'Implemented advanced computer vision techniques to accurately detect vehicle density and optimize traffic management.',
      'Leveraged reinforcement learning to dynamically adjust signal timings based on real-time traffic conditions, enhancing overall efficiency.',
      'Collaborated with a multidisciplinary team to successfully deploy the solution using OpenCV and Python, ensuring seamless integration.',
      'Key Skills: Artificial Intelligence (AI), Reinforcement Learning, Computer Vision, OpenCV, Python.',
    ],
  },
];

export default work;
