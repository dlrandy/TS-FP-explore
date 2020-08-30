namespace imperative_vs_declarative_demo_1 {
  interface Result {
    id: number;
    result: number;
  }

  const results: Result[] = [
    { id: 1, result: 64 },
    { id: 2, result: 87 },
    { id: 3, result: 89 }
  ];

  function avg(arr: Result[]) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      total += element.result;
    }
    return total / arr.length;
  }

  console.log(avg(results));


}

namespace imperative_vs_declarative_demo_2 {
  interface Result {
    id: number;
    result: number;
  }

  const results: Result[] = [
    { id: 1, result: 64 },
    { id: 2, result: 87 },
    { id: 3, result: 89 }
  ];

  const add = (a: number, b: number) => a + b;
  const divide = (a: number, b: number) => a / b;
  const aggregation = (arr: number[]) => arr.reduce(add);
  // const average = (arr: Result[]) =>
  //   divide(arr.reduce((s,n) => add(s, n.result),0), arr.length)

  const average = (arr: number[]) => divide(aggregation(arr), arr.length);
  console.log(average(results.map(({result}) => result)));
  

}