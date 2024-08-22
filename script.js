const images = document.querySelectorAll(".image");
const popup = document.querySelector(".popup");
const popupImage = document.querySelector(".popup-image");
const popupClose = document.querySelector(".close");
const popupNext = document.querySelector(".popup-next");
const popupPrev = document.querySelector(".popup-prev");


let popupIndex = 0;

function openPopup(index) {
  popup.style.display = "block";
  popupImage.src = images[index].src;
  
  popupIndex = index;
  // popup.classList.add("show")
}

function closePopup() {
  popup.style.display = "none";
  popup.classList.remove("show");
  popupImage.src="";
}

function nextImage() {
  if (popupIndex < images.length - 1) {
    popupImage.src = images[popupIndex + 1].src;
    popupIndex++;
    // popupNext.style.display = "block"
    
  }
}

function prevImage() {
  if (popupIndex > 0) {
     popupIndex--;
    popupImage.src = images[popupIndex - 1].src;
    // popupPrev.style.display = "block"
  }
}
images.forEach((image, index) => {
  image.addEventListener("click", () => {
    openPopup(index);
  });
});
popupClose.addEventListener("click", closePopup);
popupNext.addEventListener("click", nextImage);
popupPrev.addEventListener("click", prevImage);