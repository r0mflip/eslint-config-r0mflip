/* eslint no-unused-vars: 0 */

// no var
var temp1 = true;

// keyword/block spacing - 3 errors
if(temp1 === temp2){
  console.log('something');
}

// == comparision - 1 error
if (temp1 == false) {
  console.log('something');
}

// no semi-colan - 1 error
const obj = {
  some: 'some',
}

// no object comma dangle - 1 error
const obj1 = {
  some: 'some'
};

// object key quotes - 1 error
const obj2 = {
  'some': 'some',
};

// no array comma dangle, no space before ] - 2 errors
const arr = [1, 2, 3, ];

// comma spacing array - 1 error
const arr2 = [1, 2,3];

// comma spacing object - 1 error
const obj3 = {op:1};

// object spacing - 2 errors
const obj4 = { op: 1 };

// empty 3 lines




// end of lines


// dont use template stings unnecessorily - 1 error
const str = `help`;
