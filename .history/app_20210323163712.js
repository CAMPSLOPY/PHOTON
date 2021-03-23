const auth = "";
const gallery = document.querySelector(".gallery");
const searchInp = document.querySelector(".search");
const submitBtn = document.querySelector(".submit-btn");
let searchValue;

async function curatedPhotos() {
  const dataFetch = await fetch("https://api.pexels.com/v1/curated", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth,
    },
  });
  const data = await dataFetch.json();
  console.log(data);
}

curatedPhotos();