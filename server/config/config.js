require('dotenv').config();

const config = {
  mongodbURI: process.env.MONGODB_URI,
  port: process.env.PORT || 3000,
};

module.exports = config;
