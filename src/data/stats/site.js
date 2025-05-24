import dayjs from 'dayjs'; // Import dayjs for date formatting

// Static GitHub response data for initial display
const githubResponse = {
  id: 865166819,
  node_id: "R_kgDOM5Fl4w",
  name: "personal-portfolio",
  full_name: "shashankreddy151/personal-portfolio",
  private: false,
  owner: {
    login: "shashankreddy151",
  },
  html_url: "https://github.com/shashankreddy151/personal-portfolio",
  description: "Personal portfolio website built with React and Vite",
  stargazers_count: 0,
  subscribers_count: 1,
  forks_count: 0,
  open_issues_count: 0,
  pushed_at: "2024-10-28T21:49:06Z", // ISO date format
};

// Extract relevant data from the GitHub response and apply transformations
const data = [
  {
    label: 'Stars this repository has on GitHub',
    key: 'stargazers_count',
    value: githubResponse.stargazers_count || 0, // Default to 0 if undefined
    link: `${githubResponse.html_url}/stargazers`,
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    value: githubResponse.subscribers_count || 0, // Default to 0 if undefined
    link: `${githubResponse.html_url}/stargazers`,
  },
  {
    label: 'Number of forks',
    key: 'forks_count',
    value: githubResponse.forks_count || 0, // Default to 0 if undefined
    link: `${githubResponse.html_url}/network`,
  },
  {
    label: 'Number of spoons',
    value: '0', // This is a placeholder for humorous purposes
  },
  {
    label: 'Number of linter warnings',
    value: '0', // Default value for linter warnings
  },
  {
    label: 'Open GitHub issues',
    key: 'open_issues_count',
    value: githubResponse.open_issues_count || 0, // Default to 0 if undefined
    link: `${githubResponse.html_url}/issues`,
  },  {
    label: 'Last updated at',
    key: 'pushed_at',
    value: dayjs(githubResponse.pushed_at).format('MMMM DD, YYYY [at] h:mm A'), // Format: "Month Day, Year at Time"
    link: `${githubResponse.html_url}/commits`, // Link to the GitHub commits page
  },
  {
    label: 'Lines of JavaScript powering this website',
    value: '2150', // Static value for JavaScript lines
    link: `${githubResponse.html_url}/graphs/contributors`, // Link to contributors page
  },
];

export default data; // Export the processed data
