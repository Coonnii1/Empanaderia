/* =========================================================
   Empanadería La Chilena v5.1 - Lógica de Negocio y SPA
   ========================================================= */

/* ====== Productos Principales (Catálogo de Empanadas) ====== */
const PRODUCTS = [
  {
    id: 1,
    nombre: "Empanada de Pino",
    categoria: "Clásicas",
    precio: 1500,
    ingredientes: "Carne, cebolla, huevo duro, aceitunas y pasas.",
    tipo: "Horno",
    stock: 25, 
    img: "https://www.tipicochileno.cl/wp-content/uploads/2021/05/empanada-chilena-1200-628.jpg",
    extras: [
      { id: "pebre", name: "Pebre", price: 300 },
      { id: "aji", name: "Ají", price: 200 },
      { id: "bebida", name: "Bebida 350ml", price: 800 }
    ]
  },
  {
    id: 2,
    nombre: "Empanada de Queso",
    categoria: "Clásicas",
    precio: 1300,
    ingredientes: "Masa dorada rellena de queso derretido.",
    tipo: "Frita",
    stock: 30, 
    img: "https://i.ytimg.com/vi/RKZrqSeSXEE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA2wr8xqXSJ-2cCYBWDP5MYq8xqLA",
    extras: [
      { id: "mayo", name: "Mayonesa", price: 200 },
      { id: "ketchup", name: "Ketchup", price: 200 }
    ]
  },
  {
    id: 3,
    nombre: "Empanada Napolitana",
    categoria: "Especiales",
    precio: 1800,
    ingredientes: "Queso, tomate y orégano al estilo napolitano.",
    tipo: "Horno",
    stock: 18, 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDdIXFqZ1-YaVCciF3hIAn_5-vRfzwM5tbg&s",
    extras: [
      { id: "queso", name: "Queso extra", price: 400 },
      { id: "bebida", name: "Bebida 500ml", price: 1000 }
    ]
  },
  {
    id: 4,
    nombre: "Empanada de Pollo",
    categoria: "Clásicas",
    precio: 1600,
    ingredientes: "Pollo desmenuzado con cebolla y condimentos suaves.",
    tipo: "Horno",
    stock: 12, 
    img: "https://campollo.com/wp-content/uploads/2024/08/RECETA-DE-EMPANADAS-DE-POLLO-AGOSTO-scaled.jpg",
    extras: [
      { id: "salsa", name: "Salsa BBQ", price: 250 }
    ]
  },
  {
    id: 5,
    nombre: "Empanada Vegana",
    categoria: "Veganas",
    precio: 1400,
    ingredientes: "Verduras salteadas, champiñones y especias naturales.",
    tipo: "Frita",
    stock: 8, 
    img: "https://media-cdn.tripadvisor.com/media/photo-s/1c/b9/89/7b/empanada-vegetariana.jpg",
    extras: [
      { id: "pebre", name: "Pebre", price: 300 }
    ]
  },
  {
    id: 6,
    nombre: "Empanada de Mariscos",
    categoria: "Premium",
    precio: 2200,
    ingredientes: "Relleno de mariscos frescos con crema y especias.",
    tipo: "Horno",
    stock: 5, 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2lgMte0jg9vit7VkGL5Iy8fedL7G8MbrYwQ&s",
    extras: [
      { id: "limon", name: "Limón extra", price: 150 }
    ]
  },
  {
    id: 7,
    nombre: "Empanada Camarón Queso",
    categoria: "Premium",
    precio: 2500,
    ingredientes: "Camarones salteados en mantequilla con queso mantecoso.",
    tipo: "Frita",
    stock: 15, 
    img: "https://www.chefandcook.cl/carta/camaron-queso-fritas.jpg",
    extras: [
      { id: "limon", name: "Limón extra", price: 150 }
    ]
  },
  {
    id: 8,
    nombre: "Empanada Champiñón Queso",
    categoria: "Veggie",
    precio: 1700,
    ingredientes: "Champiñones frescos salteados con mezcla de quesos.",
    tipo: "Horno",
    stock: 10, 
    img: "https://cdnx.jumpseller.com/lashermanaschicureo/image/57887757/emp_champi_on.jpg?1733160292",
    extras: [
      { id: "salsa", name: "Salsa de ajo", price: 250 }
    ]
  },
  {
    id: 9,
    nombre: "Empanada Acelga Queso",
    categoria: "Veggie",
    precio: 1450,
    ingredientes: "Acelga cocida y cremosa con abundante queso.",
    tipo: "Frita",
    stock: 20, 
    img: "https://www.clarin.com/img/2023/04/25/Gc7v0hFUU_1256x620__2.jpg",
    extras: []
  },
  {
    id: 10,
    nombre: "Empanada Mechada",
    categoria: "Especiales",
    precio: 2100,
    ingredientes: "Carne mechada deshilachada con cebolla caramelizada.",
    tipo: "Horno",
    stock: 7, 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRje62PefsWjkW_fVWxGpwi-fOH16QYnnwRNw&s",
    extras: [
      { id: "pebre", name: "Pebre", price: 300 }
    ]
  }
];

