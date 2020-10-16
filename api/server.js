const app = require('./config/express')();
const port = app.get('port');

// Running the application at custom port
app.listen(port, () => {
  console.log(`The API is running at port: ${port}`)
});