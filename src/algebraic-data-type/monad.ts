namespace monads_demo {
  class Nothing<T> {
    /**
     * static of<>
     */
    public static of<TVal>(val?:TVal) {
      return new Nothing(val);
    }
    private _value: T|undefined;
    constructor(val?:T) {
      this._value = val;
    }

    /**
     * map<TMap>
     */
    public map<TMap>(fn:(val:T) => TMap) {
      if (this._value !== undefined) {
        return new Nothing<TMap>(fn(this._value));
      } else {
        return new Nothing<TMap>(this._value as any);
      }
    }
  }

  class MayBe<T> {

    /**
     * static of
     */
    public static of<TVal>(val?:TVal) {
      return new MayBe(val);
    }
    private _value!:T;
    constructor(val?:T) {
      if (val) {
         this._value = val;
      }
    }

    /**
     * isNothing
     */
    public isNothing() {
      return (this._value === null || this._value === undefined);
    }

    /**
     * map<>
     */
    public map<TMap>(fn:(val:T)=>TMap) {
      if (this.isNothing()) {
        return new MayBe<TMap>();
      } else {
        return new MayBe<TMap>(fn(this._value));
      }
    }

    /**
     * ap<TMap>
     */
    public ap<TMap>(c: MayBe<(val:T) => TMap>) {
      return c.map(fn => this.map(fn));
    }

    /**
     * join
     */
    public join() {
      return this.isNothing() ? Nothing.of(this._value) : this._value;
    }

    /**
     * chain<TMap>
     */
    public chain<TMap>(fn:(val:T)=>TMap) {
      return this.map(fn).join();
    }
  }

  let maybeOfNumber = MayBe.of(5);
  maybeOfNumber.map((a) => a * 2);
  // MayBe { value: 10 }

  maybeOfNumber.join();
  // 5

  maybeOfNumber.chain((a) => a * 2);
  // 10

  let maybeOfMaybeOfNumber = MayBe.of(MayBe.of(5));
  // MayBe { value: MayBe { value: 5 } }

  maybeOfMaybeOfNumber.map((a) => a.map(v => v * 2));
  // MayBe { value: MayBe { value: 10 } }

  maybeOfMaybeOfNumber.join();
  // MayBe { value: 5 }

  maybeOfMaybeOfNumber.chain((a) => a.map(v => v * 2));
  // MayBe { value: 10 }
}