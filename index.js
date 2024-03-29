//api entry
const server = require("./src/app");
const { conn } = require("./src/db");

// Syncing all the models at once.
/* const port = process.env.APP_PORT || 3001; */

/* conn.sync({}).then(() => {
  server.listen(port, () => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
}); */

const $PORT = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({}).then(() => {
  server.listen($PORT);
});