'use strict';
const newFormElement = document.querySelector('.js-new-form');
const listElement = document.querySelector('.js-list');
const searchButton = document.querySelector('.js-button-search');
const buttonAdd = document.querySelector('.js-btn-add');
const buttonCancelForm = document.querySelector('.js-btn-cancel');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const linkNewFormElememt = document.querySelector('.js-button-new-form');
const labelMesageError = document.querySelector('.js-label-error');
const input_search_desc = document.querySelector('.js_in_search_desc');

//Convertir cada gatito en un objeto
const kittenData_1 = {
  url: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
  name: 'Anastacio',
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};
const kittenData_2 = {
  url: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
  name: 'Fiona',
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};
const kittenData_3 = {
  url: 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
  name: 'Cielo',
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};
const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

//Adicionar nuevo gatito
function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;
  const newKittenDataObject = {};

  newKittenDataObject.url = valuePhoto;
  newKittenDataObject.name = valueName;
  newKittenDataObject.desc = valueDesc;
  newKittenDataObject.race = valueRace;

  if (valueDesc === '' && valuePhoto === '' && valueName === '') {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
  } else {
    if (valueDesc !== '' && valuePhoto !== '' && valueName !== '') {
      labelMesageError.innerHTML = 'Mola! Un nuevo gatito en Adalab!';
    }
  }
  kittenDataList.push(newKittenDataObject);
  renderKittenList(kittenDataList);
  console.log(kittenDataList);
  resetInputs();
}

//Filtrar por descripción
function filterKitten(event) {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  const dataFiltered = kittenDataList.filter((kitten) =>
    kitten.desc.toLowerCase().includes(descrSearchText.toLowerCase())
  );
  renderKittenList(dataFiltered);
}

//Crear listado de gatitos
function renderKitten(kittenData) {
  const kitten = `<li class="card">
  <article>
    <img
      class="card_img"
      src=${kittenData.url}
      alt="gatito"
    />
    <h3 class="card_title">${kittenData.name}</h3>
    <h3 class="card_race">${kittenData.race}</h3>
    <p class="card_description">
    ${kittenData.desc}
    </p>
  </article>
  </li>`;
  return kitten;
}

function renderKittenList(kittenDataList) {
  listElement.innerHTML = '';
  for (const kittenItem of kittenDataList) {
    listElement.innerHTML += renderKitten(kittenItem);
  }
}

renderKittenList(kittenDataList);

//Limpiar los inputs
function resetInputs() {
  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
  inputRace.value = '';
}

//Mostrar/ocultar el formulario
function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

//Mostrar el litado de gatitos en ell HTML
renderKittenList(kittenDataList);

buttonAdd.addEventListener('click', addNewKitten);
linkNewFormElememt.addEventListener('click', handleClickNewCatForm);
searchButton.addEventListener('click', filterKitten);
