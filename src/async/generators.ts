namespace generators_demo {
  function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return 5;
  }
  let bar = foo();
  bar.next();
  bar.next();
  bar.next();
  bar.next();
  bar.next();
  bar.next();
}

namespace generators_demo2{
  function* foo(){
    let i = 1;
    while (true) {
      yield i++;
    }
  }

  let bar = foo();
  bar.next();
  bar.next();
  bar.next();
  bar.next();
  bar.next();
  bar.next();
  bar.next();
}






