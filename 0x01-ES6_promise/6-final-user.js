import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const arr = [];
  const d = {};
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((value) => {
       value.map((v) => ({
        status: v.status,
        value: v.status === 'fulfilled' ? v.value : String(v.reason),
      }))
    });
}
