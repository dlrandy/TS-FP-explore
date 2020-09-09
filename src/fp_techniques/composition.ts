namespace composition_demo_1{
  const trim = (s: string) => s.trim();
  const capitalize = (s: string) => s.toUpperCase();
  
  const trimAndCapitalize = (s: string) => capitalize(trim(s));
  const result = trimAndCapitalize('  Hello wolrd  ');
  console.log(result);
  
  const compose = <T>(f:(x:T)=>T, g:(y:T)=>T) => (x:T)=> f(g(x));
  const trimAndCapitalize2 = compose(capitalize, trim);
  const result2 = trimAndCapitalize2('  Hello wolrd  ');
  console.log(result2);
  
}

namespace composition_demo_2{
  const compose = <T1, T2, T3>(f:(x:T1)=>T2, g:(x:T3)=>T1) => (x:T3)=> f(g(x));
  function func1(arg: string) {
    return arg += "A";
}

function func2(arg: string) {
    return arg += "B";
}

const composed1 = compose(func1, func2);
const composed2 = compose(func1, func2);
const composed3 = compose(composed1, composed2);

const result = composed3("");
console.log(result);
}

namespace composition_demo_3{
  const compose = <T1, T2, T3, T4>(
    f:(x:T3)=>T4,
    g:(x:T2)=>T3,
    h:(x:T1)=>T2,

  ) => (x:T1) => f(g(h(x)));

  function func1(arg: string) {
    return arg += "A";
}

function func2(arg: string) {
    return arg += "B";
}

function func3(arg: string) {
    return arg += "C";
}

const composed = compose(func1, func2, func3);
const result = composed("");
console.log(result);

const composeMany = <T>(...functions:Array<(arg:T) => T>) => (arg:any) =>
  functions.reduce((prev, curr) =>curr(prev), arg );

}







