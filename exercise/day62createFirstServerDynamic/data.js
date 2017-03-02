var uuid = require("uuid");

var animal = [{
    id: uuid.v4(),
    name: "loin",
    age :10,
    istasty:false
}, {
    id: uuid.v4(),
    firstName: "tiger",
    age :10,
    istasty:false
}, {
    id: uuid.v4(),
    firstName: "eagle",
    age :10,
    istasty:false
}, ]

module.exports = animal;