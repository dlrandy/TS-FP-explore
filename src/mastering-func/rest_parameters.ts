namespace rest_parameters_demo_1 {

  function add(foo: number, bar: number, foobar: number = 0): number {
      return foo + bar + foobar;
  }

}

namespace rest_parameters_demo_1 {

  function add(...foo: number[]): number {
      return foo.reduce((s,n) => s + n,0);
  }
  // compile result
//   "use strict";
// function add() {
//     var foo = [];
//     for (var _i = 0; _i < arguments.length; _i++) {
//         foo[_i] = arguments[_i];
//     }
//     return foo.reduce(function (s, n) { return s + n; }, 0);
// }

  add(); // 0
  add(2); // 2
  add(2, 2); // 4
  add(2, 2, 2); // 6
  add(2, 2, 2, 2); // 8
}

namespace rest_parameters_demo_2 {

  function add(foo: number[]): number {
      let result = 0;
      for (let i = 0; i < foo.length; i++) {
          result += foo[i];
      }
      return result;
  }
  
  add(); // Error, expected 1 arguments, but got 0.
  add(2); // Error, '2' is not assignable to parameter of type 'number[]'.
  add(2, 2); // Error, expected 1 arguments, but got 2.
  add(2, 2, 2); // Error, expected 1 arguments, but got 3.
  
  add([]); // returns 0
  add([2]); // returns 2
  add([2, 2]); // returns 4
  add([2, 2, 2]); // returns 6
  
}