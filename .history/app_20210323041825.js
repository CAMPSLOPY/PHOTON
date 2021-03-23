const { async } = require("q");

const auth = " 563492ad6f91700001000001094114794e9d44f98bfb6159327fc6fe";
const gallery = document.querySelector(".gallery");
const searchInp = document.querySelector(".search");
const submitBtn = document.querySelector(".submit-btn");
let searchValue;

async function curatedPhotos() {
  const dataFetch = await fetch("https://api.pexels.com/v1/curated");
  method : 'GET',
  headers : {
      
  }
}
