const duck = document.getElementById("duck");
const audio = document.getElementById('audio');
const button = document.getElementById("button");
const dialog = document.getElementById("dialog");
const blow = document.getElementById("butt");
const start_button = document.getElementById("start_button");
const skip_butt = document.getElementById("skip");
const duck_sp = document.getElementById("duck_sp");

const sleep = ms => new Promise(res => setTimeout(res,ms));

var candle_cake = false;
var skipped = false;
var end = false;

//for Phone
function tap() {
  playSfx('./asset/freesound_community-button-pressed-38129.mp3');
  fade("popup");
  movie();
  if(end == true){
    window.location.reload();
  }
}

function blow_candle(){
    if(candle_cake == true){
    dialog.textContent= "";
    duck.classList.remove("cake");
    duck.classList.add("snuff"); 
    blow.disabled = true;
    setTimeout(() => {
      movie2();
    },1000);
  }
} 

function skip() {
  skipped = true;
  audio.pause();
  setTimeout(() => {
  movie_point5(); }, 900);
  skip_butt.textContent = "";
}
// end for phone

start_button.addEventListener("click", () => {
  playSfx('./asset/freesound_community-button-pressed-38129.mp3');
  fade("popup");
  movie();
  if(end == true){
    window.location.reload();
  }
});

skip_butt.addEventListener("click", () => {
  skipped = true;
  audio.pause();
  setTimeout(() => {
  movie_point5(); }, 900);
  skip_butt.textContent = "";
})

blow.addEventListener("click", () => {
    if(candle_cake == true){
    dialog.textContent= "";
    duck.classList.remove("cake");
    duck.classList.add("snuff"); 
    blow.disabled = true;
    setTimeout(() => {
      movie2();
    },1000);
  }
})


function resolveAudioUrl(filePath) {
  try {
    return new URL(filePath, window.location.href).toString();
  } catch (error) {
    return filePath;
  }
}

function playSfx(filePath){
    const audio = document.getElementById('audio');
    if (!audio) return;

    const resolvedPath = resolveAudioUrl(filePath);
    audio.pause();
    audio.src = resolvedPath;
    audio.preload = 'auto';
    audio.load();
    audio.currentTime = 0;
    audio.play().catch(error => {
        console.warn('Audio playback failed:', error);
        console.warn('Resolved audio URL:', resolvedPath);
    });
}

function fade(id) {
  const element = document.getElementById(id);
  if (!element) return;
  element.classList.add("fade-out");
  element.style.display = "none";
}

async function movie(){

  if (duck) {
    duck.style.display = "flex";
  }
  
  await sleep(2000);

  duck.classList.add("sing");
  playSfx('./asset/8bit Happy Birthday [zMqIfx3LMQc].mp3');
  skip_butt.textContent = "Skip";

  if (skipped){
      audio.onended = async function () {

        duck.classList.remove("sing");
        duck.classList.add("cake");

        candle_cake = true;
        dialog.textContent= "Tap cake to blow the candle";
        dialog.style.fontSize= "medium";
        dialog.style.animation = "text 1.5s infinite"; }
  }

}

//after blow candle
async function movie2(){
 duck.classList.remove("snuff");
 dialog.style.fontSize= "x-large";
 dialog.style.animation = "none";

 speak("happy brithday!1!, I wish u da best as always twin");
 await sleep (3000);
 speak("hope u got everything u wish for");
 await sleep (3000);
 speak("I wana do some cool stuff for u and this is the best I've got lol");
 await sleep (3000);
 speak("Thanks for being my super goated friend");
 await sleep (3000);
 speak("happy birthday again")
 await sleep (3000);
 speak(" babye :333!!") 
 await sleep (3000);
 dialog.textContent= "";
 duck.style.display = "none";
 end = true;
 popup.classList.remove("fade-out");
 popup.style.display = "flex";
 start_button.textContent= "tap me to see again!";
}

function speak(text){
  dialog.textContent= text;
}

function movie_point5(){
  
  duck.classList.remove("sing");
  duck.classList.add("cake");

  candle_cake = true;
  dialog.textContent= "Tap cake to blow the candle";
  dialog.style.fontSize= "medium";
  dialog.style.animation = "text 1.5s infinite";
}
