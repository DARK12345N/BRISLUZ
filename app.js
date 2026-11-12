const products = [
  {
    id: "fresas-crema",
    name: "Pastel de chocolate",
    description: "Bizcocho húmedo de cacao y cobertura de chocolate.",
    category: "Pasteles",
    badge: "El favorito",
    price: 32,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80",
    keywords: ["chocolate", "cacao", "dulce", "compartir", "cumpleaños"],
  },
  {
    id: "chocolate-cielo",
    name: "Chocolate del cielo",
    description: "Bizcocho de cacao, ganache y corazón cremoso.",
    category: "Pasteles",
    badge: "Intensamente rico",
    price: 36,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
    keywords: ["chocolate", "cacao", "dulce", "compartir"],
  },
  {
    id: "red-velvet",
    name: "Red velvet",
    description: "Bizcocho aterciopelado con crema suave de queso.",
    category: "Pasteles",
    badge: "Un clásico",
    price: 42,
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=700&q=80",
    keywords: ["red velvet", "terciopelo", "queso", "cumpleaños", "pastel"],
  },
  {
    id: "tres-leches",
    name: "Tres leches",
    description: "Bizcocho esponjoso bañado en tres leches y crema.",
    category: "Pasteles",
    badge: "Suave y cremoso",
    price: 40,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80",
    keywords: ["tres leches", "leche", "crema", "vainilla", "pastel"],
  },
  {
    id: "limon-encanto",
    name: "Vasitos de frutos rojos",
    description: "Crema suave, fruta fresca y capas crujientes.",
    category: "Porciones",
    badge: "Fresquito",
    price: 9,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80",
    keywords: ["frutos rojos", "fresa", "fruta", "porción", "ligero", "crema"],
  },
  {
    id: "cheesecake-limon",
    name: "Cheesecake de limón",
    description: "Porción cremosa con limón fresco y base crocante.",
    category: "Porciones",
    badge: "Toque cítrico",
    price: 12,
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=700&q=80",
    keywords: ["cheesecake", "queso", "limón", "limon", "cítrico", "citrico", "porción"],
  },
  {
    id: "brownie-nuez",
    name: "Brownie con nuez",
    description: "Brownie tibio de chocolate con nueces tostadas.",
    category: "Porciones",
    badge: "Bien chocolatoso",
    price: 10,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
    keywords: ["brownie", "chocolate", "cacao", "nuez", "porción"],
  },
  {
    id: "tarta-manzana",
    name: "Tarta de manzana",
    description: "Manzana horneada, canela y masa doradita.",
    category: "Porciones",
    badge: "Recién horneada",
    price: 11,
    image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?auto=format&fit=crop&w=700&q=80",
    keywords: ["manzana", "canela", "tarta", "fruta", "porción"],
  },
  {
    id: "mini-momentos",
    name: "Mini momentos",
    description: "Seis bocaditos dulces para compartir sonrisas.",
    category: "Especiales",
    badge: "Para compartir",
    price: 24,
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=700&q=80",
    keywords: ["compartir", "cupcakes", "mini", "regalo", "fiesta"],
  },
  {
    id: "caja-cupcakes",
    name: "Caja de cupcakes",
    description: "Seis cupcakes decorados con crema y detalles dulces.",
    category: "Especiales",
    badge: "Para celebrar",
    price: 30,
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=700&q=80",
    keywords: ["cupcake", "cupcakes", "caja", "fiesta", "regalo", "cumpleaños"],
  },
  {
    id: "alfajores-casa",
    name: "Alfajores de la casa",
    description: "Seis alfajores suaves rellenos de dulce de leche.",
    category: "Especiales",
    badge: "Para compartir",
    price: 18,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=700&q=80",
    keywords: ["alfajor", "alfajores", "dulce de leche", "galletas", "regalo"],
  },
  {
    id: "caja-trufas",
    name: "Trufas de chocolate",
    description: "Ocho trufas artesanales con cacao y chocolate.",
    category: "Especiales",
    badge: "Un dulce detalle",
    price: 26,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=80",
    keywords: ["trufas", "chocolate", "cacao", "regalo", "para compartir"],
  },
];

const customPrices = {
  "Pastel personalizado": { Pequeño: 20, Mediano: 32, Grande: 44 },
  "Cheesecake personalizado": { Pequeño: 22, Mediano: 34, Grande: 46 },
  "Caja de cupcakes": { Pequeño: 18, Mediano: 27, Grande: 36 },
};

