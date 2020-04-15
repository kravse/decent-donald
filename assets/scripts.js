document.addEventListener("DOMContentLoaded", function () {
  let compliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("quote").innerHTML = '"' + compliment + '"';
});