/* ====== Acompañamientos (Catálogo Secundario) ====== */
const ACCOMPANIMENTS = [
  {
    id: 101,
    nombre: "Coca-Cola Zero 1.5L",
    precio: 1900,
    tipo: "Bebida",
    img: "https://jumbo.cl/media/catalog/product/6/8/6835.jpg", // URL genérica
    stock: 25 
  },
  {
    id: 102,
    nombre: "Palitos de Queso (porción)",
    precio: 1200,
    tipo: "Snack",
    img: "https://jumbo.cl/media/catalog/product/1/9/19503.jpg", // URL genérica
    stock: 18 
  },
  {
    id: 103,
    nombre: "Pebre Casero (100ml)",
    precio: 600,
    tipo: "Salsa",
    img: "https://www.tipicochileno.cl/wp-content/uploads/2022/01/Pebre-Casero.jpg", // URL genérica
    stock: 35 
  },
  {
    id: 104,
    nombre: "Jugo Natural (500ml)",
    precio: 1500,
    tipo: "Bebida",
    img: "https://jumbo.cl/media/catalog/product/j/u/jugo_natural.jpg", // URL genérica
    stock: 20
  }
];

/* ====== Variables globales (Persistencia con localStorage) ====== */
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let users = JSON.parse(localStorage.getItem("users") || "[]");
let currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
let orders = JSON.parse(localStorage.getItem("orders") || "[]");
let resetToken = JSON.parse(localStorage.getItem("resetToken") || "null");
let discountApplied = JSON.parse(localStorage.getItem("discountApplied") || "null");

// Códigos de descuento disponibles (simulados)
const DISCOUNT_CODES = [
  { code: "BIENVENIDO10", type: "percent", value: 0.10, description: "10% de descuento en el total" },
  { code: "EMPANADA500", type: "fixed", value: 500, description: "$500 de descuento fijo" }
];

/* ====== Inicialización ====== */
document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  renderCatalog();
  renderAccompaniments(); // Cargar acompañamientos
  renderCart();
  loadCategories();
  loadTypes();
  updateLoginButton(!!currentUser);
  updateCartCount(); // Iniciar contador
});

/* ====== Utilidades (Navegación, Notificación, Guardado) ====== */
function setupNav() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    const view = btn.dataset.view;
    if (view) btn.onclick = () => showView(view);
  });
  document.getElementById("menuToggle").onclick = () => {
    document.getElementById("navbar").classList.toggle("show");
  };
}

function showView(view) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const target = document.getElementById(view + "View");
  if (target) target.classList.add("active");
  window.scrollTo(0, 0);
}

