

function invertirTexto() {
  let palabra = document.getElementById('palabra').value;
  newpalabra = "";
  for (var i = 0; i < palabra.length; i++) {
    newpalabra = newpalabra + palabra.charAt((palabra.length - 1) - i);
  }
  document.getElementById("demo").innerHTML = newpalabra;
}
