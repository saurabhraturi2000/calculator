function add() {
  var x = Number(document.getElementById("num1").value);
  var y = Number(document.getElementById("num2").value);
  var z = (x + y).toFixed(2);
  document.getElementById("result").innerHTML = `<h3>Result:` + z + "</h3>";
}

function sub() {
  var x = Number(document.getElementById("num1").value);
  var y = Number(document.getElementById("num2").value);
  var z = (x - y).toFixed(2);
  document.getElementById("result").innerHTML = `<h3>Result:` + z + "</h3>";
}

function mul() {
  var x = Number(document.getElementById("num1").value);
  var y = Number(document.getElementById("num2").value);
  var z = (x * y).toFixed(2);
  document.getElementById("result").innerHTML = `<h3>Result:` + z + "</h3>";
}

function div() {
  var x = Number(document.getElementById("num1").value);
  var y = Number(document.getElementById("num2").value);
  var z = (x / y).toFixed(2);
  document.getElementById("result").innerHTML = `<h3>Result:` + z + "</h3>";
}
