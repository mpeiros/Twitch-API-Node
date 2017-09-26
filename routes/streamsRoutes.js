const axios = require('axios');
const keys = require('../config/keys');

module.exports = app => {
  app.get('/api/streams', async (req, res) => {
    const streams = await axios.get(`${keys.twitchApiUrl}/streams?client_id=${keys.twitchClientID}`);

    res.send(streams.data);
  });
};
