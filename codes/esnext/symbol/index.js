let s = Symbol();
    console.log(s, typeof s);

    let s1 = Symbol("ssk");
    console.log(s1);

    let s2 = Symbol("ssk");
    console.log(s1 === s2);

    let s3 = Symbol.for("s3");
    let s4 = Symbol.for("s3");

    console.log(s3 === s4);

    let game = {};

    // 这种情况下可能导致原有up函数被覆盖
    // game.up = function () {
    //   console.log("up");
    // };

    let methods = {
      up: Symbol(),
      down: Symbol(),
    };

    game[methods.up] = function () {
      console.log("up");
    };
    game[methods.down] = function () {
      console.log("down");
    };

    let youxi = {
      name: "狼人杀",
      [Symbol("say")]: function () {
        console.log("我要发言");
      },
    };
    console.log(youxi);

    class Person {
      static [Symbol.hasInstance]() {
        console.log("检测类型");
        return true;
      }
    }

    let o = {};

    console.log(o instanceof Person);