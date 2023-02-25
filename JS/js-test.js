const hotel = {
  username: 'Resort hotel',
  showThis() {
    function foo(jkl) {
      // Стрілки запам'ятовують контекст під час оголошення
      // з батьківської області видимості
      console.log('this in foo: ', jkl);
    }

    console.log(foo('kll;'));
    console.log('this in showThis: ', this);
  },
};

hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}
