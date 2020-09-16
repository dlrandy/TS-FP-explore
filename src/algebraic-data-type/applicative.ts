namespace applicative_demo {
  class Container<T> {
    /**
     * of
     */
    public static of<TVal>(val:TVal) {
      return new Container(val);
    }
    private _value!:T;
    constructor(val:T) {
      this._value = val;
    }
    /**
     * map
     */
    public map<TMap>(fn: (val:T)=>TMap) {
      return new Container<TMap>(fn(this._value));
    }

    /**
     * ap
     */
    public ap<TMap>(c:Container<(val:T) => TMap>) {
      return c.map(fn => this.map(fn))
    }

  }

  let double = (x: number) => x + x;
  let numberContainer = Container.of(3);
  let functionContainer = Container.of(double);

  numberContainer.map(double);
  numberContainer.ap(functionContainer);

}