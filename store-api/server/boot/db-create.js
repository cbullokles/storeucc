'use strict';

module.exports = function(app) {
  var dsMySQL = app.dataSources.mysqlstore;
  dsMySQL.autoupdate(function(error) {
    console.log('Database updated');
  });
};
