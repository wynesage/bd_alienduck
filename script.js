const duck = document.getElementById("duck");
const audio = document.getElementById('audio');
const button = document.getElementById("button");
const dialog = document.getElementById("dialog");

const sleep = ms => new Promise(res => setTimeout(res,ms));

var candle_lit = false;

//for Phone
function tap() {
  document.getElementById("popup").style.display = "none";
}

function blow_candle(){
  if(candle_lit == true){
    dialog.textContent= "";
    duck.classList.remove("cake");
    duck.classList.add("blink"); 

    setTimeout(() => {
      movie2();
    },1000);
  }
} 

function playSfx(filePath){
    const audio = document.getElementById('audio');
    audio.src = filePath;
    audio.play();
}

function fade(id) {
  const element = document.getElementById(id);
  if (!element) return;
  element.classList.add("fade-out");
  element.style.display = "none";
}
const start_button = document.getElementById("start_button");

start_button.addEventListener("click", () => {
  playSfx('asset/freesound_community-button-pressed-38129.mp3');
  fade("popup");
  movie();
});

const blow = document.getElementById("butt");

blow.addEventListener("click", () => {
  if(candle_lit == true){
    dialog.textContent= "";
    duck.classList.remove("cake");
    duck.classList.add("blink"); 

    setTimeout(() => {
      movie2();
    },1000);
  }
});


async function movie(){

  if (duck) {
    duck.style.display = "flex";
  }

  await sleep(1000);

  duck.classList.add("blink");
  await sleep(300);
  playSfx('asset/universfield-cartoon-blinking-487897.mp3');

  await sleep(1000)
  duck.classList.remove("blink");

    duck.classList.add("sing");
    playSfx('asset/universfield-cartoon-blinking-487897.mp3');
    audio.onended = async function () {
      duck.classList.remove("sing");

      await sleep(1000);

      duck.classList.add("cake");
      candle_lit = true;
      dialog.textContent= "Tap cake to blow the candle";
      dialog.style.fontSize= "medium";
      dialog.style.animation = "text 1.5s infinite";
}

}

//after blow candle
function movie2(){
 duck.classList.remove("blink");
 dialog.style.fontSize= "x-large";
 dialog.style.animation = "none";

 dialog.textContent = "haiiii:3";
}

