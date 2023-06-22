import uploadPhoto from "./utils";
import createUser from "./utils";

export function handleProfileSignup() {
  const promise1 = createUser();
  const promise2 = uploadPhoto();
  promise2.then((message) => {
    process.stdout.write(message["body"] + " ");
  }).catch((message) => {
    console.log("Signup system offline");
  })
  promise1.then((message) => {
    console.log(message["firstName"] + " " + message["lastName"]);
  }).catch((message) => {
    console.log("Signup system offline");
  })
}
