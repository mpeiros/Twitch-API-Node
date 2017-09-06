const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

require('./routes/gamesRoutes')(app);

app.listen(5000);
