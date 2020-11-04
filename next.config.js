const path = require('path');

const nextConfig = {
  useFileSystemPublicRoutes: false,
  webpack: function (config) {
    config.resolve.alias['hoc'] = path.resolve(__dirname, 'hoc');
    config.resolve.alias['store'] = path.resolve(__dirname, 'store');
    config.resolve.alias['helpers'] = path.resolve(__dirname, 'helpers');
    return config;
  },
};

module.exports = nextConfig;
