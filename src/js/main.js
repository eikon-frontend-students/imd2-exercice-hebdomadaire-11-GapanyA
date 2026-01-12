var theButton = document.querySelector("#button");
let num = 147;
theButton.addEventListener("click", function () {
  theButton.classList.add("clicked");
  setTimeout(() => theButton.classList.remove("clicked"), 2000);
  let result = document.querySelector("#likecount");
  result.innerHTML = num++;
});
