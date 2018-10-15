const { fetchData } = require('./http');

const button = document.querySelector('button');

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
  });
};

button.addEventListener('click', printTitle);

exports.printTitle = printTitle;
