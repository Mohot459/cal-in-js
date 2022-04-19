function Number(num) {
  var result = document.getElementById('input');
  result.value += num;

}
function result() {
  var result = document.getElementById('input');
  result.value = eval(result.value);
}
function clearResult() {
  var result = document.getElementById('input');
  result.value = "";
}
function deleteChar() {
  var result = document.getElementById('input');
  result.value = result.value.slice(0,-1);
}
