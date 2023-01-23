const a = 'Президент Владимир Зеленский призвал'.toUpperCase();

function slugify(title) {
  // Change code below this line
  let a = title.toUpperCase();
  a = a.split(' ');
  a = a.join('-');

  return a;
  // Change code above this line
}

console.log(slugify('Президент Владимир Зеленский призвал'));
