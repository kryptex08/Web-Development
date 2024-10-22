const images=['img1.jpg','img2.jpg','img3.jpg'];
let currentImageIndex=0;

function changeImage(){
    const imageElement=document.getElementById('image');
    imageElement.classList.add('fade-out');

    setTimeout(()=>{
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageElement.src = images[currentImageIndex];
        imageElement.classList.remove('fade-out');
        imageElement.classList.add('fade-in');
    }, 1000);

    setTimeout(() => {
        imageElement.classList.remove('fade-in');
    }, 2000);
}
setInterval(changeImage,5000);