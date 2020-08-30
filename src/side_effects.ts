namespace side_effects {
  interface User {
    ageInMonths: number;
    name: string;
  }
  function findUserAgeByName(users: User[],
    name: string,
  ): number {
    if (users.length === 0) {
      throw new Error('there are no users');
    }
    const user = users.find(u => u.name === name);
    if (!user) {
      throw new Error('user not found');
    } else {
      return user.ageInMonths;
    }
  }

  const users = [
    { ageInMonths: 1, name: "Remo" },
    { ageInMonths: 2, name: "Leo" }
  ];

  const userAge1 = findUserAgeByName(users, 'Remo');
  console.log(`Remo is ${userAge1 / 12} years old.`);
  const userAge2 = findUserAgeByName([], 'Remo');
  console.log(`Remo is ${userAge2 / 12} years old.`);
  
  function safeFindUserAgeByName(users:User[], name: string): Promise<number> {
    if (users.length == 0 ) {
      return Promise.reject(new Error('There are no users!'))
    }
    const user = users.find(u => u.name === name);
    if (!user) {
      return Promise.reject(new Error('user not found'));
    } else {
      return Promise.resolve(user.ageInMonths);
    }
  }

  safeFindUserAgeByName(users, 'Remo').then(userAge1 => console.log(
    `Remo is ${userAge1 / 12} years old`
  )
  );
  safeFindUserAgeByName([], 'Remo').then(userAge1 => console.log(
    `Remo is ${userAge1 / 12} years old`
  )
  );



}