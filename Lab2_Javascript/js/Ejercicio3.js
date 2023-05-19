
function diasRestantes() {

  aniversarioAqp = new Date(2023, 07, 15);
  hoy = new Date();

  diasMilisegundosRestantes = aniversarioAqp.getTime() - hoy.getTime();
  diasRestantes = diasMilisegundosRestantes / (1000 * 60 * 60 * 24);

  diasenteros = Math.ceil(diasRestantes);
  // document.write(" el numero de Dias entre <br>" + aniversarioAqp + " y <br>" + hoy + " es<br>" + diasRestantes);
  document.getElementById("demo").innerHTML = "los dias restantes entre<br>" + aniversarioAqp + "<br>" + hoy + "<br>son :" + diasenteros;
};