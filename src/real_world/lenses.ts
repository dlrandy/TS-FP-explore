import R, { add } from 'ramda';

namespace ramda_lenses_demo{
  class Street {
    public readonly num: number;
    public readonly name: string;
    constructor(num: number, name: string) {
      this.num = num;
      this.name = name;
    }
  }

  class Address {
    
    public readonly city: string;
    public readonly street: Street;

    public constructor(city: string, street: Street) {
        this.city = city;
        this.street = street;
    }

}

const streetLens = R.lensProp('street');
const address = new Address(
  "London",
  new Street(1, "rathbone square")
);

const street = R.view<Address, Street>(streetLens, address);
const address2 = R.set<Address, Street>(
  streetLens,
  new Street(
    address.street.num,
    R.toUpper(address.street.name)
  ),
  address
)


}


