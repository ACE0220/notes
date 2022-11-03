async function testFn() {
  let [err, data] = await this.to(Promise.reject("err"));
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
}

function to(promise) {
  return promise
    .then((data) => {
      return [null, data];
    })
    .catch((err) => [err]);
}
