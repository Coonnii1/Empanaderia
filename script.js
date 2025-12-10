/* ===========================
   Empanadería La Chilena v3.0
   =========================== */

/* ====== Productos (dibujos ilustrados) ====== */
const PRODUCTS = [
  {
    id: 1,
    nombre: "Empanada de Pino",
    categoria: "Clásicas",
    precio: 1500,
    ingredientes: "Carne, cebolla, huevo duro, aceitunas y pasas.",
    img: "https://i.pinimg.com/originals/b7/93/d6/b793d677617f191376d65c804488b082.jpg",
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
    img: "https://cdn-icons-png.flaticon.com/512/7859/7859429.png",
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
    img: "https://cdn-icons-png.flaticon.com/512/7986/7986330.png",
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
    img: "https://cdn-icons-png.flaticon.com/512/11453/11453439.png",
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
    img: "https://cdn-icons-png.flaticon.com/512/9726/9726197.png",
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
    img: "https://cdn-icons-png.flaticon.com/512/9834/9834698.png",
    extras: [
      { id: "limon", name: "Limón extra", price: 150 }
    ]
  }
];

/* ====== Variables globales ====== */
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let users = JSON.parse(localStorage.getItem("users") || "[]");
let currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
let orders = JSON.parse(localStorage.getItem("orders") || "[]");

/* ====== Inicialización ====== */
document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  renderCatalog();
  renderCart();
  loadCategories();
  updateLoginButton(!!currentUser);
});

/* ====== Navegación ====== */
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

/* ====== Catálogo ====== */
function renderCatalog() {
  const container = document.getElementById("catalogContainer");
  container.innerHTML = "";
  const q = document.getElementById("searchInput").value.toLowerCase();
  const cat = document.getElementById("categoryFilter").value;
  const price = document.getElementById("priceFilter").value;

  let list = PRODUCTS.filter(p => {
    if (cat && p.categoria !== cat) return false;
    if (q && !p.nombre.toLowerCase().includes(q)) return false;
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
    div.innerHTML = `
      <img src="${p.img}" alt="${p.nombre}">
      <h4>${p.nombre}</h4>
      <small>${p.ingredientes}</small>
      <div class="price">$${p.precio.toLocaleString()}</div>
      <button class="btn primary" onclick="openProduct(${p.id})">Ver detalles</button>
    `;
    container.appendChild(div);
  });
}

document.getElementById("searchInput").oninput = renderCatalog;
document.getElementById("categoryFilter").onchange = renderCatalog;
document.getElementById("priceFilter").onchange = renderCatalog;
document.getElementById("resetFilters").onclick = () => {
  document.getElementById("searchInput").value = "";
  document.getElementById("categoryFilter").value = "";
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

/* ====== Modal Producto ====== */
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const modal = document.getElementById("modal");
  const body = document.getElementById("modalBody");

  body.innerHTML = `
    <h3>${p.nombre}</h3>
    <p><strong>Ingredientes:</strong> ${p.ingredientes}</p>
    <p><strong>Precio base:</strong> $${p.precio}</p>
    <h4>Extras:</h4>
    ${p.extras.map(ex => `
      <label><input type="checkbox" value="${ex.id}" data-price="${ex.price}"> ${ex.name} (+$${ex.price})</label><br>
    `).join("")}
    <input type="number" id="qty" value="1" min="1" style="width:60px;margin-top:10px">
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

/* ====== Carrito ====== */
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const qty = parseInt(document.getElementById("qty").value);
  const extras = [...document.querySelectorAll("#modalBody input[type=checkbox]:checked")].map(ch => {
    const ex = p.extras.find(e => e.id === ch.value);
    return { name: ex.name, price: ex.price };
  });

  cart.push({ id: p.id, nombre: p.nombre, cantidad: qty, extras, precio: p.precio });
  saveData();
  renderCart();
  notify("✅ Producto agregado al carrito");
  document.getElementById("modal").classList.remove("active");
}

function renderCart() {
  const list = document.getElementById("cartList");
  list.innerHTML = "";
  if (!cart.length) {
    document.getElementById("emptyCartMsg").style.display = "block";
    document.getElementById("cartTotal").textContent = "0";
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
        <button class="btn secondary" onclick="decQty(${i})">-</button>
        <button class="btn secondary" onclick="incQty(${i})">+</button>
        <button class="btn" style="background:#f8d6d6;color:#a33" onclick="delItem(${i})">Eliminar</button>
      </div>
    `;
    list.appendChild(li);
  });
  document.getElementById("cartTotal").textContent = calcTotal().toLocaleString();
}

