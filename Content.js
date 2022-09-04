let chadImages = [
    "https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachad.jpg",
    "https://i.kym-cdn.com/photos/images/facebook/002/250/753/a0a.jpg",
    "https://i1.sndcdn.com/artworks-ywcx1pUzUGGvjwmH-BUNWRA-t500x500.jpg",
    "https://tellygupshup.com/wp-content/uploads/2021/11/834.png",
    "https://static.wikia.nocookie.net/joke-battles/images/1/17/Thumb_v-video-games-»-thread-438727736-50110479.png/revision/latest?cb=20210323062737",
    "https://i.ytimg.com/vi/lQezinb283E/maxresdefault.jpg",
    "https://i.pinimg.com/236x/b4/b9/8a/b4b98a83da0cd1ebc13248bcb951a6a3.jpg",
    "https://melmagazine.com/wp-content/uploads/2021/01/66f-1.jpg"
];

const imgs = document.getElementsByTagName("img");

for(let i = 0; i < imgs.length; i++){
    const randomImg = Math.floor(Math.random() * chadImages.length);
    imgs[i].src = chadImages[randomImg];
};

const headers = document.getElementsByTagName('h2');

for(let i = 0; i < headers.length; i++){
    headers[i].innerText = "Death Once had Near Chad Experience 😎";
}