function notify(msg) {
  const n = document.getElementById("notification");
  n.textContent = msg;
  n.classList.add("show");
  setTimeout(() => n.classList.remove("show"), 2500);
}

function saveData() {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.setItem("resetToken", JSON.stringify(resetToken));
  localStorage.setItem("discountApplied", JSON.stringify(discountApplied));
}

/* ====== Catálogo Principal (Empanadas) y Filtros ====== */
function renderCatalog() {
  const container = document.getElementById("catalogContainer");
  container.innerHTML = "";
  const q = document.getElementById("searchInput").value.toLowerCase();
  const cat = document.getElementById("categoryFilter").value;
  const type = document.getElementById("typeFilter").value;
  const price = document.getElementById("priceFilter").value;

  let list = PRODUCTS.filter(p => {
    if (cat && p.categoria !== cat) return false;
    
    if (q && !(
        p.nombre.toLowerCase().includes(q) || 
        p.ingredientes.toLowerCase().includes(q) || 
        p.tipo.toLowerCase().includes(q)
    )) return false;
    
    if (type && p.tipo !== type) return false; 
    
    if (price) {
      const [min, max] = price.split("-").map(Number);
      if (p.precio < min || p.precio > max) return false;
    }
    return true;
  });

  if (!list.length) {
    container.innerHTML = "<p>No se encontraron empanadas.</p>";
    return;
  }

  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "item-card";
    
    const isLowStock = p.stock <= 5 && p.stock > 0;
    const stockMsg = isLowStock ? 
        `<small style="color: #c0392b; font-weight: bold;">¡Últimas unidades!</small><br>` : '';

    div.innerHTML = `
      <img src="${p.img}" alt="${p.nombre}">
      <h4>${p.nombre}</h4>
      <small>Tipo: <strong>${p.tipo}</strong></small><br>
      ${stockMsg}
      <small>${p.ingredientes}</small>
      <div class="price">$${p.precio.toLocaleString()}</div>
      <button class="btn primary" onclick="openProduct(${p.id})" ${p.stock <= 0 ? 'disabled' : ''}>${p.stock <= 0 ? 'Agotado' : 'Ver detalles'}</button>
    `;
    container.appendChild(div);
  });
}

// Event Listeners para Filtros
document.getElementById("searchInput").oninput = renderCatalog;
document.getElementById("categoryFilter").onchange = renderCatalog;
document.getElementById("typeFilter").onchange = renderCatalog;
document.getElementById("priceFilter").onchange = renderCatalog;

document.getElementById("resetFilters").onclick = () => {
  document.getElementById("searchInput").value = "";
  document.getElementById("categoryFilter").value = "";
  document.getElementById("typeFilter").value = "";
  document.getElementById("priceFilter").value = "";
  renderCatalog();
};

function loadCategories() {
  const catSelect = document.getElementById("categoryFilter");
  [...new Set(PRODUCTS.map(p => p.categoria))].forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    catSelect.appendChild(opt);
  });
}

function loadTypes() {
  const typeSelect = document.getElementById("typeFilter");
  typeSelect.innerHTML = '<option value="">Todos los tipos</option>'; 
  
  [...new Set(PRODUCTS.map(p => p.tipo))].forEach(t => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    typeSelect.appendChild(opt);
  });
}

/* ====== Catálogo de Acompañamientos ====== */
function renderAccompaniments() {
  const container = document.getElementById("accompanimentContainer");
  container.innerHTML = "";

  ACCOMPANIMENTS.forEach(p => {
    const div = document.createElement("div");
    div.className = "item-card accompaniment";
    
    const isLowStock = p.stock <= 5 && p.stock > 0;
    const stockMsg = isLowStock ? 
        `<small style="color: #c0392b; font-weight: bold;">¡Últimas unidades!</small><br>` : '';

    div.innerHTML = `
      <img src="${p.img}" alt="${p.nombre}">
      <h4>${p.nombre}</h4>
      <small>Tipo: <strong>${p.tipo}</strong></small>
      ${stockMsg}
      <div class="price">$${p.precio.toLocaleString()}</div>
      <button class="btn primary" onclick="addToCartAccompaniment(${p.id})" ${p.stock <= 0 ? 'disabled' : ''}>${p.stock <= 0 ? 'Agotado' : 'Añadir'}</button>
    `;
    container.appendChild(div);
  });
}

