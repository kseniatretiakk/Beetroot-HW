"use strict";

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const mainPage = document.querySelector(".main");
const searchTitle = document.createElement("div");
searchTitle.className = "page__search-title";
searchTitle.innerHTML = `<p>Find <mark>your</mark> favorite film/series</p>`;
document.querySelector('.title-block').appendChild(searchTitle);

const radioButton = document.querySelector('.radio-btn')
document.querySelector('.search-block').appendChild(radioButton);

const searchWindowPlusButton = document.createElement("div");
searchWindowPlusButton.className = "page__btn-search";
searchWindowPlusButton.innerHTML = `<input class="search" type="text" name="film-name" id="film-name"> <button class="page__search-button"><img src="assets/images/search.svg" alt="search icon"></button>`;
document.querySelector('.search-block').appendChild(searchWindowPlusButton);
 
// const URL = 'http://www.omdbapi.com/?apikey=a02197f4&s=';

// const processTheData = async ( URL, value, type, page) => {
//   const response = await fetch(`${URL}${value}&type=${type}&page=${page}`);
//   const data = await response.json();
//   return data;
// }

// const button = document.querySelector('.page__search-button');

// button.addEventListener('click', async () => {
//   const value = document.getElementById('film-name').value;
//   const type = document.querySelector('.radio-btn').value;
//   const page = 1;

//   const data = await processTheData(value, type, page);
//   updateSwiperSlider(data.Search);
// });

// swiper.on('sliderChange', async () => {
//   const value = document.getElementById('film-name').value;
//   const type = document.querySelector('.radio-btn').value;
//   const currentPage = swiper.realIndex + 1;

//   const data = await processTheData(value, type, currentPage);
//   updateSwiperSlider(data.Search);
// });

// const updateSwiperSlider = (movies) => {
//   const swiperWrapper = document.querySelector('.swiper-wrapper');
//   swiperWrapper.innerHTML = '';

//   movies.forEach((movie) => {
//   const slide = document.createElement('div');
//   slide.className = 'swiper-slide';
//   slide.textContent = movie.Title;
//   swiperWrapper.appendChild(slide);
// })

// swiper.update();

// };

// ______________

// const processTheData = async () => {
//   const value = document.getElementById('film-name').value;
//   const type = document.querySelector('.radio-btn').value;
//   const page = 1;
//   const response = await fetch(`${URL}${value}&type=${type}&page=${page}`);
//   const data = await response.json();
//   return data;
// }

// const button = document.querySelector('.page__search-button');

// let result;

// button.addEventListener('click', function clickButton() {
//   if (!result) {
//     processTheData().then(data => {
//       result = data;
//       createTable();
//     });
//   } else {
//     searchWindowPlusButton.style.display = "none";
//     searchTitle.style.display = "none";
//     radioButton.style.display = "none";
//     const textNotFoundPr = document.createElement("span");
//     textNotFoundPr.className = "page__search-title";
//     textNotFoundPr.textContent = "Product not found.";
//     document.querySelector('.main').appendChild(textNotFoundPr);  
//   }

//     button.removeEventListener('click', clickButton); 
// });

// function createTable() {
//   const table = document.createElement('table');
//   table.className = 'table';

//   result.Search.forEach(element => {
//     const row = table.insertRow();
//     const cell1 = row.insertCell();
//     cell1.textContent = element.Title;
//     const cell3 = row.insertCell();
//     detailsButton = document.createElement('button');
//     detailsButton.innerText = 'Details'
//     detailsButton.className = 'table__details-button';
//     cell3.appendChild(detailsButton);

//     let detailsTable;

//   detailsButton.addEventListener('click', function addDetails() {
//     detailsTable = document.createElement('table');
//     detailsTable.className = 'detailsTable';
//     detailsTable.classList.add('none');
//     const detailsCell1 = detailsTable.insertRow();
//     detailsCell1.innerText = `Year: ${element.Year}`;
//     detailsCell1.className = 'type';
//     const detailsCell2 = detailsTable.insertRow();
//     detailsCell2.className = 'type';
//     detailsCell2.innerText = `Type: ${element.Type}`;
//     row.insertAdjacentElement('afterend', detailsTable);

//     return detailsTable;
    
//   });

  
// });

// document.querySelector('.swiperslide-one').appendChild(table);
// };
// _________

// const prevButton = document.querySelector('.swiper-button-prev');
// const nextButton = document.querySelector('.swiper-button-next');
// const pageIndecator = document.querySelector('.page-indecator');
// let startPage = 6;
// let totalPages = 215;



// detailsButton.addEventListener('click', function addDetails() {
//   document.querySelector('.detailsTable').style.display = 'none';
// });


const URL = 'http://www.omdbapi.com/?apikey=a02197f4&s=';

const processTheData = async (value, type, page) => {
  const response = await fetch(`${URL}${value}&type=${type}&page=${page}`);
  const data = await response.json();
  return data;
}

const button = document.querySelector('.page__search-button');
let result;

button.addEventListener('click', function clickButton() {
  const value = document.getElementById('film-name').value;
  const type = document.querySelector('.radio-btn').value;
  const page = 1;

  processTheData(value, type, page)
    .then(data => {
      if (data.Response === "True") {
        result = data;
        createTable();
      } else {
        searchWindowPlusButton.style.display = "none";
        searchTitle.style.display = "none";
        radioButton.style.display = "none";
        const textNotFoundPr = document.createElement("span");
        textNotFoundPr.className = "page__search-title";
        textNotFoundPr.textContent = "Product not found.";
        document.querySelector('.main').appendChild(textNotFoundPr);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });

  button.removeEventListener('click', clickButton);
});

function createTable() {
  const table = document.createElement('table');
  table.className = 'table';

  result.Search.forEach(element => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    cell1.textContent = element.Title;
    const cell3 = row.insertCell();
    const detailsButton = document.createElement('button');
    detailsButton.innerText = 'Details'
    detailsButton.className = 'table__details-button';
    cell3.appendChild(detailsButton);

    let detailsTable;

    detailsButton.addEventListener('click', function addDetails() {
      if (!detailsTable) {
        detailsTable = document.createElement('table');
        detailsTable.className = 'detailsTable';
        detailsTable.classList.add('none');
        const detailsCell1 = detailsTable.insertRow();
        detailsCell1.innerText = `Year: ${element.Year}`;
        detailsCell1.className = 'type';
        const detailsCell2 = detailsTable.insertRow();
        detailsCell2.className = 'type';
        detailsCell2.innerText = `Type: ${element.Type}`;
        row.insertAdjacentElement('afterend', detailsTable);
      } else {
        detailsTable.classList.toggle('none');
      }
    });
  });

  document.querySelector('.swiper').appendChild(table);
}






