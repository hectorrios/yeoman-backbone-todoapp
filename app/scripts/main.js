/*global yeoman-tutorial, $*/


window.YeomanTutorial = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');
    new this.Views.Todos({
      collection: new this.Collections.Todos()
    });
  }
};

$(document).ready(function () {
  'use strict';
  YeomanTutorial.init();
});
