export default function getFullResponseFromAPI(success) {
	let p = new Promise(function (resolve, reject) {
	   if (success == true) {
	      resolve({status: 200, body: 'Success'})
	   } else
	      reject('The fake API is not working currently')
	})
	return p;
}
