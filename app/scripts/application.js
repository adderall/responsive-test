/* global Ember, DS, Jtw */
window.Jtw = Ember.Application.create();

Jtw.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'jtw-responsive-test'
});
