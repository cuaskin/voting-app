const nextRoutes = require('next-routes');
const routes = (module.exports = nextRoutes());

routes.add({
  name: 'index',
  pattern: '/',
});

routes.add({
  name: 'profile',
  pattern: '/profile/:id',
});

exports.Router = routes.Router;
