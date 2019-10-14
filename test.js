const test = require('ava');
const isMultipleOf = require("./index.js");

test('numbers', t => {
    t.is(isMultipleOf(4, 2), 0);
    t.is(isMultipleOf(98, 74), 24);
});

test('string', t => {
    t.is(isMultipleOf("9", "3"), 0);
    t.is(isMultipleOf("47", "13"), 8);
});
