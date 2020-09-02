namespace func_declaration_expressions {
  console.log(greetNamed('ts'));
  console.log(greetUnnamed('ts'));
  
  function greetNamed(name:string):string {
    return `Hi! ${name}`;
  }

  let greetUnnamed = function(name:string): string {
    return `Hi! ${name}`;
  }
  
}