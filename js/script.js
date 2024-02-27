const listaSpesa = ['latte', 'pane', 'uova', 'farina', 'carne'];
let contatore = 0;

const esito = document.getElementById ('esito')

while (contatore < listaSpesa.length) {
  console.log(contatore);
  
  // stampo gli elementi sella lista della spesa insieme
  // document.getElementById('esito').innerHTML=listaSpesa 
  const li = document.createElement('li');

  // stampo gli elementi sella lista della spesa singolarmente
  li.innerHTML = listaSpesa [contatore];
  esito.append(li);

  contatore++;
}


