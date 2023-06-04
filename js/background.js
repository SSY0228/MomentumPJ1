const images = [
  "img0.jpg",
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.jpg",
  "img13.jpg",
  "img14.jpg",
  "img15.jpg",
  "img16.jpg",
  "img17.jpg",
  "img18.jpg",
  "img19.jpg",
  "img20.jpg",
];

const randomimg = images[Math.floor(Math.random() * images.length)];
const backimg = document.createElement("img");

backimg.src = `images/${randomimg}`;
backimg.width = window.innerWidth;
backimg.height = window.innerHeight;
document.body.appendChild(backimg);


// font-size 대응
if (window.screen.width <= 1920) {
  document.documentElement.style.fontSize = "62.5%"; //10px 1em 1rem
} else if (window.screen.width <= 2560) {
  document.documentElement.style.fontSize = "87.5%"; // 14px 1em 1rem
} else if (window.screen.width > 2560) { 
  // 3840 include
  document.documentElement.style.fontSize = "100%"; //16px 1em 1rem
}