function calcTotal() {
  return cart.reduce((t, it) => t + (it.precio + it.extras.reduce((a,b)=>a+b.price,0))*it.cantidad, 0);
}
function incQty(i){ cart[i].cantidad++; saveData(); renderCart(); }
function decQty(i){ if(cart[i].cantidad>1) cart[i].cantidad--; saveData(); renderCart(); }
function delItem(i){ cart.splice(i,1); saveData(); renderCart(); }

document.getElementById("clearCart").onclick = () => { cart = []; saveData(); renderCart(); };
document.getElementById("checkoutBtn").onclick = checkout;

function checkout() {
  if (!currentUser) return notify("⚠️ Inicia sesión para finalizar la compra");
  if (!cart.length) return notify("🛒 El carrito está vacío");
  const total = calcTotal();
  const modal = document.getElementById("modal");
  const body = document.getElementById("modalBody");
  body.innerHTML = `
    <h3>Confirmar pedido</h3>
    <p>Total: <strong>$${total.toLocaleString()}</strong></p>
    <h4>Forma de pago:</h4>
    <label><input type="radio" name="pago" value="efectivo" checked> Efectivo</label><br>
    <label><input type="radio" name="pago" value="transferencia"> Transferencia</label><br>
    <label><input type="radio" name="pago" value="tarjeta"> Tarjeta</label><br><br>
    <button class="btn primary" onclick="confirmOrder()">Confirmar</button>
  `;
  modal.classList.add("active");
}

/* ====== Confirmación de pago ====== */
function confirmOrder() {
  const metodo = document.querySelector("input[name='pago']:checked").value;
  const order = {
    id: "PED-" + Date.now(),
    user: currentUser.email,
    items: cart,
    total: calcTotal(),
    metodo,
    date: new Date().toLocaleString()
  };

  orders.push(order);
  cart = [];
  saveData();
  renderCart();

  let mensaje = "";
  if (metodo === "efectivo") {
    mensaje = "💵 Podrás pagar al momento de retirar tu pedido.";
  } else if (metodo === "transferencia") {
    mensaje = `
      🏦 Realiza tu transferencia a:<br>
      <strong>Banco Estado</strong><br>
      Cuenta: 12345678<br>
      Titular: Empanadería La Chilena<br>
      Correo: pagos@lachilena.cl
    `;
  } else if (metodo === "tarjeta") {
    mensaje = "💳 Pago con tarjeta al momento del retiro.";
  }

  const container = document.getElementById("paymentContainer");
  container.innerHTML = `
    <h3>✅ Pedido confirmado</h3>
    <p><strong>N° Pedido:</strong> ${order.id}</p>
    <p><strong>Método de pago:</strong> ${metodo.toUpperCase()}</p>
    <p>${mensaje}</p>
    <p><strong>Total:</strong> $${order.total.toLocaleString()}</p>
    <p>Gracias por tu compra 🥟</p>
    <button class="btn primary" onclick="showView('catalog')">Volver al Catálogo</button>
    <button class="btn secondary" onclick="showView('orders')">Ver mis pedidos</button>
  `;

  document.getElementById("modal").classList.remove("active");
  showView("payment");
  notify("🎉 Pedido confirmado con " + metodo);
}

/* ====== Login / Registro ====== */
document.getElementById("registerBtn").onclick = () => {
  const name = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value.toLowerCase();
  const pass = document.getElementById("passwordInput").value;
  if (!name || !email || !pass) return notify("⚠️ Completa todos los campos");
  if (users.find(u => u.email === email)) return notify("⚠️ Correo ya registrado");
  users.push({ name, email, pass });
  currentUser = { name, email };
  saveData();
  updateLoginButton(true);
  notify("👋 Bienvenido " + name);
  showView("catalog");
};

document.getElementById("loginUserBtn").onclick = () => {
  const email = document.getElementById("emailInput").value.toLowerCase();
  const pass = document.getElementById("passwordInput").value;
  const u = users.find(x => x.email === email && x.pass === pass);
  if (!u) return notify("❌ Credenciales incorrectas");
  currentUser = { name: u.name, email: u.email };
  saveData();
  updateLoginButton(true);
  notify("👋 Hola " + u.name);
  showView("catalog");
};

function updateLoginButton(logged) {
  const btn = document.getElementById("loginBtn");
  if (logged) {
    btn.textContent = "Cerrar sesión";
    btn.onclick = () => {
      currentUser = null;
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
        <p><strong>Total:</strong> $${o.total.toLocaleString()}</p>
        <p>Pago: ${o.metodo}</p>
      </div>
    `).join("");
  }
  showView("orders");
};

/* ====== Notificación visual ====== */
function notify(msg) {
  const n = document.getElementById("notification");
  n.textContent = msg;
  n.classList.add("show");
  setTimeout(() => n.classList.remove("show"), 2500);
}

/* ====== Guardado ====== */
function saveData() {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  localStorage.setItem("orders", JSON.stringify(orders));
}







