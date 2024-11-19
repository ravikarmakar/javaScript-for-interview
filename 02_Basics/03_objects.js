// singleton
// Object.create

// object literals

const jsSym = Symbol("jsRavi");

let jsUser = {
  name: "Ravi",
  [jsSym]: "rohan",
  email: "ravi@gmail.com",
  "last-name": "Karmakar",
  "full name": "Ravi Karmakar",
  lang: "JavaScript",
  country: "India",
  age: 25,
  isLoggedin: true,
  post: ["post1", "post2", "post3"],
  friends: ["friend1", "friend2", "friend3"],
};

// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser["lang"]);
// console.log(jsUser["last-name"]);
// console.log(jsUser[jsSym]);

// jsUser.email = "ravi@newgmail.com";
// Object.freeze(jsUser);
// jsUser["email"] = "ravi@newgmail2.com";
// console.log(jsUser.email);
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello New User");
};

jsUser.greetingTow = function () {
  console.log(`Hello New User ${this.name}`);
};

console.log(jsUser.greeting(), jsUser.greetingTow());
