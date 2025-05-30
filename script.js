function simulate() {
  const inside = parseInt(document.getElementById("inside").value);
  const outside = parseInt(document.getElementById("outside").value);
  const resultText = document.getElementById("result");

  // Resize water bars for visual effect
  document.getElementById("inside-bar").style.width = inside * 10 + "px";
  document.getElementById("outside-bar").style.width = outside * 10 + "px";

  // Osmosis logic
  if (inside > outside) {
    resultText.innerText = "Water moves out of the cell.";
  } else if (outside > inside) {
    resultText.innerText = "Water moves into the cell.";
  } else {
    resultText.innerText = "Water is balanced.";
  }

  console.log(resultText.innerText); // For dev tools screenshot
}