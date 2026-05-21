import { users } from "./data.js";

const findUserById = (id) => {
  const user = users.find(({ id: userId }) => userId === id);

  if (!user) {
    return "Error: User not found";
  }

  const { name, email } = user;

  return `User found: ${name} can be reached at ${email}.`;
};

console.log(findUserById(2));
console.log(findUserById(99));