const images=['sachin-records.png','MS.jpg','virat.jpg'];
let currentImageIndex=0;

function changeimage(){
    const imgElement=document.getElementById('profileimg');
    currentImageIndex=(currentImageIndex+1)%images.length;
    imgElement.src=images[currentImageIndex];
}
setInterval(changeimage,3000);

// function updateTime(){
//     const timeElement=document.getElementById('postTime');
//     const now=new Date();
//     const hours= String(now.getHours()).padStart(2,'0');
//     const minutes= String(now.getMinutes()).padStart(2,'0');
//     const seconds= String(now.getSeconds()).padStart(2,'0');
//     timeElement.textContent=`${hours}:${minutes}:${seconds}`;
// }
// updateTime();
// setInterval(updateTime,1000);