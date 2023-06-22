import uploadPhoto from "./utils";
import createUser from "./utils";

export function handleProfileSignup() {
  const promise = createUser();
  promise.then((message) => {
    console.log(message);
  }).catch((message) => {
    console.log("Signup system offline");
  })
}
