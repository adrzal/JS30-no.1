
document.addEventListener("keypress", played);

var btn;

function played(e){
    
    btn = document.getElementById(""+ e.key);
    
    if(!btn) return;
    
    btn.classList.toggle("play");
    
    var song = document.querySelector("." + e.key);
    
    song.currentTime = 0;
    
    song.play();
}


document.addEventListener("transitionend", finito);

function finito(e){
    
  if(e.propertyName != "transform") return;
    
  btn.classList.remove("play");
    
}