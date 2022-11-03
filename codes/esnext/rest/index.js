function date() {
    console.log(arguments);
  }
  date(1, 2, 3);

  function date1(...args) {
    console.log(args);
  }
  date1(1, 2, 3);

  function date2(a, b, ...args) {
    console.log(a, b, args);
  }

  date2(1, 2, 3, 4, 5);