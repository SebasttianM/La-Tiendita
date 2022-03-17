const showData = async (producto, card) => {
  card.innerHTML = "";
  const allProducts = await producto;
  allProducts.forEach((info) => {
    const { imagen, nombre, precio } = info;
    card.innerHTML += `
        <div class="card">
                <span class="porcentage">
                     <h5>32%dto</h5>
                </span>
                <img src="${imagen}" alt="" class="imgProducto">
                <div class="desciptionProducto">
                    <p class="productoPrecio">${precio}</p>
                    <p class="detalle">${nombre}</p>
                </div>
            <button class="agregar" data-mdb-toggle="modal" data-mdb-target="#modalAgregarProducto"><p>Agregar</p></button>
        </div>
        `;
  });
};

export default showData;
