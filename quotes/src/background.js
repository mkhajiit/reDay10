const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage); //<img>를 body에 추가하는 코드

document.body.background = bgImage.src;