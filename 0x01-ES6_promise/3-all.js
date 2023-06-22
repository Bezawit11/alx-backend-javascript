import {uploadPhoto, createUser} from "./utils";

export function handleProfileSignup() {
  const promise1 = createUser();
  const promise2 = uploadPhoto();
  Promise.all([uploadPhoto(), createUser()]).then((res) => {
    console.log(res[0].body, res[1].firstName, res[1].lastName)
  }).catch((message) => {
    console.log("Signup system offline");
  })
}
