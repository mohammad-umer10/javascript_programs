// Create a Map to store users:
// ID → User Name
// 1.	Add users
// 2.	Find user by ID
// 3.	Delete user
// 4.	Print all users

let users = new Map();

users.set(1, "Ali");
users.set(2, "Ahmed");
users.set(3, "Sara");
users.set(4, "Zain");

console.log("User with ID 2:", users.get(2));

users.delete(3);
    
for (let [id, name] of users) {
  console.log(id, name);
}