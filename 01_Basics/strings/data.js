// const myDate = new Date();

// console.log(typeof myDate); // only object
// console.log(myDate.toString()); // string all
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString()); // also this..
// console.log(myDate.toJSON()); // don't know why but i have to do this later

// const myNewDate = Date.now();

// console.log(myNewDate); // get date in milliseconds
// console.log(typeof myNewDate); // typeof number
// console.log(Math.floor(myNewDate / 1000)); // get date in seconds

// const myCreatedDate = new Date(2023, 0, 5);
// const myCreatedDate = new Date(2023, 0, 23, 5, 3);
// const myCreatedDate = new Date("2021-01-05"); // yyyy-mm-dd
// const myCreatedDate = new Date("02-14-2023"); // mm-dd-yyyy

// console.log(myCreatedDate.toLocaleString());

// const newDate = Date.now();
// console.log(myCreatedDate.getDate());
// console.log(myCreatedDate.getTime());
// console.log(newDate);

const newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.getDay() + 1);
// console.log(newDate.getMonth() + 1);

const myDate = newDate.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

console.log(myDate);
