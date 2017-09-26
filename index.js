const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

require('./routes/gamesRoutes')(app);
require('./routes/streamsRoutes')(app);

app.listen(5000, () => {
  console.log('CORS-enabled web server listening on port 5000');
});
