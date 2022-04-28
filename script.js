const btn = document.querySelector(".btn");
const video = document.querySelector("video");
const strong = document.querySelector("strong");

btn.addEventListener("click",activeBtn);
strong.addEventListener("click",closeVideo);

function closeVideo(){
  btn.classList.remove("active");
  video.style.display = "none";
  strong.style.display = "none";
  video.pause();
  video.currentTime = 0;
}

function activeBtn(){
  btn.classList.add("active");
  setTimeout(() => {
     video.style.display = "flex";
     strong.style.display = "flex";
     video.play();
  },500);
}