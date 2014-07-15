'use strict';
/* global Jtw, DS */

Jtw.Rtest = DS.Model.extend({
    width: DS.attr('number'),
    height: DS.attr('number'),
    url: DS.attr('string'),
    title: DS.attr('string')
});

Jtw.Rtest.FIXTURES = [
    {
        id: 1,
        width: 320,
        height: 480,
        url: 'test.html',
        title: 'Phone - Portrait'
    },
    {
        id: 2,
        width: 480,
        height: 320,
        url: 'test.html',
        title: 'Phone - Landscape'
    },
    {
        id: 3,
        width: 768,
        height: 1024,
        url: 'test.html',
        title: 'Tablet - Portrait'
    },
    {
        id: 4,
        width: 1024,
        height: 768,
        url: 'test.html',
        title: 'Tablet - Landscape'
    },
    {
        id: 5,
        width: 1200,
        height: 1024,
        url: 'test.html',
        title: 'Desktop'
    }
];