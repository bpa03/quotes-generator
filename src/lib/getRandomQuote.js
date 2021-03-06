export const getRandomQuote = (url) => {
  return new Promise((resolve, reject) => {
    const url = "https://quote-garden.herokuapp.com/api/v3/quotes/random";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};