const WHATSAPP_NUMBER = "59169042191";
const formatNumber = new Intl.NumberFormat("es-BO", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
const money = (amount) => `Bs ${formatNumber.format(amount)}`;
const getCart = () => {
  try {
    const stored = JSON.parse(localStorage.getItem("brisLuzCart") || "[]");
    return Array.isArray(stored) ? stored.filter((item) =>
      item && typeof item.id === "string" && typeof item.name === "string" &&
      Number.isFinite(item.price) && Number.isInteger(item.quantity) && item.quantity > 0
    ) : [];
  } catch (error) {
    console.error("No se pudo recuperar el carrito guardado.", error);
    return [];
  }
};

let cart = getCart();
let activeCategory = "Todos";
let toastTimer;

const productGrid = document.querySelector("#product-grid");
const cartPanel = document.querySelector("#cart-panel");
const overlay = document.querySelector("#overlay");
const checkoutDialog = document.querySelector("#checkout-dialog");
const confirmationDialog = document.querySelector("#confirmation-dialog");

function renderProducts() {
  const visibleProducts = products.filter((product) => activeCategory === "Todos" || product.category === activeCategory);
  document.querySelector('[data-category="Todos"] span').textContent = String(products.length).padStart(2, "0");
  productGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <span class="product-badge">${product.badge}</span>
        <button class="quick-add" type="button" data-add-product="${product.id}" aria-label="Agregar ${product.name} al pedido">+</button>
      </div>
      <div class="product-info">
        <div><h3>${product.name}</h3><p>${product.description}</p></div>
        <span class="product-price">${money(product.price)}</span>
      </div>
    </article>
  `).join("");
}

function saveCart() {
  try {
    localStorage.setItem("brisLuzCart", JSON.stringify(cart));
  } catch (error) {
    console.error("No se pudo guardar el carrito.", error);
    showToast("No pudimos guardar tu pedido en este dispositivo.");
  }
  renderCart();
}

function addToCart(item) {
  const existing = cart.find((entry) => entry.id === item.id);
  if (existing) existing.quantity += 1;
  else cart.push({ ...item, quantity: 1 });
  saveCart();
  showToast(`${item.name} se agregó a tu pedido.`);
}

function changeQuantity(id, amount) {
  const item = cart.find((entry) => entry.id === id);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) cart = cart.filter((entry) => entry.id !== id);
  saveCart();
}

function renderCart() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  document.querySelector("#cart-count").textContent = count;
  document.querySelector("#cart-heading-count").textContent = `(${count})`;
  document.querySelector("#cart-total").textContent = money(subtotal);
  document.querySelector("#checkout-total").textContent = money(subtotal);
  document.querySelector("#chat-whatsapp-link").href = makeWhatsAppUrl(getCartSummary());
  document.querySelector("#cart-items").innerHTML = cart.map((item) => `
    <article class="cart-item">
      <div><h3>${escapeHTML(item.name)}</h3><p>${escapeHTML(item.description || "")}</p></div>
      <span class="cart-item-price">${money(item.price * item.quantity)}</span>
      <div class="quantity-control" aria-label="Cantidad de ${escapeHTML(item.name)}">
        <button type="button" data-quantity="${escapeHTML(item.id)}" data-change="-1" aria-label="Quitar una unidad">−</button>
        <span>${item.quantity}</span>
        <button type="button" data-quantity="${escapeHTML(item.id)}" data-change="1" aria-label="Agregar una unidad">+</button>
      </div>
      <button class="remove-item" type="button" data-remove="${escapeHTML(item.id)}">Quitar</button>
    </article>
  `).join("");
  document.querySelector("#checkout-items").innerHTML = cart.map((item) =>
    `<li>${item.quantity} × ${escapeHTML(item.name)} — ${money(item.price * item.quantity)}</li>`
  ).join("");
  document.querySelector("#cart-empty").hidden = count !== 0;
  document.querySelector("#cart-bottom").hidden = count === 0;
  document.querySelector("#cart-items").hidden = count === 0;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2300);
}

function openCart() {
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
  overlay.classList.add("visible");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
  overlay.classList.remove("visible");
  document.body.style.overflow = "";
}

function updateCustomPrice() {
  const base = document.querySelector("#custom-base").value;
  const size = document.querySelector("#custom-size").value;
  document.querySelector("#custom-price").textContent = money(customPrices[base][size]);
}

function appendMessage(text, kind) {
  const message = document.createElement("div");
  message.className = `message ${kind === "user" ? "user-message" : "bot-message"}`;
  message.textContent = text;
  document.querySelector("#chat-messages").append(message);
  document.querySelector("#chat-messages").scrollTop = document.querySelector("#chat-messages").scrollHeight;
}

function makeWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getCartSummary() {
  if (cart.length === 0) return "Hola, quiero hacer un pedido de postres.";
  const items = cart.map((item) => `${item.quantity} x ${item.name} (${money(item.price * item.quantity)})`);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return `Hola, quiero hacer este pedido:\n${items.join("\n")}\nTotal: ${money(total)}`;
}

function appendWhatsAppLink(label, message) {
  const link = document.createElement("a");
  link.className = "chat-whatsapp-link";
  link.href = makeWhatsAppUrl(message);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = label;
  document.querySelector("#chat-messages").append(link);
  document.querySelector("#chat-messages").scrollTop = document.querySelector("#chat-messages").scrollHeight;
}

function showChatRecommendation(message) {
  const input = message.toLocaleLowerCase("es");
  if (input.includes("pedido") || input.includes("comprar") || input.includes("contacto") || input.includes("whatsapp") || input.includes("reservar")) {
    appendMessage("¡Claro! Puedes escribirnos directamente al WhatsApp de BrisLuz. Si ya elegiste postres, incluiré tu carrito en el mensaje. 💬", "bot");
    appendWhatsAppLink("Continuar por WhatsApp · 69042191 ↗", getCartSummary());
    return;
  }
  if (input.includes("personaliz")) {
    appendMessage("¡Me encanta esa idea! En la sección “Personaliza” puedes escoger base, tamaño y sabor. También puedes agregar una dedicatoria. ✨", "bot");
    return;
  }
  if (input.includes("precio") || input.includes("costo") || input.includes("cuánto") || input.includes("cuanto")) {
    appendMessage(`Las porciones empiezan en ${money(9)} y nuestros pasteles favoritos desde ${money(32)}. Cada creación personalizada muestra su precio antes de agregarla. 💛`, "bot");
    return;
  }
  if (input.includes("alerg") || input.includes("nuez") || input.includes("sin ")) {
    appendMessage("Gracias por contármelo 💛 Puedes dejar tus indicaciones en el detalle especial o en la nota del pedido. Por seguridad, confirma los ingredientes y posibles alérgenos con la pastelería antes de comprar.", "bot");
    return;
  }
  let matches = products.filter((product) => product.keywords.some((keyword) => input.includes(keyword)));
  if (input.includes("compart") || input.includes("familia") || input.includes("varios")) {
    matches = [...products.filter((product) => product.id === "mini-momentos"), ...matches];
  }
  if (matches.length === 0) matches = [products[0], products[3]];
  const recommendations = matches.slice(0, 2);
  appendMessage(recommendations.length === 1 ? "¡Tengo una idea para ti! 🌷" : "¡Mira, estas opciones podrían gustarte! 🌷", "bot");
  const messageArea = document.querySelector("#chat-messages");
  recommendations.forEach((product) => {
    const card = document.createElement("div");
    card.className = "message-product";
    const detail = document.createElement("span");
    const name = document.createElement("strong");
    name.textContent = product.name;
    const price = document.createElement("small");
    price.textContent = money(product.price);
    detail.append(name, price);
    const add = document.createElement("button");
    add.type = "button";
    add.textContent = "+";
    add.setAttribute("aria-label", `Agregar ${product.name} al pedido`);
    add.addEventListener("click", () => addToCart({ ...product, description: product.description }));
    card.append(detail, add);
    messageArea.append(card);
  });
  messageArea.scrollTop = messageArea.scrollHeight;
}

document.querySelector(".category-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  document.querySelectorAll(".category-chip").forEach((chip) => chip.classList.toggle("active", chip === button));
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-product]");
  if (!button) return;
  const product = products.find((entry) => entry.id === button.dataset.addProduct);
  if (product) addToCart(product);
});

document.querySelector("#cart-items").addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-quantity]");
  if (quantityButton) {
    changeQuantity(quantityButton.dataset.quantity, Number(quantityButton.dataset.change));
    return;
  }
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    cart = cart.filter((item) => item.id !== removeButton.dataset.remove);
    saveCart();
  }
});

document.querySelector("#custom-base").addEventListener("change", updateCustomPrice);
document.querySelector("#custom-size").addEventListener("change", updateCustomPrice);
document.querySelector("#custom-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const base = document.querySelector("#custom-base").value;
  const size = document.querySelector("#custom-size").value;
  const flavor = document.querySelector("#custom-flavor").value;
  const note = document.querySelector("#custom-note").value.trim();
  const description = `${size} · ${flavor}${note ? ` · ${note}` : ""}`;
  const id = `custom-${base}-${size}-${flavor}-${note}`.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  addToCart({ id, name: base, description, price: customPrices[base][size] });
  document.querySelector("#custom-note").value = "";
});

document.querySelector("#open-cart").addEventListener("click", openCart);
document.querySelector("#close-cart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);
document.querySelector("#browse-desserts").addEventListener("click", () => {
  closeCart();
  document.querySelector("#coleccion").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#checkout-button").addEventListener("click", () => {
  if (cart.length === 0) return;
  closeCart();
  const date = document.querySelector("#delivery-date");
  const today = new Date();
  date.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  checkoutDialog.showModal();
});
document.querySelector("#close-checkout").addEventListener("click", () => checkoutDialog.close());
checkoutDialog.addEventListener("click", (event) => {
  if (event.target === checkoutDialog) checkoutDialog.close();
});
document.querySelector("#checkout-form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (cart.length === 0) {
    checkoutDialog.close();
    showToast("Agrega un postre antes de continuar.");
    return;
  }
  const name = document.querySelector("#customer-name").value.trim();
  const phone = document.querySelector("#customer-phone").value.trim();
  const date = document.querySelector("#delivery-date").value;
  const note = document.querySelector("#order-note").value.trim();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const readableDate = new Date(`${date}T12:00:00`).toLocaleDateString("es", { dateStyle: "long" });
  const orderLines = cart.map((item) => `${item.quantity} x ${item.name} — ${money(item.price * item.quantity)}${item.description ? ` (${item.description})` : ""}`);
  const whatsappMessage = [
    "Hola, quiero confirmar mi pedido en BrisLuz.",
    `Nombre: ${name}`,
    `Teléfono: ${phone}`,
    `Fecha solicitada: ${readableDate}`,
    "",
    ...orderLines,
    `Total: ${money(total)}`,
    note ? `Nota: ${note}` : "",
  ].filter(Boolean).join("\n");
  document.querySelector("#send-order-whatsapp").href = makeWhatsAppUrl(whatsappMessage);
  document.querySelector("#confirmation-name").textContent = name.split(/\s+/)[0];
  document.querySelector("#confirmation-message").textContent = `Tu pedido está listo para enviar por WhatsApp al 69042191. Fecha solicitada: ${readableDate}.`;
  document.querySelector("#confirmation-summary").textContent = [
    ...cart.map((item) => `${item.quantity} × ${item.name} (${money(item.price * item.quantity)})`),
    `Total: ${money(cart.reduce((total, item) => total + item.price * item.quantity, 0))}`,
    note ? `Nota: ${note}` : "",
  ].filter(Boolean).join("\n");
  checkoutDialog.close();
  confirmationDialog.showModal();
});
document.querySelector("#send-order-whatsapp").addEventListener("click", () => {
  cart = [];
  saveCart();
  document.querySelector("#checkout-form").reset();
});
document.querySelector("#finish-order").addEventListener("click", () => confirmationDialog.close());
confirmationDialog.addEventListener("click", (event) => {
  if (event.target === confirmationDialog) confirmationDialog.close();
});

const chatPanel = document.querySelector("#chat-panel");
function setChatOpen(open) {
  chatPanel.classList.toggle("open", open);
  chatPanel.setAttribute("aria-hidden", String(!open));
  if (open) document.querySelector("#chat-text").focus();
}
document.querySelector("#chat-launcher").addEventListener("click", () => setChatOpen(!chatPanel.classList.contains("open")));
document.querySelector("#close-chat").addEventListener("click", () => setChatOpen(false));
document.querySelector("#chat-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#chat-text");
  const message = input.value.trim();
  if (!message) return;
  input.value = "";
  appendMessage(message, "user");
  showChatRecommendation(message);
});
document.querySelector("#chat-messages").addEventListener("click", (event) => {
  const suggestion = event.target.closest("[data-chat-suggestion]");
  if (!suggestion) return;
  appendMessage(suggestion.dataset.chatSuggestion, "user");
  showChatRecommendation(suggestion.dataset.chatSuggestion);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cartPanel.classList.contains("open")) closeCart();
});

renderProducts();
renderCart();
updateCustomPrice();
