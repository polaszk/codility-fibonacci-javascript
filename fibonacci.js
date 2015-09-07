var example1 = {
  fibonacci: function (n) {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    } else {
      return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  }
};

var example2 = {
  fibonacci: function (n) {
    return function fib(n, a, b) {
      return n > 0 ? fib(n - 1, b, a + b) : a;
    }(n, 0, 1);
  }
};

var example3 = {
  fibonacci: function (n) {
    return Math.round(Math.pow((Math.sqrt(5) + 1) / 2, Math.abs(n)) / Math.sqrt(5)) * (n < 0 && n % 2 ? -1 : 1);
  }
};
