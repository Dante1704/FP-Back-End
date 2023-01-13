//api entry
const server = require("./src/app");
const { conn } = require("./src/db");
const {PGPORT} = process.env;

// Syncing all the models at once.
// const port = process.env.PGPORT || 3001;

conn.sync({ force: true }).then(() => {
  server.listen(PGPORT, () => {
    console.log(`%s listening at ${PGPORT}`); // eslint-disable-line no-console
  });
});
