const jsSym = Symbol("jsRavi");

let jsUser = {
  name: "Ravi",
  [jsSym]: "rohan",
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
console.log(jsUser.name);
console.log(jsUser["lang"]);
console.log(jsUser["last-name"]);
console.log(jsUser[jsSym]);
