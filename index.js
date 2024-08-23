const app = require('./app');

if (process.env.NODE_ENV !== 'test') {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;
