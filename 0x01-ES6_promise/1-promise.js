export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (!success) reject(new Error('The fake API is not working currently'));
    resolve({
      status: 200,
      body: 'Success',
    });
  });
}
