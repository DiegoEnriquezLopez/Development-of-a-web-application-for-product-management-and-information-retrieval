// ----------------------------------------------------
// 2. CÓDIGO JAVASCRIPT
// ----------------------------------------------------

const contenedor = document.getElementById('contenedor-producto');
const API_URL = 'https://fakestoreapi.com/products'; // Endpoint del producto 

/**
 * Función asíncrona para hacer la llamada a la API y mostrar los datos.
 */
async function obtenerProducto() {
    contenedor.innerHTML = '<p>Cargando datos...</p>'; // Muestra un mensaje de carga
    const id = document.getElementById("id").value;
    if(id == ''){
        alert("Escribe el id");
        return;
    }
    try {
        // 1. Realizar la petición GET a la URL de la API
        const respuesta = await fetch(`${API_URL}/${id}`);
        //const respuesta = await fetch(API_URL+'/'+id);

        // 2. Verificar si la respuesta fue exitosa (código 200-299)
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        // 3. Convertir el cuerpo de la respuesta a un objeto JSON
        const datos = await respuesta.json();

        // 4. Mostrar los datos en el HTML
        mostrarDatosProducto(datos);

    } catch (error) {
        // Manejar cualquier error (de red, de HTTP, o de JSON)
        contenedor.innerHTML = `<p style="color: red;">¡Error al obtener los datos!</p><p>${error.message}</p>`;
        console.error('Hubo un problema con la petición fetch:', error);
    }
}

/**
 * Inserta los datos obtenidos en el contenedor HTML.
 */
function mostrarDatosProducto(producto) {
    contenedor.innerHTML = `
        <div class="producto">
            <h2>${producto.title}</h2>
            <img src="${producto.image}" alt="${producto.title}">
            <p><strong>Precio:</strong> $${producto.price}</p>
            <p><strong>Categoría:</strong> ${producto.category}</p>
            <p><strong>Descripción:</strong> ${producto.description}</p>
        </div>
    `;
}