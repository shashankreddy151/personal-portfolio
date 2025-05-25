// Placeholder SVG for project image
// This will render a simple project screenshot placeholder

const ProjectPlaceholder = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#233554" />
      <rect x="50" y="50" width="500" height="40" rx="5" fill="#355070" />
      <rect x="50" y="120" width="200" height="30" rx="5" fill="#355070" />
      <rect x="50" y="170" width="300" height="30" rx="5" fill="#355070" />
      <rect x="50" y="220" width="250" height="30" rx="5" fill="#355070" />
      <circle cx="500" cy="200" r="50" fill="#64ffda" fillOpacity="0.2" />
    </svg>
  );
};

export default ProjectPlaceholder;
