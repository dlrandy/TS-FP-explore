namespace currying_demo_1{
  function curry2<T1, T2, T3>(fn:(a:T1, b:T2)=>T3) {
    return (a:T1) => (b:T2)=>fn(a,b);
  }

  function curry3<T1, T2, T3, T4>(fn: (a: T1, b: T2, c: T3) => T4) {
    return (a: T1) => (b: T2) => (c: T3) => fn(a, b, c);
}
}