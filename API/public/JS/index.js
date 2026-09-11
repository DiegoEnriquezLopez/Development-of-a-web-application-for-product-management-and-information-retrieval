function cargarPokemonRandom() {

  const randomID = Math.floor(Math.random() * 898) + 1;

  const url = `https://pokeapi.co/api/v2/pokemon/${randomID}`;

  fetch(url)
    .then(r => r.json())
    .then(p => {

      const box = document.getElementById("pokemonHUD");

      const nombre = p.name.toUpperCase();
      const img = p.sprites.front_default;
      const tipo = p.types[0].type.name.toUpperCase();
      const peso = (p.weight / 10).toFixed(1);
      const altura = (p.height / 10).toFixed(1);

      box.innerHTML = `
        <div class="pokemon-card shadow-sm">
            <h4 class="pokemon-title">Pokémon del día</h4>
            <img src="${img}" class="pokemon-img" alt="${nombre}">
            <h5 class="text-center mt-2">${nombre}</h5>
            <span class="type-badge">${tipo}</span>

            <p class="pokemon-info mt-2">
                Peso: ${peso} kg <br>
                Altura: ${altura} m
            </p>
        </div>
      `;
    })
    .catch(err => console.log("Error Pokémon:", err));
}

cargarPokemonRandom();

fetch("http://localhost:3000/api/productos")
  .then(res => res.json())
  .then(productos => {
    const contenedor = document.getElementById("listaProductos");

    productos.forEach(p => {

      contenedor.innerHTML += `
        <div class="col-md-3 mb-4">
          <div class="card h-100 shadow-sm">

            <img src="Assets/${p.img}" class="card-img-top" alt="${p.name}">

            <div class="card-body d-flex flex-column">

              <h5 class="card-title">${p.name}</h5>

              <p class="card-text descripcion-corta" id="desc-${p.id}">
                ${p.description}
              </p>

              <button class="btn btn-link p-0" id="btn-${p.id}"
                onclick="toggleDescripcion(${p.id})">
                Ver más
              </button>

              <p class="precio text-success fw-bold">$${p.price}</p>

              <span class="badge bg-info categoria">${p.category}</span>

              <button class="btn btn-primary btn-agregar"
                onclick="agregarAlCarrito(
                  '${p.name.replace(/'/g, "\\'")}',
                  ${p.price},
                  '${p.img}',
                  '${p.description.replace(/'/g, "\\'")}',
                  '${p.category}'
                )">
                Agregar al carrito
              </button>

            </div>
          </div>
        </div>
      `;
    });
  })
  .catch(err => console.error("Error cargando productos:", err));

function toggleDescripcion(id) {
  const desc = document.getElementById("desc-" + id);
  const btn = document.getElementById("btn-" + id);

  if (!desc || !btn) return;

  if (desc.classList.contains("descripcion-corta")) {
    desc.classList.remove("descripcion-corta");
    btn.innerText = "Ver menos";
  } else {
    desc.classList.add("descripcion-corta");
    btn.innerText = "Ver más";
  }
}

function agregarAlCarrito(name, price, img, description, category) {

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  carrito.push({ 
    name,
    price,
    img,
    description,
    category
  });

  localStorage.setItem("carrito", JSON.stringify(carrito));

  alert("Producto agregado al carrito");
}
