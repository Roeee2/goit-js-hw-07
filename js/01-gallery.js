import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
for (const item of galleryItems) {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>`
  );
}

const clickImage = (event) => {
  event.preventDefault();
  const imgOriginal = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${imgOriginal}" width="800" height="600">`
  );
  instance.show();

  const closeImage = (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  };
  document.addEventListener("keydown", closeImage);
};

gallery.addEventListener("click", clickImage);

console.log(galleryItems);
console.log(gallery);
