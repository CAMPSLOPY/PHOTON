const auth = "563492ad6f91700001000001094114794e9d44f98bfb6159327fc6fe";
const gallery = document.querySelector(".gallery");
const searchInp = document.querySelector(".search");
const form = document.querySelector(".search-form");
let searchValue;
let page = 1;
let fetchlink;
let currentSearch;
const more = document.querySelector(".more");

// EVENT LISTENERS
searchInp.addEventListener("input", updateInput);
more.addEventListener("click", loadMore);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  currentSearch = searchValue;
  searchPhotos(searchValue);
});

async function loadMore() {
  page++;
  if (currentSearch) {
    fetchlink = `https://api.pexels.com/v1/search?query=${currentSearch}`;
  } else {
    fetchlink = `https://api.pexels.com/v1/curated`;
  }
  const data = await fetchApi(fetchlink);
  generatePictures(data);
}

function updateInput(e) {
  searchValue = e.target.value;
}

// async function curatedPhotos() {
//   const dataFetch = await fetch(
//     "https://api.pexels.com/v1/curated?per_page=15&page=1",
//     {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         Authorization: auth,
//       },
//     }
//   );
//   const data = await dataFetch.json();
//   data.photos.forEach((photo) => {
//     const galleryImg = document.createElement("div");
//     galleryImg.classList.add("gallery-img");
//     galleryImg.innerHTML = `
//     <div class="gallery-info">
//     <p>${photo.photographer}</p>
//     <a href=${photo.src.original}>Download</a>
//     </div>
//     <img src=${photo.src.large}></img>`;
//     gallery.appendChild(galleryImg);
//   });
// }

// lets refactor the code

async function fetchApi(url) {
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth,
    },
  });
  const data = await dataFetch.json();
  return data;
}

function generatePictures(data) {
  data.photos.forEach((photo) => {
    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `
    <div class="gallery-info">
    <p>${photo.photographer}</p>
    <a href=${photo.src.original}>Download</a>
    </div>
    <img src = ${photo.src.large}> </img>`;
    gallery.appendChild(galleryImg);
  });
}

async function curatedPhotos() {
  const data = await fetchApi(
    "https://api.pexels.com/v1/curated?per_page=15&page=1"
  );
  generatePictures(data);
}

// now lets create the Search functionality

// async function searchPhotos(query) {
//   clear();
//   const photoSearch = await fetch(
//     `https://api.pexels.com/v1/search?query=${query}`,
//     {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         Authorization: auth,
//       },
//     }
//   );
//   const data = await photoSearch.json();
//   data.photos.forEach((photo) => {
//     const galleryImg = document.createElement("div");
//     galleryImg.classList.add("gallery-img");
//     galleryImg.innerHTML = `
//     <div class="gallery-info">
//     <p>${photo.photographer}</p>
//     <a href=${photo.src.original}>Download</a>
//     </div>
//     <img src=${photo.src.large}></img>`;
//     gallery.appendChild(galleryImg);
//   });
// }

async function searchPhotos(query) {
  const data = await fetchApi(
    `https://api.pexels.com/v1/search?query=${query}`
  );
  generatePictures(data);
}

searchPhotos();

// clear Gallery

function clear(e) {
  gallery.innerHTML = "";
  searchInp.value = "";
  console.log(searchInp.e.target);
}

curatedPhotos();
