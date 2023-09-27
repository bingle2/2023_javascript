// 1. String concatenation
console.log ('my' + ' cat');
console.log('1' + 2);
console.log("elie's \n\t book");

// 2. Numeric operation
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increament and decreament operators

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;     //x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators: || , &&, !
const value1 = false;
const value2 = 4 < 2;

console.log(value1 || value2);

console.log(value1 && value2);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name == 'ellie')
{
    console.log('Welcome, Ellie!');
}
else if (name === 'coder')
{
    console.log('You are amazing coder');
}
else
{
    console.log('unknown');
}

// if ?
// else :
// case else if를 반복 사용할 때
// for(begin; condition; step)