/* ====== Modal Producto (Empanadas) ====== */
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const modal = document.getElementById("modal");
  const body = document.getElementById("modalBody");

  body.innerHTML = `
    <h3>${p.nombre} (${p.tipo})</h3>
    <p><strong>Stock disponible:</strong> ${p.stock}</p>
    <p><strong>Ingredientes:</strong> ${p.ingredientes}</p>
    <p><strong>Precio base:</strong> $${p.precio.toLocaleString()}</p>
    <h4>Extras:</h4>
    ${p.extras.map(ex => `
      <label><input type="checkbox" value="${ex.id}" data-price="${ex.price}"> ${ex.name} (+$${ex.price})</label><br>
    `).join("") || "<p>Sin extras disponibles.</p>"}
    <input type="number" id="qty" value="1" min="1" max="${p.stock}" style="width:60px;margin-top:10px">
    <button class="btn primary" id="addBtn">Agregar al carrito</button>
  `;
  document.getElementById("addBtn").onclick = () => addToCart(id);
  modal.classList.add("active");
}

document.getElementById("closeModal").onclick = () => {
  document.getElementById("modal").classList.remove("active");
};
document.getElementById("modal").onclick = e => {
  if (e.target.id === "modal") e.target.classList.remove("active");
};

/* ====== Carrito, Stock y Descuentos ====== */
function getProductById(id) {
    return PRODUCTS.find(p => p.id === id) || ACCOMPANIMENTS.find(p => p.id === id);
}

function countItemInCart(productId) {
    return cart
        .filter(item => item.id === productId)
        .reduce((sum, item) => sum + item.cantidad, 0);
}

function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const qtyToAdd = parseInt(document.getElementById("qty").value);

  const currentCartStock = countItemInCart(p.id);

  if (p.stock < currentCartStock + qtyToAdd) {
    return notify(`❌ Solo quedan ${p.stock - currentCartStock} unidades de ${p.nombre}.`);
  }

  const extras = [...document.querySelectorAll("#modalBody input[type=checkbox]:checked")].map(ch => {
    const ex = p.extras.find(e => e.id === ch.value);
    return { name: ex.name, price: ex.price };
  });

  cart.push({ id: p.id, nombre: p.nombre, cantidad: qtyToAdd, extras, precio: p.precio });
  saveData();
  renderCart();
  notify("✅ Producto agregado al carrito");
  document.getElementById("modal").classList.remove("active");
  updateCartCount();
}

function addToCartAccompaniment(id) {
    const p = ACCOMPANIMENTS.find(x => x.id === id);
    const qtyToAdd = 1;

    const currentCartStock = countItemInCart(p.id);

    if (p.stock < currentCartStock + qtyToAdd) {
        return notify(`❌ Solo quedan ${p.stock - currentCartStock} unidades de ${p.nombre}.`);
    }

    const existingItemIndex = cart.findIndex(item => item.id === p.id && (!item.extras || item.extras.length === 0));

    if (existingItemIndex !== -1) {
        cart[existingItemIndex].cantidad++;
    } else {
        cart.push({ id: p.id, nombre: p.nombre, cantidad: qtyToAdd, extras: [], precio: p.precio });
    }
    
    saveData();
    renderCart();
    notify(`✅ ${p.nombre} agregado al carrito`);
    updateCartCount();
}

