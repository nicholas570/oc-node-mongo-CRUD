const express = require('express');

const app = express();
app.use((req, res) => {
  res.json({ message: 'une jolie requête' });
});

module.exports = app;
