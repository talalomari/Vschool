var uuid = require("uuid");

var animal = [{
    id: uuid.v4(),
    name: "lion",
    age :10,
    istasty:false
}, {
    id: uuid.v4(),
    name: "tiger",
    age :10,
    istasty:false
}, {
    id: uuid.v4(),
    name: "eagle",
    age :10,
    istasty:false
}, ]

module.exports = animal;