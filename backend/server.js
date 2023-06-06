const app = require('./app');

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});