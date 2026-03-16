const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const httpGetQuote = async (url) => {
    const response = await httpGet(url);
    const { message } = JSON.parse(response.body);

    return response.status === 200 
      ? { 'Arnie Quote': message }
      : { 'FAILURE': message };
  };

  return Promise.all(urls.map(httpGetQuote));
};

module.exports = {
  getArnieQuotes,
};
