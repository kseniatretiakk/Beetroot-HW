

  const firstSong = document.querySelector(".playlist__btn");
  firstSong.addEventListener("click", function () {
    const list = document.querySelectorAll(".playlist__sound");
    list.forEach(function (sound) {
      sound.style.visibility = "visible";
      firstSong.style.display = "none";
    })
  });

  const buttonScale = document.querySelector(".playlist__btn");
  buttonScale.addEventListener("mouseover", function () {
    buttonScale.style.transform = "scale(1.2)";
    buttonScale.style.transition = "all 0.5s";
  });

  const buttonDecrease = document.querySelector(".playlist__btn");
  buttonDecrease.addEventListener("mouseout", function () {
    buttonScale.style.transform = "scale(0.9)";
    buttonScale.style.transition = "all 0.5s";
  });
    
  
  const playlistSounds = document.querySelectorAll(".playlist__sound");
  playlistSounds.forEach(function (sound) {
  sound.addEventListener("mouseover", function () {
    sound.style.transform = "scale(1.2)";
    sound.style.transition = "all 0.4s"
  })
  });

  const decrease = document.querySelectorAll(".playlist__sound");
  decrease.forEach(function (sound) {
  sound.addEventListener("mouseout", function () {
    sound.style.transform = "scale(1)";
    sound.style.transition = "all 0.4s";
  })
  });



  const menu = document.querySelector(".three-dots");
  firstSong.forEach(function (sound) {

  })

  const dots = document.querySelector(".three-dots");
  parentElement.appendChild(newElement);  

  
 
 