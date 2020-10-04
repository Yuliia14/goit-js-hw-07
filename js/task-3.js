const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryAlbum = document.querySelector("#gallery");
console.log(galleryAlbum);

const galleryAlbumMarkUp = images.reduce((acc, { url, alt }) => {
  acc += `<li><img src='${url}' alt='${alt}'/></li>`;

  return acc;
}, "");

galleryAlbum.insertAdjacentHTML("afterbegin", galleryAlbumCreator);

// const galleryAlbumCreator = images.map((img) => {
//   const galleryAlbumItem = document.createElement("li");
//   const galleryAlbumImage = document.createElement("img");
//   galleryAlbumImage.src = img.url;
//   galleryAlbumImage.alt = img.alt;

//   galleryAlbumItem.appendChild(galleryAlbumImage);

//   galleryAlbum.insertAdjacentElement("afterbegin", galleryAlbumItem);
// });
