import axios from 'axios';

const button = document.querySelector('button');

export const fetchData = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      const title = response.data.title;
      const transformedTitle = title.toUpperCase();
      return transformedTitle;
    });
};

const loadTitle = () => {
  fetchData().then(title => {
    console.log(title);
  });
};

button.addEventListener('click', loadTitle);
