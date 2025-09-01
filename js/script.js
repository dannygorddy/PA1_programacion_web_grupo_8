// ==== Utilidades y estado ====
const PEN = new Intl.NumberFormat("es-PE", { style: "currency", currency: "PEN" });
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// ==== Helpers ====
const save = () => localStorage.setItem("carrito", JSON.stringify(carrito));
const totalItems = () => carrito.reduce((a, i) => a + i.cantidad, 0);
const totalMonto  = () => carrito.reduce((a, i) => a + i.precio * i.cantidad, 0);
const $ = (sel) => document.querySelector(sel);

function escapeHTML(str) {
  return String(str)
    .replaceAll("&", "&amp;").replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;").replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
// === FAB Carrito (creación y actualización) ===
function createCartFAB() {
  // Si estamos en carrito.html y no quieres mostrarlo, descomenta:
  // if (location.pathname.endsWith("carrito.html")) return;

  if (document.getElementById("cart-fab")) return; // evita duplicados

  const a = document.createElement("a");
  a.id = "cart-fab";
  a.href = "carrito.html";
  a.className = "btn btn-primary position-fixed";
  a.setAttribute("aria-label", "Ir al carrito");

  a.innerHTML = `
    <span class="fab-icon" aria-hidden="true">🛒</span>
    <span class="badge bg-warning text-dark" id="fabCount">0</span>
  `;
  document.body.appendChild(a);
}

function updateCartFAB() {
  const fabCount = document.getElementById("fabCount");
  if (fabCount) fabCount.textContent = totalItems();
}

// Lanza una pequeña animación al agregar

function pulseFAB() {
  const fab = document.getElementById("cart-fab");
  if (!fab) return;
  fab.classList.remove("pulse"); // reinicia si estaba animando
  // Forzar reflow para reiniciar animación

  void fab.offsetWidth;
  fab.classList.add("pulse");
}

// ==== Navbar badge ====
function pintarBadge() {
  const badge = $("#badgeCarrito");
  if (badge) badge.textContent = totalItems();
  updateCartFAB(); // <-- NUEVO: sincroniza el FAB
}


// ==== Carrito: operaciones ====
function agregar(nombre, precio) {
  const prod = carrito.find(p => p.nombre === nombre);
  if (prod) prod.cantidad += 1;
  else carrito.push({ nombre, precio: +precio, cantidad: 1 });
  save(); pintarBadge();
  pulseFAB(); // <-- NUEVO: animación al agregar
}


function eliminar(nombre) {
  carrito = carrito.filter(p => p.nombre !== nombre);
  save(); pintarBadge(); pintarLista(); // por si estamos en carrito.html
}

function cambiarCantidad(nombre, cantidad) {
  const prod = carrito.find(p => p.nombre === nombre);
  if (!prod) return;
  let q = parseInt(cantidad, 10);
  if (isNaN(q) || q < 1) q = 1;
  prod.cantidad = q;
  save(); pintarBadge(); pintarLista();
}

function vaciar() {
  carrito = [];
  save(); pintarBadge(); pintarLista();
}

// ==== Render de la lista en carrito.html ====
function pintarLista() {
  const ul = $("#listaCarrito");
  if (!ul) return;

  ul.innerHTML = "";
  carrito.forEach(item => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex align-items-center justify-content-between";
    const subtotal = item.precio * item.cantidad;

    li.innerHTML = `
      <div class="me-2">
        <div><strong>${escapeHTML(item.nombre)}</strong></div>
        <small>
          ${PEN.format(item.precio)} ×
          <input type="number" min="1" value="${item.cantidad}" class="form-control d-inline-block"
                 style="width:70px; padding:2px 6px; margin:0 6px;"
                 aria-label="Cantidad de ${escapeHTML(item.nombre)}">
          = <strong>${PEN.format(subtotal)}</strong>
        </small>
      </div>
      <button class="btn btn-sm btn-danger" aria-label="Eliminar ${escapeHTML(item.nombre)}">X</button>
    `;

    const qty = li.querySelector("input[type='number']");
    qty.addEventListener("change", e => cambiarCantidad(item.nombre, e.target.value));
    li.querySelector("button").addEventListener("click", () => eliminar(item.nombre));
    ul.appendChild(li);
  });

  const totalEl = $("#total");
  if (totalEl) totalEl.textContent = PEN.format(totalMonto());
}

// ==== Eventos por página ====
document.addEventListener("DOMContentLoaded", () => {
  pintarBadge();
    createCartFAB();   // <-- crea el botón flotante
  updateCartFAB();   // <-- y sincroniza el contador


  // TIENDA: botones agregar
  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-to-cart");
    if (!btn) return;
    const { nombre, precio } = btn.dataset;
    if (!nombre || isNaN(parseFloat(precio))) return;
    agregar(nombre, parseFloat(precio));
  });

  // CARRITO: botones y modal
  const btnVaciar = $("#vaciar");
  const btnComprar = $("#comprar");
  if (btnVaciar) btnVaciar.addEventListener("click", vaciar);

  if (btnComprar) {
    btnComprar.addEventListener("click", () => {
      if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
      }
      const total = PEN.format(totalMonto());
      const totalModal = $("#totalModal");
      if (totalModal) totalModal.textContent = total;
      const modal = new bootstrap.Modal(document.getElementById("modalCompra"));
      modal.show();
    });
  }

  const btnConfirmar = $("#confirmarCompra");
  if (btnConfirmar) {
    btnConfirmar.addEventListener("click", () => {
      vaciar();
      const modalEl = document.getElementById("modalCompra");
      const modal = bootstrap.Modal.getInstance(modalEl);
      modal.hide();
    });
  }

  // Render de lista si estamos en carrito.html
  pintarLista();

  // TIENDA: activar tab según hash (#abarrotes / #juguetes / #oficina)
  const hash = location.hash || "#abarrotes";
  const secciones = document.querySelectorAll(".categoria");
  secciones.forEach(sec => sec.style.display = "none");
  const activa = document.querySelector(hash);
  if (activa) activa.style.display = "block";

  // navegación de píldoras (pills)
  const tabs = document.getElementById("tabs");
  if (tabs) {
    tabs.addEventListener("click", (e) => {
      const a = e.target.closest("a[href^='#']");
      if (!a) return;
      e.preventDefault();
      const dest = a.getAttribute("href");
      secciones.forEach(sec => sec.style.display = "none");
      const objetivo = document.querySelector(dest);
      if (objetivo) objetivo.style.display = "block";
      history.replaceState(null, "", dest);
    });
  }
});
  // CLIC en tarjetas de categoría (cat-card) con scroll suave
  document.body.addEventListener("click", (e) => {
    const link = e.target.closest("[data-cat-link]");
    if (!link) return;

    e.preventDefault();
    const dest = link.getAttribute("data-cat-link"); // ej: "#abarrotes"

    // Oculta todas las secciones y muestra solo la elegida
    const secciones = document.querySelectorAll(".categoria");
    secciones.forEach(sec => (sec.style.display = "none"));
    const objetivo = document.querySelector(dest);
    if (objetivo) {
      objetivo.style.display = "block";
      objetivo.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", dest);
    }
  });
