(() => {
  'use strict';

  // Only require top level module. Browserify will walk
  // the dependency graph and load all needed modules.
  let Eddystone = require('./eddystone-advertising.js');

  /**
   * The global eddystone instance.
   *
   * @global
   */
  global.eddystone = new Eddystone();
})();
