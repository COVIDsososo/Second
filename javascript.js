let clicks = 0;
function onClick() {
  clicks +=1;
  alert (clicks);
}

function changeColor() {
  document.getElementById('background-color').href="./styles.css";
  x=Math.floor((Math.random() * 255) + 1);
  y=Math.floor((Math.random() * 255) + 1);
  z=Math.floor((Math.random() * 255) + 1);
  result = (x, y, z)
  background-color = RGB result;
}


//hhhh


