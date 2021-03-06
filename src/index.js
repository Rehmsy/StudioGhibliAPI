import loadFilms from './films/films-component.js';
import loadHeader from './header/header-component.js';
import loadFooter from './footer/footer-component.js';

loadHeader();
loadFooter();

const URL = 'https://ghibliapi.herokuapp.com/films';

fetch(URL)
  .then(response => response.json())
  .then(films => {
    loadFilms(films); 
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log('FETCH ERROR :(', error);

  });
