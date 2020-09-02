module _higher_order_functions_demo_one{
function addDelay(msg: string, ms: number) {
  return () => {
    setTimeout(() => {
      console.log(msg);
      
    }, ms);
  }
}
const delayedSayHello = addDelay('hello HOC', 200);
delayedSayHello();
}

module _higher_order_functions_demo_two{
  function addDelay(func:() => void, ms: number) {
    return () => {
      setTimeout(() => {
        func();
      }, ms);
    }
  }
  function sayHello() {
    console.log('hello world');
    
  }

  const delayedSayHello = addDelay(sayHello, 500);
  delayedSayHello();
}