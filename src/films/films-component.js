export function makeFilmItem(film) {
  const html = /*html*/`
    <li class="film" title="${film.description}">
      <h1>
        <a href="./film-detail.html?id=${film.id}">${film.title}</a>
      </h1>
    </li>
  `;

  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content;
}

const filmList = document.getElementById('film-list');

export default function loadFilms(films) {
  films.forEach(film => {
    const dom = makeFilmItem(film);
    filmList.appendChild(dom);
  });
}
