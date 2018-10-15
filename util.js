const { fetchData } = require('./http');

const loadTitle = () => {
  return fetchData().then(extractedData => {
    const title = extractedData.title;
    const transformedTitle = title.toUpperCase();
    return transformedTitle;
  });
};

const printTitle = () => {
  loadTitle().then(title => {
    console.log(title);
    return title;
  });
};

exports.printTitle = printTitle;
exports.loadTitle = loadTitle;
