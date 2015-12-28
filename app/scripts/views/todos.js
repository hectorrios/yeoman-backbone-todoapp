/*global YeomanTutorial, Backbone, JST*/

YeomanTutorial.Views = YeomanTutorial.Views || {};

(function () {
  'use strict';

  YeomanTutorial.Views.Todos = Backbone.View.extend({

    el: '#todos-app',

    template: JST['app/scripts/templates/todos.ejs'],

    // tagName: 'div',

    // id: '',

    className: '',

    events: {
      'submit': 'createTodo'
    },

    initialize: function () {

      this.render();

      this.listenTo(this.collection, 'add', this.addTodoItem);
      this.listenTo(this.collection, 'reset', this.addAllTodoItems);

      this.collection.fetch();
    },

    render: function () {
      this.$el.html(this.template());

      return this;
    },

    createTodo: function(event) {
      event.preventDefault();
      var title = this.$('#new-todo').val().trim();

      if (title) {
        this.collection.create(new YeomanTutorial.Models.Todo({
          'title': title
        }));
      }

      $('#new-todo').val('');
    },

    addTodoItem: function (todoItem) {
      var view = new YeomanTutorial.Views.Todo({
        model: todoItem
      });
      this.$('ul').append(view.render().el);
    },

    addAllTodoItems: function () {
      this.collection.each(this.addTodoItem, this)
    }

  });

})();
