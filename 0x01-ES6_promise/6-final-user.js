import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const p = Promise.all([signUpUser(firstName, lastName), uploadPhoto(filename)])
  console.log(p);
  setTimeout(() => {
  console.log(p);
});
}
