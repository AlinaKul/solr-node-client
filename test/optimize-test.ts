/**
 * Modules dependencies
 */
const figc = require('figc'),
  libPath = process.env['SOLR_CLIENT_COV'] ? '../lib-cov' : '../lib',
  solr = require(libPath + '/solr')
  import * as sassert from './sassert';

// Test suite
const config = figc(__dirname + '/config.json');
const client = solr.createClient(config.client);
[config.client.path, config.client.core].join('/').replace(/\/$/, '');

describe('Client', function () {
  describe('#optimize(callback)', function () {
    it('should optimize', function (done) {
      client.optimize(function (err, data) {
        sassert.ok(err, data);
        done();
      });
    });
  });
  describe('#optimize({softCommit : true},callback)', function () {
    it('should optimize with the option softCommit enabled', function (done) {
      client.optimize({ softCommit: true }, function (err, data) {
        sassert.ok(err, data);
        done();
      });
    });
  });
  describe('#optimize({waitSearcher : true},callback)', function () {
    it('should optimize with the option waitSearcher enabled', function (done) {
      client.optimize({ waitSearcher: true }, function (err, data) {
        sassert.ok(err, data);
        done();
      });
    });
  });
  describe('#optimize({maxSegments : 2},callback)', function () {
    it('should optimize with the option maxSegments set to 2', function (done) {
      client.optimize({ maxSegments: 2 }, function (err, data) {
        sassert.ok(err, data);
        done();
      });
    });
  });
  describe('#optimize({unknownOption : true},callback)', function () {
    it('should return a `SolrError`', function (done) {
      client.optimize({ unknownOption: true }, function (err) {
        sassert.nok(err);
        done();
      });
    });
  });
});
