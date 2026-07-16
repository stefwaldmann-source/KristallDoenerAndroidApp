const EURO = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

const categories = [
  { id: 'menus', name: 'Kristall Menüs', subtitle: 'Wähle dein Menü', icon: '🥙🥤' },
  { id: 'salads', name: 'Salate', subtitle: 'Frisch & knackig', icon: '🥗' },
  { id: 'doener', name: 'Döner Klassiker', subtitle: 'Der echte Klassiker', icon: '🥙' },
  { id: 'dueruem', name: 'Dürüm', subtitle: 'Gerollt & lecker', icon: '🌯' },
  { id: 'box', name: 'Döner Box', subtitle: 'Perfekt für unterwegs', icon: '🥡' },
  { id: 'teller', name: 'Döner Teller', subtitle: 'Mit Beilage nach Wahl', icon: '🍽️' },
  { id: 'pommes', name: 'Pommes & Snacks', subtitle: 'Pommes, Cheese & Crunch', icon: '🍟' },
  { id: 'drinks', name: 'Getränke', subtitle: '0,3 l aus der Zapfanlage', icon: '🥤' },
  { id: 'gifts', name: 'Gutscheine', subtitle: 'Freude verschenken', icon: '🎁' }
];

const products = [
  { id: 'menu-doener', category: 'menus', name: 'Döner Menü', text: 'Döner im Fladenbrot mit Pommes und 0,3-l-Softdrink aus der Zapfanlage.', price: 9.50, emoji: '🥙🥤' },
  { id: 'menu-box', category: 'menus', name: 'MyDönerbox Menü', text: 'Döner Box mit Pommes, Reis oder Nudeln und 0,3-l-Softdrink.', price: 8.50, emoji: '🥡🥤' },
  { id: 'menu-kids', category: 'menus', name: 'Kids Menü', text: 'Kids Gericht mit Pommes, Capri-Sun und Überraschung.', price: 6.50, emoji: '🍟🧃' },
  { id: 'salat', category: 'salads', name: 'Salat', text: 'Knackiger Salat mit frischem Gemüse, Feta-Käse und Dressing.', price: 5.00, emoji: '🥗' },
  { id: 'salat-gross', category: 'salads', name: 'Salat Groß', text: 'Große Salatbox mit frischem Gemüse, Feta-Käse und Dressing.', price: 8.00, emoji: '🥗' },
  { id: 'doener-pute', category: 'doener', name: 'BIG Döner Putenfleisch', text: 'Saftiges Putenfleisch im Fladenbrot mit Krautsalat, Gurken, Tomaten, Salat und Zwiebeln.', price: 7.00, emoji: '🥙' },
  { id: 'doener-kalb', category: 'doener', name: 'BIG Döner Kalbfleisch', text: 'Würziges Kalbfleisch im Fladenbrot mit frischem Gemüse und Sauce.', price: 8.00, emoji: '🥙' },
  { id: 'doener-cheesy-pute', category: 'doener', name: 'BIG Cheesy Döner Putenfleisch', text: 'Puten-Döner mit cremiger Cheddar-Sauce, frischem Salat und Gemüse.', price: 7.50, emoji: '🥙' },
  { id: 'dueruem-pute', category: 'dueruem', name: 'BIG Dürüm Putenfleisch', text: 'Großer Dürüm mit Puten-Dönerfleisch, Salat, Tomaten, Gurken, Zwiebeln und Sauce.', price: 8.00, emoji: '🌯' },
  { id: 'dueruem-kalb', category: 'dueruem', name: 'BIG Dürüm Kalbfleisch', text: 'Großer Dürüm mit würzigem Kalb-Dönerfleisch, Gemüse und Sauce.', price: 9.00, emoji: '🌯' },
  { id: 'dueruem-cheesy-pute', category: 'dueruem', name: 'BIG Dürüm Putenfleisch mit Cheesy Sauce', text: 'Großer Dürüm mit Puten-Dönerfleisch, Gemüse und cremiger Cheddar-Sauce.', price: 8.50, emoji: '🌯' },
  { id: 'box-pute', category: 'box', name: 'Döner Box mit Putenfleisch', text: 'Mit Pommes, Reis oder Nudeln.', price: 7.00, emoji: '🥡' },
  { id: 'box-kalb', category: 'box', name: 'Döner Box mit Kalbfleisch', text: 'Mit Pommes, Reis oder Nudeln.', price: 8.00, emoji: '🥡' },
  { id: 'box-cheesy', category: 'box', name: 'Döner Box mit Cheesy Sauce', text: 'Mit Pommes, Reis oder Nudeln und leckerer Cheddar-Sauce.', price: 8.50, emoji: '🥡' },
  { id: 'teller-pute', category: 'teller', name: 'Döner Teller mit Putenfleisch', text: 'Mit Pommes, Reis oder Nudeln und dazu Salat.', price: 11.00, emoji: '🍽️' },
  { id: 'teller-cheesy', category: 'teller', name: 'Döner Teller mit Putenfleisch & Cheesy Sauce', text: 'Mit Beilage, Salat und warmer Cheddar-Sauce.', price: 12.00, emoji: '🍽️' },
  { id: 'cheesy-fries', category: 'pommes', name: 'Cheesy Pommes', text: 'Knusprige Pommes mit warmer Cheddar-Sauce.', price: 5.50, emoji: '🍟' },
  { id: 'hot-cheesy-pute', category: 'pommes', name: 'Hot Cheesy Puten Pommes', text: 'Pommes mit Puten-Dönerfleisch, Cheddar-Sauce, scharfer Döner-Sauce und Zwiebeln.', price: 10.00, emoji: '🍟' },
  { id: 'nuggets-cheesy', category: 'pommes', name: 'Cheesy Nuggets Pommes', text: 'Knusprige Pommes mit 9 Chicken Nuggets und cremiger Cheddar-Sauce.', price: 8.50, emoji: '🍗' },
  { id: 'cola', category: 'drinks', name: 'Cola 0,3 l', text: 'Softdrink aus der Zapfanlage im transparenten Becher.', price: 1.50, emoji: '🥤' },
  { id: 'orange', category: 'drinks', name: 'Orange 0,3 l', text: 'Orange-Softdrink aus der Zapfanlage im transparenten Becher.', price: 1.50, emoji: '🥤' },
  { id: 'colamix', category: 'drinks', name: 'Cola Mix 0,3 l', text: 'Cola Mix aus der Zapfanlage im transparenten Becher.', price: 1.50, emoji: '🥤' },
  { id: 'eistee', category: 'drinks', name: 'Eistee 0,3 l', text: 'Erfrischender Eistee aus der Zapfanlage.', price: 1.50, emoji: '🧊' },
  { id: 'wasser', category: 'drinks', name: 'Wasser Sprudel 0,3 l', text: 'Sprudelwasser aus der Zapfanlage.', price: 1.50, emoji: '💧' },
  { id: 'gutschein', category: 'gifts', name: 'Kristall Gutschein', text: 'Gutschein zum Verschenken.', price: 10.00, emoji: '🎁' }
];

