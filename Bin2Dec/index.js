let form = document.getElementById("form");
let aviso = document.getElementById("aviso-binario");
let txtBin = document.getElementById("binario");
let binario = null;
let btnConfirmar = document.getElementById("confirmar");

btnConfirmar.onclick = function () {
  binario = parseInt(txtBin.value);
  console.log(txtBin.value);
  if (binario !== 0) {
    aviso.hidden = "false";
  } else {
    aviso.hidden = "true";
  }
};
