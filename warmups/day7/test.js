hundreds: function(number) {
    base_function(Math.floor(number / 100), 'CD', 'CM', 'D', 'C');
    return this.tens(number % 100);
},