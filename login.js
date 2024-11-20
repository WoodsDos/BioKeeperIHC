// VALIDACIÓN DE FORMULARIO
const form = document.querySelector('form');
const loginButton = document.querySelector('.solid-login');

loginButton.addEventListener("click", (event) => {
  event.preventDefault(); // Evita la acción predeterminada del enlace
  const email = form.elements["email"].value;
  const password = form.elements["password"].value;

  // Validación de campos vacíos
  if (!email || !password) {
    alert("Por favor, complete los campos requeridos.");
  } else if (!validateEmail(email)) {
    // Validación de correo electrónico
    alert("Por favor, ingrese un correo válido.");
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