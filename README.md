# 🛒 Proyecto PA1 — Grupo 8 - tienda online Cusco Store

## 👥 Integrantes
- Danny Gorddy Huaman Chavez  ----  100 %
- Joan Orlando Quintana Rosales ---- 100 %
- Isaac Enrique Curitomay Guillén  ---- 100 %
- Jhon James Asto Alfaro ---- 100 %
---

## 📌 CUSCO STORE

El grupo 8 hemos desarrollado una página de tienda online llamada: " Cusco Store " como simulación de un comercio electrónico moderno. El proyecto cuenta con **tres categorías principales de productos**:  

- 🥫 **Abarrotes**  
- 🧸 **Juguetería**  
- 🗂️ **Artículos de oficina**  

Desde el **inicio**, el usuario puede acceder al catálogo, explorar las categorías y añadir productos a un **carrito dinámico** que permite: modificar cantidades, eliminar ítems, aplicar cupones de descuento, elegir el tipo de entrega (delivery o recojo en tienda) y calcular automáticamente el total con impuestos y envío. ademas de contar con una pásarela de pago 

Una vez finalizada la compra, el sistema genera un **pedido con un identificador único** que se almacena en el navegador. Dichos pedidos quedan registrados en una **lista de pedidos** accesible desde el carrito, y cada pedido puede abrirse para visualizar su **factura detallada e imprimible**, con desglose de subtotal, IGV, envío, descuento y total final.  

Este proyecto integra HTML, CSS, JavaScript y como framework: Bootstrap en la construcción de un flujo completo de compra en línea, mostrando cómo se combinan las tecnologías web para dar solución a un problema cotidiano como el comercio digital.  

---
## ⚙️ Funcionalidades principales

### 🔹 Navegación y catálogo
- **Index:** página de bienvenida con acceso directo a las categorías.  
- **Tienda:** productos organizados en secciones (`Abarrotes`, `Juguetería`, `Oficina`).  
- **Navbar + FAB del carrito:** siempre visibles con contador dinámico.

### 🔹 Carrito de compras
- Agregar, eliminar y modificar cantidades de productos.  
- Seleccionar productos individuales o todos.  
- Cálculo automático: subtotal, IGV (18%), costo de envío y descuentos.  
- Cupón de descuento disponible (`AHORRO10`).  
- Botón directo a **Lista de pedidos**.

### 🔹 Checkout
- **Paso 1:** selección en carrito.  
- **Paso 2:** formulario de datos (nombre, email, entrega).  
- **Paso 3:** selección de método de pago (Visa, MasterCard, Yape, Plin, efectivo).  
- Validaciones básicas (campos obligatorios y términos).

### 🔹 Pedidos
- Guardados en `localStorage` con ID único (`#PED-YYYYMMDD-####`).  
- Tabla de historial (`pedidos.html`) ordenada por fecha.  
- Cada pedido lleva a su **factura**.

### 🔹 Factura
- Muestra datos del cliente, entrega, ítems comprados y totales.  
- Opción para imprimir en formato ticket o comprobante.  

---

## 📚 Tecnologías utilizadas
- **HTML5** → Base estructural del sitio, con etiquetas semánticas que mejoran accesibilidad y SEO. 
- **CSS3** → Estilización personalizada para reforzar identidad visual más allá de Bootstrap.  
- **Bootstrap 5.3 (mediante CDN)** → Facilita el diseño responsivo, rápido y consistente en cualquier dispositivo sin instalar librerías adicionales.
- **JavaScript (Vanilla)** → lógica del carrito, pedidos y facturas.  
- **LocalStorage** → Solución práctica para persistencia en el navegador sin necesidad de backend, ideal para prototipo educativo o demostrativo.

- 
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-blueviolet?logo=bootstrap&logoColor=white)

---
