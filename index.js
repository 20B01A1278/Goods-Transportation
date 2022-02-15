
let lb = document.getElementById("lb");
let dlrb = document.getElementById("dlrb");
let drrb = document.getElementById("drrb");


lb.addEventListener("click", function (e) {
  console.log("Login button clicked");
  e.preventDefault();
  location.href="login.html";
});
dlrb.addEventListener("click", function (e) {
  console.log("dealer Register button clicked");
});
drrb.addEventListener("click", function () {
  console.log("driver Register button clicked");
});