const DEFAULT_SETTINGS = {
  online: true,
  delivery: true,
  pickup: true,
  paused: false,
  openFrom: '10:30',
  openUntil: '21:00'
};

let selectedCategory = 'menus';
let selectedMode = 'delivery';
let query = '';
let cart = JSON.parse(localStorage.getItem('kdCart') || '[]');
let settings = { ...DEFAULT_SETTINGS, ...JSON.parse(localStorage.getItem('kdSettings') || '{}') };

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function saveCart() {
  localStorage.setItem('kdCart', JSON.stringify(cart));
}

function saveSettings() {
  localStorage.setItem('kdSettings', JSON.stringify(settings));
}

function isWithinTime() {
  const now = new Date();
  const current = now.getHours() * 60 + now.getMinutes();
  const [fromH, fromM] = settings.openFrom.split(':').map(Number);
  const [untilH, untilM] = settings.openUntil.split(':').map(Number);
  const from = fromH * 60 + fromM;
  const until = untilH * 60 + untilM;
  return current >= from && current <= until;
}

function getShopStatus() {
  if (!settings.online) return { color: 'red', text: 'Online-Bestellung deaktiviert' };
  if (settings.paused) return { color: 'red', text: 'Küche pausiert' };
  if (!settings.delivery && !settings.pickup) return { color: 'red', text: 'Lieferung und Abholung deaktiviert' };
  if (!isWithinTime()) return { color: 'yellow', text: `Außerhalb der Bestellzeit · ${settings.openFrom}–${settings.openUntil} Uhr` };
  return { color: 'green', text: 'Bestellung aktuell möglich' };
}

