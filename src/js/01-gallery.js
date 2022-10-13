// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const imagesContainer = document.querySelector(".gallery");
const cardsMarkup = createImagesCardsMarkup(galleryItems);

imagesContainer.insertAdjacentHTML('afterbegin', cardsMarkup);
console.log(cardsMarkup)


function createImagesCardsMarkup(images) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </div>
`
  }).join('')
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    // navText:	['←','→'],
});
