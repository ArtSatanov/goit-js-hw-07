import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function gallryMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
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
    )
    .join('');
}

galleryEl.insertAdjacentHTML('beforeend', gallryMarkup(galleryItems));

function clickHandler(e) {
  e.preventDefault();
  if (e.currectTarget === e.target) {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: instance => {
        window.addEventListener('keydown', exitEsc);
      },
      onClose: instance => {
        window.removeEventListener('keydown', exitEsc);
      },
    }
  );
  function exitEsc(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
  instance.show();
}

galleryEl.addEventListener('click', clickHandler);