function renderStatus() {
  const status = getShopStatus();
  const modeText = [settings.delivery ? 'Lieferung' : null, settings.pickup ? 'Abholung' : null].filter(Boolean).join(' & ') || 'geschlossen';
  $('#shopSubtitle').textContent = `${modeText} · Bestellzeit ${settings.openFrom}–${settings.openUntil} Uhr`;
  $('#statusPanel').innerHTML = `
    <div class="ampel ${status.color}"><span class="dot"></span><span>${status.text}</span></div>
    <div class="ampel ${settings.delivery ? 'green' : 'red'}"><span class="dot"></span><span>Lieferung ${settings.delivery ? 'aktiv' : 'aus'}</span></div>
    <div class="ampel ${settings.pickup ? 'green' : 'red'}"><span class="dot"></span><span>Abholung ${settings.pickup ? 'aktiv' : 'aus'}</span></div>
  `;
}

function renderCategories() {
  $('#categoryList').innerHTML = categories.map(category => `
    <button type="button" class="category-btn ${category.id === selectedCategory ? 'active' : ''}" data-category="${category.id}">
      <span class="cat-img">${category.icon}</span>
      <span><strong>${category.name}</strong><span>${category.subtitle}</span></span>
      <span class="chev">›</span>
    </button>
  `).join('');
}

function renderProducts() {
  const category = categories.find(item => item.id === selectedCategory) || categories[0];
  $('#categoryTitle').textContent = category.name;
  $('#categorySubtitle').textContent = category.subtitle;

  const filtered = products.filter(product => {
    const matchesCategory = product.category === selectedCategory;
    const text = `${product.name} ${product.text}`.toLowerCase();
    return matchesCategory && text.includes(query.toLowerCase());
  });

  $('#productList').innerHTML = filtered.map(product => `
    <article class="product-row">
      <div class="product-img" style="display:grid;place-items:center;font-size:36px">${product.emoji}</div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.text}</p>
        <button type="button" class="info-link">ⓘ Mehr Info</button>
        <strong class="price">${EURO.format(product.price)} · Lieferung & Abholung</strong>
      </div>
      <button class="add-btn" type="button" data-add="${product.id}" aria-label="${product.name} hinzufügen">+</button>
    </article>
  `).join('') || '<p class="hint" style="padding:24px">Keine Produkte gefunden.</p>';
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) existing.qty += 1;
  else cart.push({ id: product.id, qty: 1 });
  saveCart();
  renderCart();
}

function changeQty(productId, diff) {
  const item = cart.find(entry => entry.id === productId);
  if (!item) return;
  item.qty += diff;
  cart = cart.filter(entry => entry.qty > 0);
  saveCart();
  renderCart();
}

