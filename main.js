const video = document.getElementById("video");
const progress = document.getElementById("progress");
const playVideo = () => {
  if (video.paused) {
    document.querySelector(".play-btn").innerHTML =
      "<i class='fa fa-pause fa-2x'></i>";
    video.play();
  } else {
    document.querySelector(".play-btn").innerHTML =
      "<i class='fa fa-play fa-2x'></i>";
    video.pause();
  }
};
const powerOffVideo = () => {
  if (video.paused) {
    document.querySelector(".play-btn").innerHTML =
      "<i class='fa fa-pause fa-2x'></i>";
    video.play();
  } else {
    video.currentTime = 0;
    video.pause();
    document.querySelector(".play-btn").innerHTML =
      "<i class='fa fa-play fa-2x'></i>";
  }
};
const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
  document.querySelector(".play-btn").innerHTML =
    "<i class='fa fa-play fa-2x'></i>";
};
const videoScreenTouched = (e) => {
  if (video.paused) {
    document.querySelector(".play-btn").innerHTML =
      "<i class='fa fa-pause fa-2x'></i>";
    video.play();
  } else {
    document.querySelector(".play-btn").innerHTML =
      "<i class='fa fa-play fa-2x'></i>";
    video.pause();
  }
};
document.querySelector(".play-btn").addEventListener("click", playVideo);
document.querySelector(".power-btn").addEventListener("click", powerOffVideo);

document.querySelector(".stop-btn").addEventListener("click", stopVideo);
document
  .querySelector(".video-section")
  .addEventListener("click", videoScreenTouched);

// const updateTimeStamp = () => {
//     document.querySelector(".time-stamp").innerText = Math.floor(video.currentTime)

// }
// setInterval(updateTimeStamp, 1000)
const updatingProgressBar = () => {
  progress.value = (video.currentTime / video.duration) * 100;
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + secs;
  }
  document.querySelector(".time-stamp").innerText = `${mins}:${secs}`;
};
video.addEventListener("timeupdate", updatingProgressBar);

const setVideoByProgress = () => {
  video.currentTime = (Number(progress.value) * video.duration) / 100;
};
progress.addEventListener("change", setVideoByProgress);

const makeFullScreen = () => {
  video.requestFullscreen();
};

document
  .querySelector(".full-screen-btn")
  .addEventListener("click", makeFullScreen);
