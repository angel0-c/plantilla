let users = [];

function consultar() {
  const formContainer = document.getElementById('formContainer');

  // Crear el formulario
  formContainer.innerHTML = `
      <div class="login-container">
          <form class="g-3" onsubmit="return mostrarAlerta()">
              <div class="form-group">
                  <label for="nombre" class="form-label">Nombre</label>
                  <input type="text" class="form-control" id="nombre" required />
              </div>
              <div class="form-group">
                  <label for="apellido" class="form-label">Apellido</label>
                  <input type="text" class="form-control" id="apellido" required />
              </div>
              <div class="form-group">
                  <label for="email" class="form-label">Correo</label>
                  <input type="email" class="form-control" id="email" required />
              </div>
              <div class="form-group">
                  <label for="inputPassword4" class="form-label">Contraseña</label>
                  <input type="password" class="form-control" id="inputPassword4" required />
              </div>
              <div class="form-group">
                  <label for="inputAddress" class="form-label">Dirección</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="###, ###, ###" />
              </div>
              <div class="form-group">
                  <label for="inputCity" class="form-label">Colegio</label>
                  <input type="text" class="form-control" id="inputCity" required />
              </div>
              <div class="form-group">
                  <label for="inputZip" class="form-label">Grado</label>
                  <input type="text" class="form-control" id="inputZip" />
              </div>
              <div class="form-group">
                  <label for="inputState" class="form-label">Cargo</label>
                  <select id="inputState" class="form-select" required>
                      <option selected disabled>Elegir...</option>
                      <option>Estudiante</option>
                      <option>Docente</option>
                      <option>Administrador</option>
                  </select>
              </div>
              <div class="form-group">
                  <button type="submit" class="btn btn-primary">Crear</button>
              </div>
          </form>
      </div>
  `;

  // Mostrar el formulario
  formContainer.style.display = 'block';

  // Crear contenedor para la tabla
  const tableContainer = document.createElement('div');
  tableContainer.id = 'tableContainer';
  formContainer.appendChild(tableContainer);
}

function mostrarAlerta() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const colegio = document.getElementById('inputCity').value;

  // Muestra una alerta con los datos ingresados
  Swal.fire({
    title: "¿Quieres guardar la información?",
    text: "Estás seguro?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí"
  }).then((result) => {
    if (result.isConfirmed) {
      users.push({ nombre, apellido, email, colegio });
      Swal.fire("Guardado con éxito!", "", "success");
      displayTable();
      addNumberValidationForm(); // Muestra el formulario de validación de números
    }
  });
  return false; // Evita que el formulario se envíe
}

function displayTable() {
  const tableContainer = document.getElementById("tableContainer");
  let tableHTML = '<table class="table table-striped mt-3"><thead><tr><th>Nombre</th><th>Apellido</th><th>Correo</th><th>Colegio</th></tr></thead><tbody>';
  users.forEach(user => {
    tableHTML += `<tr><td>${user.nombre}</td><td>${user.apellido}</td><td>${user.email}</td><td>${user.colegio}</td></tr>`;
  });
  tableHTML += '</tbody></table>';
  tableContainer.innerHTML = tableHTML;
}

