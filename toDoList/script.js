let btn = document.getElementById("add");
let input = document.getElementById("addItem");
let result = document.querySelector(".output");

let ul = document.createElement("ul");

btn.addEventListener("click", () => {
  let value = input.value;
  let doneBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");
  let li = document.createElement("li");
  let btnDiv = document.createElement("div");
  let para = document.createElement("p");
  doneBtn.innerHTML = "<i class='fa-solid fa-check'></i>";
  deleteBtn.innerHTML = "<i class='fa-solid fa-ban'></i>";
  btnDiv.appendChild(doneBtn);
  btnDiv.appendChild(deleteBtn);
  para.innerText = value;
  li.appendChild(para);
  li.appendChild(btnDiv);
  ul.appendChild(li);
  result.append(ul);
  li.classList = "list";
  ul.classList = "unorder";
  para.classList = "para";
  btnDiv.classList = "btnDiv";
  doneBtn.classList = "doneBtn";
  deleteBtn.classList = "deleteBtn";

  doneBtn.addEventListener("click", () => {
    para.classList = "underline";
  });

  deleteBtn.addEventListener("click", () => {
    ul.removeChild(li);
  });
});
