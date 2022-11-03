const array = [1, 2, 3, 4, 5];

function getExtremeElements(array){

const firstElement = array[0];
const secondElement = array[4];
const lastElement = array.slice(firstElement, secondElement);


console.log(lastElement);

}
// Change code below this line
