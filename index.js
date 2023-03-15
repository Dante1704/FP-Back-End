//api entry
const server = require("./src/routes/app");
const { conn } = require("./src/db");


// Syncing all the models at once.
const APP_PORT = process.env.port || 3001;

/* conn.sync({ force: true }).then(() => {
  server.listen(8080);
});
 */

conn.sync({}).then(() => {
  server.listen(APP_PORT, () => {
    console.log(`%s listening at ${APP_PORT}`); // eslint-disable-line no-console
  });
});