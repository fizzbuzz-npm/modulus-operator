"use strict"
const toInt = require('to-integer')

function modulus(a, b){
    return toInt(a) % toInt(b)
}

module.exports = modulus;
