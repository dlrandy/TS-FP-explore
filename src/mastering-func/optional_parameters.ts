namespace optional_parameters_demo_1{
  function add(foo:number, bar:number, foobar:number):number {
    return foo + bar + foobar;
  }
  add();
  add(2,2)
  add(2,2,2)
}
namespace optional_parameters_demo_2{
  function add(foo:number, bar:number, foobar?:number):number {
    return foo + bar + foobar;
  }
  add();
  add(2,2)
  add(2,2,2)
}