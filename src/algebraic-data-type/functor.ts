namespace functor_demo_1{
  class Container<T> {
    private _value:T;

    constructor(val:T) {
      this._value = val;
    }
    /** 
     * map
     */
    public map<TMAP>(fn:(val:T)=>TMAP) {
      return new Container<TMAP>(fn(this._value));
    }
  }

  const double = (x: number) => x + x;

  const container = new Container(3);
 const containers = container.map(double);
 console.log(containers);
 


}