import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');


function gallryMarkup (arr) { 
   return arr.map(({ preview, original, description }) => 
   `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
   ).join('')
}; 

console.log(gallryMarkup(galleryItems));

galleryEl.insertAdjacentHTML('beforeend', gallryMarkup(galleryItems));

function cilckHandler(e) {
  if (e.currectTarget === e.target) {
    return;
  };

  
};