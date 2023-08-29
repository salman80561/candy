const express = require('express');
const bodyParser = require('body-parser');
const chocolateRoutes = require('./routes/chocolateRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/chocolates', chocolateRoutes);

app.listen(port, () => {
  console.log(`Candy shop app listening at http://localhost:${port}`);
});
