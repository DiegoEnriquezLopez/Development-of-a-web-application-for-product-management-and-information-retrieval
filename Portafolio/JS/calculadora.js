var display = document.querySelector('.calculator__display');
var botones = document.querySelectorAll('.calculator__keys button');

var numero1 = "";
var numero2 = "";
var operador = "";
var resultado = 0;
var escribiendoSegundo = false;
var punto1 = false;
var punto2 = false;

for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function() {
    var valor = this.textContent;

    if (valor == "0" || valor == "1" || valor == "2" || valor == "3" ||
        valor == "4" || valor == "5" || valor == "6" || valor == "7" ||
        valor == "8" || valor == "9") {
      if (escribiendoSegundo == false) {
        numero1 = numero1 + valor;
        display.textContent = numero1;
      } else {
        numero2 = numero2 + valor;
        display.textContent = numero1 + " " + operador + " " + numero2;
      }
    }

    if (valor == "+" || valor == "-" || valor == "×" || valor == "÷") {
      if (valor == "-" && numero1 == "" && escribiendoSegundo == false) {
        numero1 = "-";
        display.textContent = numero1;
        return;
      }

      if (valor == "-" && escribiendoSegundo == true && numero2 == "") {
        numero2 = "-";
        display.textContent = numero1 + " " + operador + " " + numero2;
        return;
      }

      if (numero1 != "" && escribiendoSegundo == false) {
        operador = valor;
        escribiendoSegundo = true;
        display.textContent = numero1 + " " + operador;
      }
  }

    if (valor == ".") {
      if (escribiendoSegundo == false && punto1 == false) {
        numero1 = numero1 + ".";
        display.textContent = numero1;
        punto1 = true;
      }

      else if (escribiendoSegundo == true && punto2 == false) {
        numero2 = numero2 + ".";
        display.textContent = numero1 + " " + operador + " " + numero2;
        punto2 = true; 
      }
    }


    if (valor == "AC") {
      numero1 = "";
      numero2 = "";
      operador = "";
      escribiendoSegundo = false;
      punto1 = false;
      punto2 = false;
      display.textContent = "0";
    }


    if (valor == "=") {
      if (numero1 == "" || operador == "" || numero2 == "") {
        display.textContent = "Syntax Error";
        return; 
      }
      var n1 = numero1 * 1; 
      var n2 = numero2 * 1;

      if (operador == "+") {
        resultado = n1 + n2;
      }
      if (operador == "-") {
        resultado = n1 - n2;
      }
      if (operador == "×") {
        resultado = n1 * n2;
      }
      if (operador == "÷") {
        if (n2 == 0) {
          resultado = "Math Error";
        } else {
          resultado = n1 / n2;
        }
      }

      display.textContent = resultado;
      numero1 = resultado + ""; 
      numero2 = "";
      escribiendoSegundo = false;
    }
  });
}