function renderCart() {
  const list = document.getElementById("cartList");
  list.innerHTML = "";

  if (!cart.length) {
    document.getElementById("emptyCartMsg").style.display = "block";
    document.querySelector('.cart-summary').innerHTML = '';
    updateCartCount();
    return;
  }

  document.getElementById("emptyCartMsg").style.display = "none";
  cart.forEach((it, i) => {
    const extrasTxt = it.extras.map(e => e.name).join(", ") || "Sin extras";
    const total = (it.precio + it.extras.reduce((a,b)=>a+b.price,0)) * it.cantidad;
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <strong>${it.nombre}</strong><br>
        <small>Extras: ${extrasTxt}</small><br>
        <small>Cantidad: ${it.cantidad}</small>
      </div>
      <div>
        <strong>$${total.toLocaleString()}</strong><br>
        <button class="btn secondary" onclick="decQty(${i})">➖</button>
        <button class="btn secondary" onclick="incQty(${i})">➕</button>
        <button class="btn" style="background:#f8d6d6;color:#a33" onclick="delItem(${i})">🗑️</button>
      </div>
    `;
    list.appendChild(li);
  });

  const totalBruto = calcBaseTotal();
  const { finalTotal, discountAmount, discountText } = applyDiscount(totalBruto);

  const summaryContainer = document.querySelector('.cart-summary');
  summaryContainer.innerHTML = `
    <div id="discountContainer" style="margin-bottom: 10px; display: flex; gap: 10px; justify-content: flex-end; align-items: center;">
      <input type="text" id="discountInput" placeholder="Código de descuento" value="${discountApplied ? discountApplied.code : ''}" style="padding: 8px; border-radius: 6px; border: 1px solid #ccc; width: 150px;">
      <button class="btn secondary" id="applyDiscountBtn">Aplicar</button>
    </div>
    ${discountApplied ? 
        `<p style="color: #27ae60; text-align: right;">Descuento aplicado: <strong>${discountText}</strong> (-$${discountAmount.toLocaleString()})</p>
         <p style="text-align: right;"><strong>Subtotal:</strong> $<span id="cartTotalBruto">${totalBruto.toLocaleString()}</span></p>`
        : ''
    }
    <p style="text-align: right; font-size: 1.2em;"><strong>Total a pagar:</strong> $<span id="cartTotal">${finalTotal.toLocaleString()}</span></p>
    <button id="clearCart" class="btn secondary" style="margin-right: 10px;">Vaciar carrito</button>
    <button id="checkoutBtn" class="btn primary">Finalizar compra</button>
  `;

  document.getElementById("clearCart").onclick = () => { cart = []; discountApplied = null; saveData(); renderCart(); };
  document.getElementById("checkoutBtn").onclick = checkout;
  document.getElementById("applyDiscountBtn").onclick = applyDiscountCode;
  updateCartCount();
}

function calcBaseTotal() {
  return cart.reduce((t, it) => t + (it.precio + it.extras.reduce((a,b)=>a+b.price,0))*it.cantidad, 0);
}

function applyDiscount(total) {
  let discountAmount = 0;
  let discountText = "";
  let finalTotal = total;

  if (discountApplied) {
    const { type, value, code } = discountApplied;
    
    if (type === "percent") {
      discountAmount = Math.round(total * value);
      discountText = `${(value * 100)}% (${code})`;
    } else if (type === "fixed") {
      discountAmount = value;
      discountText = `${code}`;
    }

    finalTotal = Math.max(0, total - discountAmount);
  }

  return { finalTotal, discountAmount, discountText };
}

function applyDiscountCode() {
  const inputCode = document.getElementById("discountInput").value.toUpperCase().trim();
  const codeObject = DISCOUNT_CODES.find(d => d.code === inputCode);
  
  if (!inputCode) {
    discountApplied = null;
    saveData();
    renderCart();
    return;
  }

  if (codeObject) {
    if (discountApplied && discountApplied.code === codeObject.code) {
        return notify("✅ El código ya está aplicado.");
    }
    discountApplied = codeObject;
    saveData();
    renderCart();
    notify(`🎉 Código "${inputCode}" aplicado. ¡Descuento guardado!`);
  } else {
    discountApplied = null;
    saveData();
    renderCart();
    notify("❌ Código de descuento no válido.");
  }
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.cantidad, 0);
    const countElement = document.getElementById('cartCount');
    if (countElement) {
        countElement.textContent = count;
        countElement.style.display = count > 0 ? 'block' : 'none'; 
    }
}

function incQty(i){ 
    const item = cart[i];
    const product = getProductById(item.id);

    if (!product) return;
    
    const currentCartStock = cart
        .filter((_, index) => index !== i && _.id === product.id)
        .reduce((sum, current) => sum + current.cantidad, 0);

    if (product.stock > currentCartStock + item.cantidad) {
        cart[i].cantidad++; 
        saveData(); 
        renderCart(); 
    } else {
        notify(`❌ Límite de stock (${product.stock}) alcanzado para ${product.nombre}.`);
    }
}

function decQty(i){ 
    if(cart[i].cantidad > 1) { 
        cart[i].cantidad--; 
        saveData(); 
        renderCart(); 
    }
}

function delItem(i){ 
    cart.splice(i,1); 
    saveData(); 
    renderCart(); 
}

/* ====== Checkout y Confirmación ====== */
function checkout() {
  if (!currentUser) return notify("⚠️ Inicia sesión para finalizar la compra");
  if (!cart.length) return notify("🛒 El carrito está vacío");
  
  const totalBruto = calcBaseTotal();
  const { finalTotal } = applyDiscount(totalBruto);
  
  const modal = document.getElementById("modal");
  const body = document.getElementById("modalBody");
  body.innerHTML = `
    <h3>Confirmar pedido</h3>
    <p>Tu dirección: <strong>${currentUser.address}</strong></p>
    <p>Tu teléfono: <strong>${currentUser.phone}</strong></p>
    <p style="font-size: 1.2em;">Total a pagar: <strong>$${finalTotal.toLocaleString()}</strong></p>
    ${discountApplied ? `<p style="color: #27ae60;">(Incluye descuento ${discountApplied.code})</p>` : ''}
    <h4>Forma de pago:</h4>
    <label><input type="radio" name="pago" value="efectivo" checked> Efectivo</label><br>
    <label><input type="radio" name="pago" value="transferencia"> Transferencia</label><br>
    <label><input type="radio" name="pago" value="tarjeta"> Tarjeta</label><br><br>
    <button class="btn primary" onclick="confirmOrder()">Confirmar</button>
  `;
  modal.classList.add("active");
}

function confirmOrder() {
  const metodo = document.querySelector("input[name='pago']:checked").value;
  const totalBruto = calcBaseTotal();
  const { finalTotal, discountAmount } = applyDiscount(totalBruto);
  
  const order = {
    id: "PED-" + Date.now(),
    user: currentUser.email,
    items: cart,
    totalBruto: totalBruto,
    total: finalTotal,
    descuento: discountAmount,
    codigoDescuento: discountApplied ? discountApplied.code : null,
    metodo,
    date: new Date().toLocaleString()
  };

  orders.push(order);
  cart = [];
  discountApplied = null;
  saveData();
  renderCart();

  let mensaje = "";
  if (metodo === "efectivo") {
    mensaje = "💵 Podrás pagar al momento de retirar tu pedido.";
  } else if (metodo === "transferencia") {
    mensaje = `
      🏦 Realiza tu transferencia a:<br>
      <strong>Banco Estado</strong>, Cuenta: 12345678, Correo: pagos@lachilena.cl
    `;
  } else if (metodo === "tarjeta") {
    mensaje = "💳 Pago con tarjeta al momento del retiro.";
  }

  const container = document.getElementById("paymentContainer");
  container.innerHTML = `
    <h3>✅ Pedido confirmado</h3>
    <p><strong>N° Pedido:</strong> ${order.id}</p>
    <p><strong>Método de pago:</strong> ${metodo.toUpperCase()}</p>
    ${order.codigoDescuento ? `<p style="color: #27ae60;">¡Descuento aplicado: ${order.codigoDescuento}!</p>` : ''}
    <p>${mensaje}</p>
    <p><strong>Total pagado:</strong> $${order.total.toLocaleString()}</p>
    <p>Gracias por tu compra 🥟</p>
    <button class="btn primary" onclick="showView('catalog')">Volver al Catálogo</button>
    <button class="btn secondary" onclick="showView('orders')">Ver mis pedidos</button>
  `;

  document.getElementById("modal").classList.remove("active");
  showView("payment");
  notify("🎉 Pedido confirmado con " + metodo);
}

/* ====== Login / Registro y Recuperación (Completo) ====== */
document.getElementById("registerBtn").onclick = () => {
  const name = document.getElementById("nameInput").value.trim();
  const address = document.getElementById("addressInput").value.trim();
  const phone = document.getElementById("phoneInput").value.trim();
  const email = document.getElementById("emailInput").value.toLowerCase().trim();
  const pass = document.getElementById("passwordInput").value.trim();

  if (!name || !address || !phone || !email || !pass) {
    return notify("⚠️ Completa todos los campos para registrarte.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return notify("⚠️ Ingresa un correo electrónico válido.");
  }
  if (users.find(u => u.email === email)) {
    return notify("⚠️ Correo ya registrado. Intenta iniciar sesión.");
  }

  const newUser = { name, address, phone, email, pass };
  users.push(newUser);
  currentUser = { name, email, address, phone };
  
  saveData();
  updateLoginButton(true);
  notify("🎉 Registro exitoso. ¡Bienvenido " + name + "!");
  showView("catalog");
};

document.getElementById("loginUserBtn").onclick = () => {
  const email = document.getElementById("emailInput").value.toLowerCase().trim();
  const pass = document.getElementById("passwordInput").value.trim();

  if (!email || !pass) {
    return notify("⚠️ Ingresa tu correo y contraseña para iniciar sesión.");
  }
  
  const u = users.find(x => x.email === email);

  if (!u) {
    return notify("❌ El correo electrónico no se encuentra registrado.");
  }
  
  if (u.pass !== pass) {
    return notify("❌ Contraseña incorrecta. Por favor, inténtalo de nuevo.");
  }

  currentUser = { name: u.name, email: u.email, address: u.address, phone: u.phone };
  saveData();
  updateLoginButton(true);
  
  notify("👋 Sesión iniciada. ¡Hola " + u.name + "!");
  showView("catalog");
};

function updateLoginButton(logged) {
  const btn = document.getElementById("loginBtn");
  if (logged) {
    btn.textContent = "Cerrar sesión";
    btn.onclick = () => {
      currentUser = null;
      discountApplied = null;
      saveData();
      updateLoginButton(false);
      notify("👋 Sesión cerrada");
      showView("home");
    };
  } else {
    btn.textContent = "Iniciar sesión";
    btn.onclick = () => showView("login");
  }
}

document.getElementById("forgotPasswordBtn").onclick = openRecoveryFlow;
document.getElementById("forgotPasswordBtn").style.cssText = 'margin-top: 10px; background: none; border: none; color: #a92c2c; font-weight: 400; text-decoration: underline;';

function openRecoveryFlow() {
    const email = document.getElementById("emailInput").value.toLowerCase().trim();

    if (!email) {
        return notify("⚠️ Ingresa tu correo en el campo y haz clic aquí de nuevo.");
    }
    const u = users.find(x => x.email === email);
    if (!u) {
        return notify("❌ Correo no registrado. No se puede recuperar la contraseña.");
    }

    const token = Math.random().toString(36).substring(2, 10).toUpperCase();
    const expiryTime = Date.now() + 5 * 60 * 1000;

    resetToken = { email, token, expiry: expiryTime };
    saveData();
    
    const modal = document.getElementById("modal");
    const body = document.getElementById("modalBody");

    body.innerHTML = `
        <h3>Recuperación de Contraseña</h3>
        <p>Hemos **SIMULADO** el envío de un código de restablecimiento a <strong>${email}</strong>.</p>
        <p>Ingresa el siguiente código:</p>
        <strong style="color: #c0392b; font-size: 1.2em;">${token}</strong>
        <p><small>Este código es válido por 5 minutos.</small></p>

        <input type="text" id="tokenInput" placeholder="Ingresa el código" style="margin: 15px 0; padding: 10px; width: 100%;">
        <button class="btn primary" onclick="verifyToken()">Verificar código</button>
    `;
    modal.classList.add("active");
    notify("📧 Correo simulado enviado. Revisa la ventana modal.");
}

function verifyToken() {
    const enteredToken = document.getElementById("tokenInput").value.toUpperCase().trim();

    if (!resetToken || Date.now() > resetToken.expiry) {
        resetToken = null;
        saveData();
        document.getElementById("modal").classList.remove("active");
        return notify("❌ El código ha caducado. Vuelve a solicitar la recuperación.");
    }

    if (enteredToken !== resetToken.token) {
        return notify("❌ Código incorrecto. Inténtalo de nuevo.");
    }

    const body = document.getElementById("modalBody");
    body.innerHTML = `
        <h3>Restablecer Contraseña</h3>
        <p>Tu código ha sido verificado.</p>
        <input type="password" id="newPass" placeholder="Nueva contraseña (mínimo 6 caracteres)" style="margin-bottom: 10px; padding: 10px; width: 100%;">
        <input type="password" id="confirmPass" placeholder="Confirma la nueva contraseña" style="margin-bottom: 15px; padding: 10px; width: 100%;">
        <button class="btn primary" onclick="setNewPassword()">Restablecer</button>
    `;
}

function setNewPassword() {
    const newPass = document.getElementById("newPass").value;
    const confirmPass = document.getElementById("confirmPass").value;

    if (newPass.length < 6) {
        return notify("⚠️ La contraseña debe tener al menos 6 caracteres.");
    }
    if (newPass !== confirmPass) {
        return notify("⚠️ Las contraseñas no coinciden.");
    }

    const userIndex = users.findIndex(u => u.email === resetToken.email);
    if (userIndex !== -1) {
        users[userIndex].pass = newPass;
        resetToken = null;
        saveData();
        
        document.getElementById("modal").classList.remove("active");
        notify("🎉 Contraseña restablecida exitosamente. ¡Puedes iniciar sesión!");
        showView("login");
    } else {
        notify("❌ Error al encontrar al usuario para actualizar.");
    }
}

/* ====== Pedidos ====== */
document.querySelector("[data-view='orders']").onclick = () => {
  if (!currentUser) return notify("⚠️ Inicia sesión para ver tus pedidos");
  const container = document.getElementById("ordersContainer");
  const myOrders = orders.filter(o => o.user === currentUser.email);
  if (!myOrders.length) {
    container.innerHTML = "<p>No tienes pedidos aún.</p>";
  } else {
    container.innerHTML = myOrders.map(o => `
      <div class="item-card">
        <strong>${o.id}</strong><br>
        <small>${o.date}</small><br>
        ${o.codigoDescuento ? `<p style="color: #27ae60;">(Descuento: ${o.codigoDescuento} aplicado)</p>` : ''}
        <p><strong>Total:</strong> $${o.total.toLocaleString()}</p>
        <p>Pago: ${o.metodo}</p>
      </div>
    `).join("");
  }
  showView("orders");
};









