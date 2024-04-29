import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const li = document.createElement("li");
  li.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = item.preview;
  img.setAttribute("data-source", item.original);
  img.alt = item.description;

  link.appendChild(img);
  li.appendChild(link);
  galleryContainer.appendChild(li);
});

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" alt="${event.target.alt}" />
    `);
    instance.show();
  }
});
console.log(galleryItems);
