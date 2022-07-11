const picArray = [
    {src: './img/x21015_01.png'},
    {src: './img/x21015_02.png'},
    {src: './img/fish1.png'},
    {src: './img/fish2.png'},
    {src: './img/fish3.png'},
    {src: './img/meisi.png'}
    ];
    
    let counter = 0;
    
    function changePicture() {
      if (counter < picArray.length) {
        document.getElementById('pics').src = picArray[counter].src;
        counter++;
      } else {
        document.getElementById('pics').src = picArray[0].src;
        counter = 1;
      } 
    }
    
    let playingID = 0;
    
    function playSlidedeshow () {
      if (playingID == 0) {
        document.getElementById('playButton').innerHTML = 'STOP';
        playingID = setInterval(changePicture, 2000);
      } else {
        document.getElementById('playButton').innerHTML = 'START';
        clearInterval(playingID);
        playingID = 0;
      }
    }

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });