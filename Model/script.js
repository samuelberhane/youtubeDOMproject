let btn = document.querySelector("#btn");
let container = document.querySelector(".model-container");
let close = document.querySelector(".close");
let body = document.querySelector("body");
console.log(body);

btn.addEventListener("click", function () {
  container.style.display = "block";
  container.style.backgroundColor = "rgba(0,0,0,0.3)";
});

close.addEventListener("click", function () {
  container.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == container) {
    container.style.display = "none";
  }
});
