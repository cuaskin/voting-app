const path = require('path');

const nextConfig = {
  useFileSystemPublicRoutes: false,
  publicRuntimeConfig: {
    LOCAL_GRAPHQL_HOST: process.env.LOCAL_GRAPHQL_HOST,
    TEST_API_HOST: process.env.TEST_API_HOST,
  },
  webpack: function (config) {
    config.resolve.alias['hoc'] = path.resolve(__dirname, 'hoc');
    config.resolve.alias['store'] = path.resolve(__dirname, 'store');
    config.resolve.alias['helpers'] = path.resolve(__dirname, 'helpers');
    config.resolve.alias['layout'] = path.resolve(__dirname, 'layout');
    config.resolve.alias['components'] = path.resolve(__dirname, 'components');
    return config;
  },
};

module.exports = nextConfig;
