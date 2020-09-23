import { of, from, interval, fromEvent,bindCallback,bindNodeCallback } from 'rxjs';
import fetch from "node-fetch";
import * as fs from "fs";

namespace observable_demo_6 {

  const observableFactory = bindNodeCallback(fs.readFile);
  const observable = observableFactory("./roadNames.txt");
  
  const subscription = observable.subscribe(
      (value) => console.log(value.toString())
  );
  
  subscription.unsubscribe();

}

namespace rxjs_of_demo{
  const observable = of(1);
  const subscription = observable.subscribe(
    value => console.log(value),
    (error: any) => console.log(error),
    () => console.log('done')
  );

  subscription.unsubscribe();
}

namespace rxjs_from{
  const observable = from([10, 20, 30]);

    const subscription = observable.subscribe(
        (value) => console.log(value),
        (error: any) => console.log(error),
        () => console.log("Done!")
    );

    subscription.unsubscribe();
}

namespace rxjs_interval{
  const observable = interval(10);

  const subscription = observable.subscribe(
      (value) => console.log(value),
      (error: any) => console.log(error),
      () => console.log("Done!")
  );

  subscription.unsubscribe();
}

namespace rxjs_fromevent{
  const observable = fromEvent(document, "click");

    const subscription = observable.subscribe(
        (value) => console.log(value)
    );
    
    subscription.unsubscribe();
}

namespace observable_demo_5 {

  function getJSON(url: string, cb: (response: unknown|null) => void) {
      fetch(url)
          .then(response => response.json())
          .then(json => cb(json))
          .catch(_ => cb(null));
  }
  
  const uri = "https://jsonplaceholder.typicode.com/todos/1";
  const observableFactory = bindCallback(getJSON);
  const observable = observableFactory(uri);
  
  const subscription = observable.subscribe(
      (value) => console.log(value)
  );
  
  subscription.unsubscribe();
  
}

