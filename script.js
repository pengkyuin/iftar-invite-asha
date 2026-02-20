document.getElementById("iftarForm").addEventListener("submit", function(e){
  e.preventDefault();

  const selected = document.querySelector('input[name="date"]:checked');
  const response = document.getElementById("response");

  if(!selected){
    response.innerHTML = "Pick a date first bestie 😭🌙";
    return;
  }

  response.innerHTML = "YAYYY 🥺 I can't wait for " + selected.value + " 🍽️💗";
});
