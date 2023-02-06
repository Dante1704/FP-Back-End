//api entry
const server = require("./src/routes/app");
const { conn } = require("./src/db");


// Syncing all the models at once.
//const PORT = process.env.port || 3001;

conn.sync({ force: true }).then(() => {
  server.listen(8080);
});
