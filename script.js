async function getData() {
  const url = 'https://rickandmortyapi.com/api/character';
  const sonuc = await fetch(url);
  const json = await sonuc.json();

  return json.results;
}

async function editDOM() {
  const slideList = document.querySelector('.splide__list');
  const data = await getData();

  await data.map((el) => {
    const { image, name, status, species } = el;

    // console.log(name);

    const listEl = `<li class="splide__slide">
    <div class="card">
      <img src=${image} />
      <p class="card-info">
        ${name} <span class=${
      status === 'Alive' ? 'green' : 'red'
    }>${status} - ${species}</span>
      </p>
    </div>
  </li>
    `;

    slideList.innerHTML += listEl;
  });

  await splide.mount();
}

// Slider
var splide = new Splide('.splide', {
  type: 'loop',
  perPage: 3,
  perMove: 1,
});

editDOM();
