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

const galleryList = document.querySelector('.gallery');
// console.log(galleryList);
galleryList.setAttribute('style', 'display: flex; list-style-type: none; ')

// images.forEach(({ url, alt }) => {
//     const li = document.createElement('li');
//     li.setAttribute('style', 'margin: 10px;')
//     const img = document.createElement('img');
//     img.setAttribute('width', '300px');
//     img.src = url;
//     img.alt = alt;
//     li.append(img);
//     galleryList.append(li)
// })

// const markupGallery = images.map(({ url, alt }) => {
//     const li = document.createElement('li');
//     li.setAttribute('style', 'margin: 10px;')
//     const img = document.createElement('img');
//     img.setAttribute('height', '300px');
//     img.src = url;
//     img.alt = alt;
//     li.append(img);
//     return li
// })
// galleryList.append(...markupGallery)

const markupGallery = images.map(({ url, alt }) =>
    `<li style="margin: 10px;">
        <img src="${url}" alt="${alt}" height="300px";>
    </li>`
).join('');

// console.log(markupGallery);

galleryList.insertAdjacentHTML('beforeend', markupGallery)