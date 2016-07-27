var sln = document.getElementById("solution");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");

function addOp() {
  var i1Pi2 = parseFloat(input1.value) + parseFloat(input2.value);
sln.innerHTML = i1Pi2;
}

function subOp() {
  var i1Mi2 = parseFloat(input1.value) - parseFloat(input2.value);
sln.innerHTML = i1Mi2;
}

function multOp() {
  var i1Ti2 = parseFloat(input1.value) * parseFloat(input2.value);
sln.innerHTML = i1Ti2;
}

function divOp() {
  var i1Di2 = parseFloat(input1.value) / parseFloat(input2.value);
  if (parseFloat(input2) === 0) {
    alert("You cannot divide by zero");
  }
  else{
    sln.innerHTML = i1Di2;
  }
}

function clearField() {
  var sln = document.getElementById("solution");
sln.innerHTML = null;
document.getElementById("input1").value = "";
document.getElementById("input2").value = "";


}
