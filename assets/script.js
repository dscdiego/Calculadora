function insert(num)
{
  const numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;
}

function clean ()
{
  document.getElementById('resultado').innerHTML = ' ';
}

function back () {
  const numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero.slice(0, -1);
}

function calcular () {
  const resultado = document.getElementById('resultado').innerHTML;
  if (resultado)
  {
    document.getElementById('resultado').innerHTML = eval(resultado);
  }
  else{
    document.getElementById('resultado').innerHTML = ' ';
  }
}