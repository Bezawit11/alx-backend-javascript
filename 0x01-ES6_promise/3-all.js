import {uploadPhoto, createUser} from "./utils";

export function handleProfileSignup() {
  const promise1 = createUser();
  const promise2 = uploadPhoto();
  Promise.all([uploadPhoto(), createUser()]).then((message) => {
    console.log(message[0].body, message[1].firstName, message[1].lastName)
  }).catch((message) => {
    console.log("Signup system offline");
  })
}
