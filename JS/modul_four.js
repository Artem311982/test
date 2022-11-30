const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460, students: [Anna, Manna] },
    { name: 'Dragon breath', price: 780, students: [Den, Fin] },
    { name: 'Stone skin', price: 520, students: [Sollo, Mia] },
  ],
};
console.log(atTheOldToad.potions.flatMap(potion.students));