function totals() {
  const subtotal = cart.reduce((sum, item) => {
    const product = products.find(entry => entry.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
  const service = cart.length ? 0.50 : 0;
  const delivery = selectedMode === 'delivery' && subtotal > 0 ? 2.00 : 0;
  return { subtotal, service, delivery, total: subtotal + service + delivery };
}

function cartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function renderCart() {
  const t = totals();
  $('#cartBarTotal').textContent = `${cartCount()} Artikel · ${EURO.format(t.total)}`;

  $('#cartItems').innerHTML = cart.map(item => {
    const product = products.find(entry => entry.id === item.id);
    if (!product) return '';
    return `
      <div class="cart-item">
        <div>
          <strong>${product.name}</strong>
          <span>${EURO.format(product.price)} pro Stück</span>
        </div>
        <div class="qty">
          <button type="button" data-qty="-1" data-id="${product.id}">−</button>
          <strong>${item.qty}</strong>
          <button type="button" data-qty="1" data-id="${product.id}">+</button>
        </div>
      </div>
    `;
  }).join('') || '<p class="hint">Dein Warenkorb ist noch leer.</p>';

  $('#cartTotals').innerHTML = `
    <div><span>Zwischensumme</span><strong>${EURO.format(t.subtotal)}</strong></div>
    <div><span>Servicepauschale</span><strong>${EURO.format(t.service)}</strong></div>
    <div><span>${selectedMode === 'delivery' ? 'Liefergebühr' : 'Abholung'}</span><strong>${selectedMode === 'delivery' ? EURO.format(t.delivery) : '0,00 €'}</strong></div>
    <div class="grand"><span>Gesamt</span><strong>${EURO.format(t.total)}</strong></div>
  `;
}

function openDrawer() {
  $('#cartDrawer').setAttribute('aria-hidden', 'false');
}

function closeDrawer() {
  $('#cartDrawer').setAttribute('aria-hidden', 'true');
}

function openAdmin() {
  $('#adminOnline').checked = settings.online;
  $('#adminDelivery').checked = settings.delivery;
  $('#adminPickup').checked = settings.pickup;
  $('#adminPaused').checked = settings.paused;
  $('#adminOpenFrom').value = settings.openFrom;
  $('#adminOpenUntil').value = settings.openUntil;
  $('#adminDrawer').setAttribute('aria-hidden', 'false');
}

function closeAdmin() {
  $('#adminDrawer').setAttribute('aria-hidden', 'true');
}

function bindEvents() {
  document.addEventListener('click', (event) => {
    const categoryButton = event.target.closest('[data-category]');
    if (categoryButton) {
      selectedCategory = categoryButton.dataset.category;
      renderCategories();
      renderProducts();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const addButton = event.target.closest('[data-add]');
    if (addButton) {
      addToCart(addButton.dataset.add);
    }

    const qtyButton = event.target.closest('[data-qty]');
    if (qtyButton) {
      changeQty(qtyButton.dataset.id, Number(qtyButton.dataset.qty));
    }

    if (event.target.closest('[data-close-drawer]')) closeDrawer();
    if (event.target.closest('[data-close-admin]')) closeAdmin();
  });

  $$('.mode-tab').forEach(button => {
    button.addEventListener('click', () => {
      selectedMode = button.dataset.mode;
      $$('.mode-tab').forEach(item => item.classList.toggle('active', item === button));
      $('#addressPanel').style.display = selectedMode === 'delivery' ? 'grid' : 'none';
      renderCart();
    });
  });

  $('#searchInput').addEventListener('input', (event) => {
    query = event.target.value;
    renderProducts();
  });

  $('#cartBar').addEventListener('click', openDrawer);
  $('#adminOpen').addEventListener('click', openAdmin);

  $('#saveAdmin').addEventListener('click', () => {
    settings = {
      online: $('#adminOnline').checked,
      delivery: $('#adminDelivery').checked,
      pickup: $('#adminPickup').checked,
      paused: $('#adminPaused').checked,
      openFrom: $('#adminOpenFrom').value || DEFAULT_SETTINGS.openFrom,
      openUntil: $('#adminOpenUntil').value || DEFAULT_SETTINGS.openUntil
    };
    saveSettings();
    renderStatus();
    closeAdmin();
  });

  $('#placeOrder').addEventListener('click', () => {
    if (!cart.length) {
      alert('Dein Warenkorb ist noch leer.');
      return;
    }
    const status = getShopStatus();
    if (status.color === 'red') {
      alert('Bestellung aktuell nicht möglich: ' + status.text);
      return;
    }
    const orderId = 'KD-' + new Date().toISOString().slice(0, 10).replaceAll('-', '') + '-' + Math.floor(Math.random() * 9000 + 1000);
    alert(`Demo-Bestellung erstellt: ${orderId}\n\nIn Produktion wird diese Bestellung an Küche/Admin gesendet.`);
    cart = [];
    saveCart();
    renderCart();
    closeDrawer();
  });
}

function init() {
  renderStatus();
  renderCategories();
  renderProducts();
  renderCart();
  bindEvents();
}

init();
