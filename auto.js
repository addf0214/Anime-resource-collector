var Database = require("./src/database.js");
var sites = require("./websites/index.js");

var database = new Database();
database.initialize();

Object.keys(sites).forEach((domain) => {
  sites[domain].fetchNew(database, () => {
    database.updateRecord();
  });
});
