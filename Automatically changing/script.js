const images=['1.jpg','2.jpg','3.jpg'];
let currentimageindex=0;

function changeImage()
{
const ImgElement=document.getElementById("image");

ImgElement.classList.remove('fade-in');
ImgElement.classList.add('fade-out');

setTimeout(()=>
{
currentimageindex=(currentimageindex+1)%images.length;
ImgElement.src=images[currentimageindex];

ImgElement.classList.remove('fade-out');
ImgElement.classList.add('fade-in');
},1500);
}
setInterval(changeImage,3000);