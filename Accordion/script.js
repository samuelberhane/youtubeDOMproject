let container = document.querySelectorAll(".main-container");
console.log(container.length);

for (let i = 0; i < container.length; i++) {
  container[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
  console.log(container[i]);
}
