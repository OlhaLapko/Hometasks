const elImg = document.createElement("img");
elImg.src = "img/1.jpg";
elImg.id = 'anyImg';
elImg.alt = "New image";
elImg.style.width = "200px";

document.body.appendChild(elImg);
document.body.appendChild(document.createElement('br'));

const button = document.createElement('button');
button.id = 'btn';
button.textContent = 'Click me';

document.body.appendChild(button);

const images = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg'
];


function showImg() {
    const randIndex = Math.floor(Math.random() * images.length);
    elImg.src = images[randIndex];
}
button.addEventListener('click', showImg);
