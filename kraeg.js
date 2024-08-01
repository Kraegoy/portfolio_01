let x = 0;
let zIndex = ''
function fbImage(){
  x = 1;
  zIndex = "-1";  
  document.getElementById("image-src").style.transition = "2s";
  document.getElementById("image-src").src = "images/R.png";
  document.getElementById("image-src").style.left = "31em";
  document.getElementById("name1").innerHTML = "Kraeg Christian Avila";
  document.getElementById("name1").style.fontSize = "5em";
  document.getElementById("name1").style.left = "4em";
  document.getElementById("effects-src").src = "images/lightning.png";
  document.getElementById("effects-src").style.zIndex = zIndex;
  document.getElementById("effects-src").style.left = "20.2em";
}

function igImage(){
  x = 2;
  zIndex = '0';
  document.getElementById("image-src").style.transition = "2s";
  document.getElementById("image-src").src = "images/zoro.png";
  document.getElementById("image-src").style.left = "30em";
  document.getElementById("name1").innerHTML = "@Kegoyyy";
  document.getElementById("name1").style.fontSize = "6em";
  document.getElementById("name1").style.left = "2em";
  document.getElementById("effects-src").src = "images/zoroeffect.png";
  document.getElementById("effects-src").style.zIndex = zIndex;
  document.getElementById("effects-src").style.left = "29em";
}

function twImage(){
  x = 3;
  zIndex = '0';
  document.getElementById("image-src").style.transition = "2s";
  document.getElementById("image-src").src = "images/zenitsu.png";
  document.getElementById("image-src").style.left = "25em";
  document.getElementById("name1").innerHTML = "Kraeg Avila";
  document.getElementById("name1").style.fontSize = "6em";
  document.getElementById("name1").style.left = "4em";
  document.getElementById("effects-src").src = "images/zenitsuLightning.png";
  document.getElementById("effects-src").style.zIndex = zIndex;
  document.getElementById("effects-src").style.left = "27em";
}

function burgerEffect() {
  document.getElementById("myDropdown").classList.toggle("show");
  const effectsSrc = document.getElementById("effects-src");
  const imgSrc = document.getElementById("image-src");
  if (x == 3) {
    const audio1 = new Audio('images/DSlayer.mp3');
    audio1.currentTime = 0.3;
    audio1.play();
    imgSrc.src = "images/zenitsu2.png";
    document.getElementById("name1").style.textAlign = "right";
    document.getElementById("effects-src").style.left = "25em";
    imgSrc.style.transition =  "0s";
      imgSrc.style.left = "35em";
  }
  else if(x == 2){
    const audio2 = new Audio('images/santoryou.mp3');
    audio2.volume = 0.5;
    audio2.play();
    const audio1 = new Audio('images/sword.mp3');
    audio1.currentTime = 0.7;
    audio1.volume = 0.2;
    audio1.play();
    imgSrc.style.transition = "0s";
    document.getElementById("effects-src").style.left = "22em";
    imgSrc.style.left = "32em";
    imgSrc.src = "images/zoro2.png";
    
  }
  else{
   
      const audio2 = new Audio('images/godspeed.mp3');
      audio2.currentTime = 0;
      const desiredDuration = 4;
      audio2.addEventListener('timeupdate', function() {
        if (audio2.currentTime >= desiredDuration) {
          audio2.pause();
        }
      });
    audio2.play();

    const audio1 = new Audio('images/baka.mp3');
    audio1.play();
    imgSrc.style.transition = "0s";
    document.getElementById("effects-src").style.left = "22em";
    imgSrc.src = "images/killua2.png";
    document.getElementById("image-src").style.left = "37em";

  }
  
  effectsSrc.style.zIndex = "6";
  setTimeout(function() {
    effectsSrc.style.zIndex = zIndex;
  }, 1000);


}

window.onclick = function(event) {
  if (!event.target.matches('.burger-menu')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function searchClick(){
  document.getElementById("searchIcon").style.marginLeft = "8em";
  document.getElementById("inputSearch").style.marginLeft = "-3em";
  document.getElementById("inputSearch").style.display = "block";
  document.getElementById('inputSearch').focus();
}