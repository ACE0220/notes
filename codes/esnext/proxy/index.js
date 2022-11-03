 /**
     * 代理的基本作用
     */
  let star = {
    name: "jj",
    age: 18,
    phone: 1959859825,
  };

  let proxy = new Proxy(star, {
    get: function (target, key, receiver) {
      if (key === "phone") {
        return "13242349";
      }
      // return target[key];
      return Reflect.get(target, key, receiver);
    },
  });

  console.log(proxy.phone);
  console.log(proxy.name);

  /**
   * 使用
   */

  const arr = [1, 2, 3, 4];

  function createArr(arr) {
    let handle = {
      get(target, index, receiver) {
        let newIndex = Number(index);
        if (newIndex < 0) {
          newIndex += newIndex + target.length;
        }
        return Reflect.get(target, newIndex, receiver);
      },
    };
    return new Proxy(arr, handle);
  }

  const newArr = createArr(arr);

  console.log(newArr[-1]);