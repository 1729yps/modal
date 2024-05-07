const openbtn = document.querySelector(".openbtn");
const modal = document.querySelector(".containt");
const closebtn = document.querySelector(".closebtn");

openbtn.addEventListener("click", function () {
  modal.classList.add("nextcontaint");
});
closebtn.addEventListener("click", function () {
  modal.classList.remove("nextcontaint");
});



