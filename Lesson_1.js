// დავალება 1

let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};
console.log(user.studentstatus);

// დავალება 2

let names = ["giorgi", "levani", "beqa", "mariami"];
for (let x = 0; x < names.length; x++) {
  console.log(names[x]);
}
let item = 0;
while (item < names.length) {
  console.log(names[item]);
  item++;
}

// დავალება 3

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let x = 0; x < numbers.length; x++) {
  if (numbers[x] > 5) {
    console.log(numbers[x]);
  }
}

// დავალება 4

let users = [
  { username: "test1", status: false },
  { username: "test2", status: false },
  { username: "test3", status: true },
];
for (let x = 0; x < users.length; x++) {
  if (users[x].status == true) {
    console.log(users[x]);
  }
}

// დავალება 5

let user = {
  name: "giorgi",
  age: 20,
  studentstatus: "active",
};
if ((user.age > 18) & (user.studentstatus = "active")) {
  console.log("hello");
}
if ((user.name = "giorgi")) {
  console.log("hello giorgi");
}
if ((user.studentstatus = "active" || user.age < 25)) {
  console.log("hello world");
} else {
  console.log("error");
}

// დავალება 6

let array = ["watermelon", "pear", 10, 45, 50, "apple", "ananas"];
for (let x = 0; x < array.length; x++) {
  if (typeof array[x] == "string") {
    console.log(array[x]);
  }
}
