const picArray = [
    {src: './img/logo.png'},
    {src: './img/torace.png'},
    {src: './img/bluefish.png'},
    {src: './img/yellowfish.png'},
    {src: './img/fish03.png'},
    {src: './img/fish04.png'},
    {src: './img/x21015_01.png'},
    {src: './img/x21015_02.png'},
    {src: './img/robot.png'},
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

