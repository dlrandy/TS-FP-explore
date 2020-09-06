namespace asynchronous_generators_demo1{
  let counter = 0;
  function doSomethingAsync() {
    return new Promise<number>(r => {
      setTimeout(() => {
        counter += 1;
        r(counter)
      }, 1000);
    });
  }

  async function* g1(){
    yield await doSomethingAsync();
    yield await doSomethingAsync();
    yield await doSomethingAsync();
  }

  let i: AsyncIterableIterator<number> = g1();

  i.next().then((n) => console.log(n)); // { value: 1, done: false }
  i.next().then((n) => console.log(n)); // { value: 2, done: false }
  i.next().then((n) => console.log(n)); // { value: 3, done: false }
  i.next().then((n) => console.log(n)); // { value: 3, done: false }
  i.next().then((n) => console.log(n)); // { value: 3, done: false }
/**{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true }
{ value: undefined, done: true } */
}