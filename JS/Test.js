const objC = {
  a: 1,
};

const objB = Object.create(objC);

objB.b = 2;

console.log(objB);
