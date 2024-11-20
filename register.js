// VALIDACIÓN DE FORMULARIO
const form = document.querySelector('form');
const registerButton = document.querySelector('.solid-login');

registerButton.addEventListener("click", (event) => {
  event.preventDefault(); // Evita la acción predeterminada del enlace
  const username = form.querySelector('input[placeholder="Ingrese su nombre usuario"]').value;
  const email = form.querySelector('input[placeholder="Ingrese su correo electrónico o usuario"]').value;
  const firstName = form.querySelector('input[placeholder="Ingrese sus nombres"]').value;
  const lastName = form.querySelector('input[placeholder="Ingrese sus apellidos"]').value;
  const password = form.querySelector('input[placeholder="Ingrese su contraseña"]').value;
  const confirmPassword = form.querySelector('input[placeholder="Ingrese su contraseña nuevamente"]').value;

  // Validación de campos vacíos
  if (!username || !email || !firstName || !lastName || !password || !confirmPassword) {
    alert("Por favor, complete todos los campos.");
  } else if (!validateEmail(email)) {
    // Validación de correo electrónico
    alert("Por favor, ingrese un correo válido.");
  } else if (password !== confirmPassword) {
    // Validación de coincidencia de contraseñas
    alert("Las contraseñas no coinciden.");
  } else {
    // Si todo es válido, redirige a la página
    window.location.href = "home.html";
  }
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}
