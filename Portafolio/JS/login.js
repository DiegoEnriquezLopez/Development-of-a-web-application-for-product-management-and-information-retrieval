function signUp() {
	let user = document.getElementById('Username').value;
	let pass = document.getElementById('Password').value;

	if (user === '' || pass === '') {
		alert('Por favor, llena ambos campos antes de registrar.');
		return;
	}

	localStorage.setItem('usr', user);
	localStorage.setItem('pwd', pass);

	alert('Usuario registrado correctamente');
}

function logIn() {
	let inUsr = document.getElementById('Username').value;
	let inPwd = document.getElementById('Password').value;

	let savedUsr = localStorage.getItem('usr');
	let savedPwd = localStorage.getItem('pwd');

	if (!savedUsr || !savedPwd) {
		alert('No hay ningún usuario registrado aún.');
		return;
	}

	if (inUsr === savedUsr && inPwd === savedPwd) {
		alert('Log in exitoso');
	} else {
		alert('Usuario o contraseña no válidos');
	}
}

function clearData() {
	localStorage.clear();
	document.getElementById('Username').value = '';
	document.getElementById('Password').value = '';
	alert('Todos los datos han sido eliminados');
}
