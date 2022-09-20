//    Interface Declartion

// interface same as Type

interface User {
  id?: number;
  readonly username: string;
  country: string;
}

let user: User = {
  id: 100,
  username: "Elzero",
  country: "Egypt",
};

user.country = "Syria";

console.log(user);

function getData(data: User) {
  console.log(`Id Is ${data.id}`);
  console.log(`Username Is ${data.username}`);
  console.log(`Country Is ${data.country}`);
}

getData({ id: 200, username: "osama", country: "ksa" });
