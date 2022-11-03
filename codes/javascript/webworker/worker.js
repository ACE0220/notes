function fb(n) {
  if (n == 1 || n == 2) return 1;
  return fb(n - 1) + fb(n - 2);
}
console.time("fb1");
self.postMessage(fb(43));
console.timeEnd("fb1");
