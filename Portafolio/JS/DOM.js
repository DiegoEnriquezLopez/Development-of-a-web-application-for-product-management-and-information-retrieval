function dioClick(){
	var inputText = document.getElementById('input')
	var texto =  inputText.value
	var elementoH1 = document.getElementById('titulo')
	alert('Hola ' + texto)
	elementoH1.textContent = texto;
}