/*global yeoman-tutorial, $*/


window.yeoman-tutorial = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');
    new this.Views.TodosView({
      collection: new this.Collections.Todos()
    });
  }
};

$(document).ready(function () {
  'use strict';
  yeoman-tutorial.init();
});
