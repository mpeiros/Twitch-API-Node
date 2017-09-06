const axios = require('axios');
const keys = require('../config/keys');

module.exports = app => {
  app.get('/api/games/top', async (req, res) => {
    const topGames = await axios.get(`https://api.twitch.tv/kraken/games/top?client_id=${keys.twitchClientID}`);

    res.send(topGames.data);
  });
};
