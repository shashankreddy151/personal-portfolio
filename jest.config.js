const config = {
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy', // Use identity-obj-proxy for CSS modules
    '^.+\\.md$': 'markdown-to-jsx',
  },
};

module.exports = config;
