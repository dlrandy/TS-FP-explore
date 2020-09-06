namespace callbacks_and_higher_order_functions {
  var myCallback = function(){
    console.log('foo');
  }
  function bar(cb:() => void) {
    console.log('bar');
    cb();
  }
  bar(myCallback);
  bar(() => {
    console.log('foo');
  })
}