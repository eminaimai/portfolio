const image_01src = 'url("img/image01.jpg")';
const image_02src = 'url("img/image02.jpg")';
const image_03src = 'url("img/image03.jpg")';
const image_04src = 'url("img/image04.jpg")';

function nextImage() {
  const header = document.getElementById('slide');
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);

  if(nowBg == image_01src){
    header.style.backgroundImage = image_02src;
  }else if(nowBg == image_02src){
    header.style.backgroundImage = image_03src;
  }else if(nowBg == image_03src){
    header.style.backgroundImage = image_04src;
  }else{
    header.style.backgroundImage = image_01src;
  }
}

function prevImage(){
  const header = document.getElementById('slide');
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);


  if(nowBg == image_01src){
    header.style.backgroundImage = image_04src;
  }else if(nowBg == image_02src){
    header.style.backgroundImage = image_01src;
  }else if(nowBg == image_03src){
    header.style.backgroundImage = image_02src;
  }else{
    header.style.backgroundImage = image_03src;
  }
}

document.getElementById('slide').style.backgroundImage = image_01src;
document.getElementById('sc-to-left').addEventListener('click', prevImage);
document.getElementById('sc-to-right').addEventListener('click', nextImage);

setInterval(nextImage, 5000);