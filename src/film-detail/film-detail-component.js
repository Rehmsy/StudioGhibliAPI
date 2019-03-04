export function makeFilmDetail(film) {
  const html = /*html*/`
  <dl>
    <dt>Title</dt>
    <dd>${film.title}</dd>

    <dt>Released</dt>
    <dd>${film.release_date}</dd>

    <dt>Plot</dt>
    <dd>${film.description}</dd>

    <dt>Director</dt>
    <dd>${film.director}</dd>

    <dt>Producer</dt>
    <dd>${film.producer}</dd>

    <dt>RT Score</dt>
    <dd>${film.rt_score}</dd>
    
  </dl>
  `;

  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content;
}

const filmDetailContainer = document.getElementById('film-detail-container');

export default function loadFilmDetail(film) {
  const dom = makeFilmDetail(film);
  filmDetailContainer.appendChild(dom);
}
