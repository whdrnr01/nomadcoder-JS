const calculator = {
    add: (a, b) => {
        console.log(a + b);
    },
    minus: (a, b) => {
        console.log(a - b);
    },
    multiply: (a, b) => {
        console.log( a * b);
    },
    divide: (a, b) => {
        console.log( a / b);
    },
    square: (a) => {
        console.log( a ** a);
    }
}

calculator.add( 5, 3);
calculator.minus( 20, 5);
calculator.multiply( 3, 5);
calculator.divide( 30, 5);
calculator.square(8);