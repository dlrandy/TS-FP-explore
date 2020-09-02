namespace named_function {
  function greet(name?: string): string {
    if (name) {
      return `Hi! ${name}`;
    }
    return 'Hi!';
  }
  function greet2(name?: string) {
    if (name) {
      return `Hi! ${name}`;
    }
    return 'Hi!';
  }


}


namespace anonymous_function_demo_1 {
  let greet = function (name?: string): string {
    if (name) {
      return `Hi! ${name}`;
    }
    return 'Hi!';
  }
}

namespace anonymous_function_demo_2 {
  let greet = (name?: string): string => {
    if (name) {
      return `Hi! ${name}`;
    }
    return 'Hi!';
  }
  let greet2: (name?: string) => string = function (name?: string): string {
    if (name) {
      return `Hi! ${name}`;
    }
    return 'Hi!';
  }
}

namespace anonymous_function_demo_4 {
  function add(
    a: number,
    b: number,
    callback: (result: number) => void) {
      callback(a, b);
  }
}