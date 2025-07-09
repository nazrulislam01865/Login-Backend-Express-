const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routes/index');
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});