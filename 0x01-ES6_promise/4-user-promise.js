export default function signUpUser(firstName, lastName) {
   return new Promise(() => {
     'firstName': firstName,
     'lastName': lastName,
   });
}
