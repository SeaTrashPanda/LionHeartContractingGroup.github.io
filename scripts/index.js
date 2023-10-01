// open image function

function openModal(imageSrc, captionText) {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");

  modal.style.display = "block";
  modalImg.src = imageSrc;
  modalCaption.innerHTML = captionText;
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}