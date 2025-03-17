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
    position: 'Full Stack Java Developer',
    url: 'https://www.mayoclinic.org/',
    startDate: '2024-02-01',
    endDate: null, // Ongoing as of March 17, 2025
    summary: 'Developed real-time data streaming and microservices solutions, improving patient care responsiveness for 1,000+ daily records.',
    highlights: [
      'Designed and developed a real-time data streaming solution using Java, Spring Boot, and Apache Kafka for event-driven microservices.',
      'Implemented Kafka Producers and Consumers in Java, enhancing data synchronization across distributed systems.',
      'Built scalable Java-based microservices with Spring Boot and Kafka Streams, improving system responsiveness by 20%.',
      'Deployed applications on AWS EC2 and S3, leveraging AWS CodePipeline and CodeCommit for CI/CD automation.',
    ],
  },
  {
    name: 'Virinchi Technologies',
    position: 'Jr. Full Stack Java Developer',
    url: 'https://www.virinchi.com/', // Assumed based on company name
    startDate: '2020-08-01',
    endDate: '2022-09-30',
    summary: 'Developed event-driven microservices and real-time streaming solutions, supporting scalable application performance.',
    highlights: [
      'Built and integrated Apache Kafka with Spring Boot microservices for real-time data streaming and asynchronous processing.',
      'Implemented Kafka Producers and Consumers to handle high-throughput messaging, optimizing distributed system efficiency.',
      'Deployed applications using AWS EC2 and S3, with AWS Lambda automating event-driven tasks for improved scalability.',
      'Managed version control with AWS CodeCommit and streamlined CI/CD workflows using Jenkins, reducing deployment times.',
    ],
  },
  {
    name: 'NeoApp Technologies',
    position: 'Java Developer',
    url: 'https://www.neoapptechnologies.com/', // Placeholder; no real URL provided
    startDate: '2018-09-01',
    endDate: '2020-07-31',
    summary: 'Developed Java-based applications and enhanced system reliability through robust backend solutions.',
    highlights: [
      'Built dynamic web applications using Java, Servlets, JSP, and JDBC, interfacing with Oracle 10g for data persistence.',
      'Designed and consumed SOAP web services with WSDL and JAXB, improving system interoperability.',
      'Implemented logging and debugging with Log4j, ensuring efficient issue resolution and system stability.',
      'Managed code versioning with SVN, collaborating with teams to deliver production-ready solutions.',
    ],
  },
];

export default work;
