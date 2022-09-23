//
// Type Annotations with Object

let myObject = {
  username: "Elzero",
  id: 100,
  hire: true,
};

let myObject: {
  username: string;
  id: number;
  hire: boolean;
} = {
  username: "Elzero",
  id: 100,
  hire: true,
};

//update
myObject.username = "osama";
myObject.id = 101;
myObject.hire = false;
// console.log(myObject);
console.log(myObject.username);
console.log(myObject.id);

// ==========================================

let myObject: {
  //   username: string;
  readonly username: string;
  id: number;
  hire: boolean;
  skills: {
    one: string;
    two: string;
  };
} = {
  username: "Elzero",
  id: 100,
  hire: true,
  skills: {
    one: "HTML",
    two: "CSS",
  },
};

//update
// myObject.username = "osama";
myObject.id = 101;
myObject.hire = false;
// console.log(myObject);
console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.skills.one);

// ========================================

let myObject: {
  //   username: string;
  readonly username: string;
  id: number;
  hire?: boolean; //optional
  skills: {
    one: string;
    two: string;
  };
} = {
  username: "Elzero",
  id: 100,
  skills: {
    one: "HTML",
    two: "CSS",
  },
};

//update
// myObject.username = "osama";
myObject.id = 101;
myObject.hire = false;
// console.log(myObject);
console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.skills.one);

/* */
/* */
