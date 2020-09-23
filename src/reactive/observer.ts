namespace observer_pattern{
  class Listener<T> {
    /**
     * update
     */
    public update: (message: T) => void;
    constructor(fn: (message:T)=>void ) {
      this.update = fn;
    }
  }
class Producer<T> {
  private _listeners: Listener<T>[] = [];
  /**
   * add
   */
  public add(listner: Listener<T>) {
    this._listeners.push(listner);
  }

  /**
   * remove
   */
  public remove(listener: Listener<T>) {
    this._listeners = this._listeners.filter(
      l => l !== listener
    )
  }

  /**
   * notify
   */
  public notify(message: T) {
    this._listeners.forEach(l => l.update(message))
  }
}

const listerner1 = new Listener(
  (msg: string) => console.log(`Listener 1: ${msg}`)
);

const listerner2 = new Listener(
  (msg: string) => console.log(`Listener 2: ${msg}`)
);

const notify = new Producer<string>();
notify.add(listerner1);
notify.add(listerner2);
notify.notify("Hello World!");

}