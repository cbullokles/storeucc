'use strict';

module.exports = function(app) {
  var myDB = app.dataSources.pgstoreucc;
  myDB.autoupdate(function(result) {
    console.log('DB Created');
    console.log(result);
  });
};
