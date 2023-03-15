//api entry
const server = require("./src/routes/app");
const { conn } = require("./src/db");


// Syncing all the models at once.
const port = process.env.APP_PORT || 3001;

/* conn.sync({ force: true }).then(() => {
  server.listen(8080);
});
 */

conn.sync({}).then(() => {
  server.listen(port, () => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});