const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
require('./routes/htmlRoutes')(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static( __dirname + './public' ));

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });