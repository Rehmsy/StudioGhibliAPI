import loadFilmDetail from './film-detail-component.js';
import loadHeader from '../header/header-component.js';

loadHeader();

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

if(!id) {
  window.location = './';
}

const URL = `https://ghibliapi.herokuapp.com/films/${id}`;

fetch(URL)
  .then(response => response.json())
  .then(film => {
    loadFilmDetail(film);
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log('FETCH ERROR :(', error);
  });
