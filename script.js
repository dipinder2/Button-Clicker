var i = 0;
function doitsjob(element) {
  if (element.id == "upside-down") {
    alert("you have caught me rotated 180 degrees");
  } else if (element.id == "btn-click-me") {
    window.print();
  } else if (element.id == "counter-btn") {
    var counter = document.querySelector("#counter");
    i++;
    counter.innerHTML = i;
  }
}
