const axios = require('axios');
const keys = require('../config/keys');

module.exports = app => {
  app.get('/api/games/top', async (req, res) => {
    const games = await axios.get(`${keys.twitchApiUrl}/games/top?limit=30&client_id=${keys.twitchClientID}`);

    res.send(games.data);
  });
};
