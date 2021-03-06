'use strict';

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('./public'));

app.listen(PORT, () => {
  console.log('Screaming from the void on PORT 3001');
});
