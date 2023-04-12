
/*Escriba un script para crear una galería de imágenes a partir de un array de datos. El HTML tiene una lista ul.gallery.

<ul class="gallery"></ul>

Use un array de objetos images para crear elementos <img> anidados dentro de <li>. Use las secuencias de plantillas y el método insertAdjacentHTML() para crear el marcado.

    Todos los elementos de la galería deben añadirse al DOM en una sola operación de inserción.
    Añada un diseño mínimo a la galería con flexboxes o Computación en malla mediante las clases CSS.*/ 


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryRef = document.querySelector(".gallery");

const gallery = images
  .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="300"></li>`)
  .join("");

galleryRef.insertAdjacentHTML("afterbegin", gallery);

console.log(gallery);
