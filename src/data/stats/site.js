import dayjs from 'dayjs';

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
  description: null,
  stargazers_count: 0,
  subscribers_count: 1,
  forks_count: 0,
  open_issues_count: 0,
  pushed_at: "2024-10-28T21:49:06Z",
};

// Extract relevant data from the GitHub response
const data = [
  {
    label: 'Stars this repository has on GitHub',
    key: 'stargazers_count',
    value: githubResponse.stargazers_count || 0,
    link: `${githubResponse.html_url}/stargazers`,
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    value: githubResponse.subscribers_count || 0,
    link: `${githubResponse.html_url}/stargazers`,
  },
  {
    label: 'Number of forks',
    key: 'forks_count',
    value: githubResponse.forks_count || 0,
    link: `${githubResponse.html_url}/network`,
  },
  {
    label: 'Number of spoons',
    value: '0',
  },
  {
    label: 'Number of linter warnings',
    value: '0',
  },
  {
    label: 'Open GitHub issues',
    key: 'open_issues_count',
    value: githubResponse.open_issues_count || 0,
    link: `${githubResponse.html_url}/issues`,
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    value: dayjs(githubResponse.pushed_at).format('MMMM DD, YYYY'), // Format date
    link: `${githubResponse.html_url}/commits`,
  },
  {
    label: 'Lines of JavaScript powering this website',
    value: '2150',
    link: `${githubResponse.html_url}/graphs/contributors`,
  },
];

export default data;
