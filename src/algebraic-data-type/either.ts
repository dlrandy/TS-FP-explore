namespace either_demo {


class Nothing<T> {
  /**
   * of
   */
  public static of<TVal>(val?:TVal) {
    return new Nothing(val);
  }
  private _value :T |undefined;
  constructor(val?:T) {
    this._value = val;
  }
  /**
   * map<TMap>
   */
  public map<TMap>(fn: (val:T)=>TMap) {
    if (this._value !== undefined) {
      return new Nothing<TMap>(fn(this._value))
    } else {
      return new Nothing<TMap>(this._value as any);      
    }
  }
}

class Just<T> {

  /**
   * static
   */
  public static of<TVal>(val:TVal) {
    return new Just(val);
  }

  private _value:T;

  /**
   * constructor
   */
  public constructor(val:T) {
  this._value = val;    
  }
  /**
   * map
   */
  public map<TMap>(fn: (val:T) => TMap) {
    return new Just<TMap>(fn(this._value));
  }


}

type Either<T1, T2> = Just<T1> | Nothing<T2>;

interface New {
  subreddit: string;
  id: string;
  title: string;
  score: number;
  over_18: boolean;
  url: string;
  author: string;
  ups: number;
  num_comments: number;
  created_utc: number;
}

interface Response {
  kind: string;
  data: {
      modhash: string;
      whitelist_status: boolean|null;
      children: Array<{ kind: string, data: New }>;
      after: string|null;
      before: string|null;
  };
}


async function fetchNews() {
  return new Promise<Either<Response, Error>>((resolve, reject) => {
    const url = "https://www.reddit.com/r/typescript/new.json";
    
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(json => resolve(new Just(json)))
        .catch(e => resolve(new Nothing(e)))
  });
}

(async () => {

  const maybeOfResponse = await fetchNews();

  if (maybeOfResponse instanceof Nothing) {

      maybeOfResponse
          .map(r => r.message)
          .map(msg => {
              console.log(`Error: ${msg}`);
              return msg;
          });

  } else {

      const maybeOfNews = maybeOfResponse.map(r => r.data)
          .map(d => d.children)
          .map(children => children.map(c => c.data));

      maybeOfNews.map((news) => {
          news.forEach((n) => console.log(`${n.title} - ${n.url}`));
          return news;
      });

  }

})();



}