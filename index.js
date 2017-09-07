const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

require('./routes/gamesRoutes')(app);

app.listen(5000, () => {
  console.log('CORS-enabled web server listening on port 5000');
});
