# 🛒 Proyecto PA1 — Grupo 8 - tienda online 

## 👥 Integrantes
- Danny Gorddy Huaman Chavez  ----  100 %
- - Participante 2: ______________________  
- Participante 3: ______________________  
- Participante 4: ______________________  
- Participante 5: ______________________  

---

## 📌 Justificación

Hemos desarrollado una página de tienda online llamada: " Cusco Store " como simulación de un comercio electrónico moderno. El proyecto cuenta con **tres categorías principales de productos**:  

- 🥫 **Abarrotes**  
- 🧸 **Juguetería**  
- 🗂️ **Artículos de oficina**  

Desde el **inicio**, el usuario puede acceder al catálogo, explorar las categorías y añadir productos a un **carrito dinámico** que permite: modificar cantidades, eliminar ítems, aplicar cupones de descuento, elegir el tipo de entrega (delivery o recojo en tienda) y calcular automáticamente el total con impuestos y envío. ademas de contar con una pásarela de pago 

Una vez finalizada la compra, el sistema genera un **pedido con un identificador único** que se almacena en el navegador. Dichos pedidos quedan registrados en una **lista de pedidos** accesible desde el carrito, y cada pedido puede abrirse para visualizar su **factura detallada e imprimible**, con desglose de subtotal, IGV, envío, descuento y total final.  

Este proyecto integra HTML, CSS, JavaScript y como framework: Bootstrap mediante  en la construcción de un flujo completo de compra en línea, mostrando cómo se combinan las tecnologías web para dar solución a un problema cotidiano como el comercio digital.  
Listo 👍 aquí tienes un resumen bien corto y directo, solo lo que hicieron:
En el proyecto usamos **Bootstrap 5.3 mediante CDN**, agregando sus enlaces de **CSS** en el `<head>` y **JS** antes del cierre del `<body>`. Gracias a esto, pudimos aplicar rápidamente el **sistema de grillas**, la **barra de navegación**, los **botones**, **tarjetas** y otros componentes responsivos sin necesidad de instalar nada adicional.

## 🏷️ Proyecto elegido

Desarrollamos **“Cusco Store**, una plataforma de compra sencilla que incluye:  
- Un **catálogo de productos** organizado en categorías.  
- Un **carrito dinámico** para agregar, modificar y eliminar artículos.  
- Un **checkout en pasos** con datos de contacto, entrega y pago.  
- Un **historial de pedidos** almacenado en el navegador.  
- Una **factura imprimible** para cada pedido realizado.  

---

## 🏗️ Estructura del proyecto
mi-tienda-online/
├── index.html # Página de inicio
├── tienda.html # Catálogo de productos
├── carrito.html # Carrito y proceso de compra
├── pedidos.html # Historial de pedidos realizados
├── factura.html # Factura de cada pedido
├── css/
│ └── style.css # Estilos personalizados
├── js/
│ └── script.js # Lógica y funcionalidades
└── img/ # Imágenes de productos

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
- **HTML5** → estructura semántica de las páginas.  
- **CSS3** → estilos personalizados para la tienda.  
- **Bootstrap 5.3 (mediante CDN)** → framework de diseño usado para el sistema de grillas, navbar, botones, tarjetas y componentes responsivos. Se integró agregando sus enlaces de CSS en el `<head>` y de JS antes del cierre del `<body>`.  
- **JavaScript (Vanilla)** → lógica del carrito, pedidos y facturas.  
- **LocalStorage** → persistencia de información en el navegador (carrito y pedidos).  

- 
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-blueviolet?logo=bootstrap&logoColor=white)

---
