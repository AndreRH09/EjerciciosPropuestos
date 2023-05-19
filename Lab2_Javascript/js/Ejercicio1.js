const d = new Date();
const dia = d.getDay();

function diaSemana() {
  switch (dia) {
    case 1:
      document.getElementById("demo").innerHTML = "Lunes";
      break;
    case 2:
      document.getElementById("demo").innerHTML = "Martes";
      break;
    case 3:
      document.getElementById("demo").innerHTML = "Miercoles";
      break;
    case 4:
      document.getElementById("demo").innerHTML = "Jueves";
      break;
    case 5:
      document.getElementById("demo").innerHTML = "Viernes";
      break;
    case 6:
      document.getElementById("demo").innerHTML = "Sabado";
      break;
    case 0:
      document.getElementById("demo").innerHTML = "Domingo";
      break;
    default:
      break;
  }

}
