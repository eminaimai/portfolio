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

$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
        pauseOnFocus: false,//フォーカスで一時停止を無効
        pauseOnHover: false,//マウスホバーで一時停止を無効
        pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
    });

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
}); 

$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );