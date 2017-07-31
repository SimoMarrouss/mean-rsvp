module.exports = {
  AUTH0_DOMAIN: 'mmarrouss.eu.auth0.com',
  AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', /* likely 'http://localhost:8083/api/' */
  MONGO_URI: process.env.MONGO_URI || 'mongodb://root:root@localhost:27017/rsvp'
};