export const getQuotesAuthor = (author) => {
  const url = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}&limit=3`
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}