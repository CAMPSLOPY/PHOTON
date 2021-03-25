const auth = "563492ad6f91700001000001094114794e9d44f98bfb6159327fc6fe";
const gallery = document.querySelector(".gallery");
const searchInp = document.querySelector(".search");
const form = document.querySelector(".search-form");
const more = document.querySelector(".more");
let searchValue;
let page = 1;
let fetchLink;
let currentSearch;

// EVENT LISTENERS
searchInp.addEventListener("input", updateInput);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  currentSearch = serac
  searchPhotos(searchValue);
});

function updateInput(e) {
  searchValue = e.target.value;
}

async function curatedPhotos() {
  fetchLink = "https://api.pexels.com/v1/curated";
  const dataFetch = await fetch(fetchLink, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth,
    },
  });
  const data = await dataFetch.json();
  data.photos.forEach((photo) => {
    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `
    <div class="gallery-info">
    <p>${photo.photographer}</p>
    <a href=${photo.src.original}>Download</a>
    </div>
    <img src=${photo.src.large}></img>`;
    gallery.appendChild(galleryImg);
  });
}
curatedPhotos();

// now lets create the Search functionality

async function searchPhotos(query) {
  clear();
  fetchLink = `https://api.pexels.com/v1/search?query=${query}&per_page=1`;
  const photoSearch = await fetch(fetchLink, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth,
    },
  });
  const data = await photoSearch.json();
  data.photos.forEach((photo) => {
    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `
    <div class="gallery-info">
    <p>${photo.photographer}</p>
    <a href=${photo.src.original}>Download</a>
    </div>
    <img src=${photo.src.large}></img>`;
    gallery.appendChild(galleryImg);
  });
}
searchPhotos();

// clear Gallery

function clear() {
  gallery.innerHTML = "";
  searchInp.value = "";
}

more.addEventListener("click", loadMore);

async function loadMore() {
  page++;
  if(){
    fetchlink =`https://api.pexels.com/v1/search?query=${query}&per_page=${page}`;
  }else{
    fetchLink = `https://api.pexels.com/v1/curated`;
  }
}

// lets refactor the code
// async function fetchApi(url) {
//   const dataFetch = await fetch(url, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       Authorization: auth,
//     },
//   });
//   const data = await dataFetch.json();
//   return data;
// }

// function generatePictures(data) {
//   data.photos.forEach((photo) => {
//     const galleryImg = document.createElement("div");
//     galleryImg.classList.add("gallery-img");
//     galleryImg.innerHTML = `<img src = ${photo.src.large}> </img>
//     <p>${photo.photographer}</p>`;
//     gallery.appendChild(galleryImg);
//   });
// }

// OR

// async function searchPhotos(query) {
//   const data = await fetchApi(`https://api.pexels.com/v1/search?query=${query}`);
//   generatePictures(data);
// }

// OR

// async function curatedPhotos() {
//   const data = await fetchApi("https://api.pexels.com/v1/curated");
//   generatePictures(data);
// }
