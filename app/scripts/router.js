'use strict';
/* global Jtw, Ember, DS */

Jtw.ApplicationAdapter = DS.FixtureAdapter.extend();

Jtw.Router.map(function() {
    this.resource('jtw', {path: '/'});
});

Jtw.JtwRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('rtest');
    }
});