class MyPromise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(executor) {
    this.status = MyPromise.PENDING;
    this.result = null;
    this.resolveCallbacks = [];
    this.rejectCallbacks = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(value) {
    if (this.status === MyPromise.PENDING) {
      this.status = MyPromise.FULFILLED;
      this.result = value;
      while (this.resolveCallbacks.length) {
        const cb = this.resolveCallbacks.shift();
        cb(this.result);
      }
    }
  }
  reject(reason) {
    if (this.status === MyPromise.PENDING) {
      this.status = MyPromise.REJECTED;
      this.result = reason;
      while (this.rejectCallbacks.length) {
        const cb = this.rejectCallbacks.shift();
        cb(this.result);
      }
    }
  }
  then(onFullfiled, onRejected) {
    let p1 = new Promise((resolve, reject) => {
      onFullfiled = typeof onFullfiled === "function" ? onFullfiled : () => {};
      onRejected = typeof onRejected === "function" ? onRejected : () => {};
      if (this.status === MyPromise.FULFILLED) {
        setTimeout(() => {
          let x = onFullfiled(this.result);
          if (x instanceof MyPromise) {
            x.then(resolve, reject);
          } else {
            resolve(x);
          }
        });
      } else if (this.status === MyPromise.REJECTED) {
        setTimeout(() => {
          onRejected && onRejected(this.result);
        });
      } else {
        this.resolveCallbacks.push(onFullfiled);
        this.rejectCallbacks.push(onRejected);
      }
    });
    return p1;
  }
}

module.exports = MyPromise;
