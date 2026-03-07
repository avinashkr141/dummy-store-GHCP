const items = [
  { name: "Canvas Backpack", price: 39.99 },
  { name: "Stainless Water Bottle", price: 18.5 },
  { name: "Wireless Mouse", price: 24.0 },
  { name: "Desk Lamp", price: 32.99 },
  { name: "Notebook Set (3-pack)", price: 12.5 },
  { name: "Ceramic Coffee Mug", price: 9.75 },
  { name: "Bluetooth Speaker", price: 45.0 },
  { name: "Yoga Mat", price: 27.99 },
  { name: "Scented Candle", price: 14.25 },
  { name: "Phone Stand", price: 11.0 }
];

const listEl = document.querySelector("#item-list ul");
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

listEl.innerHTML = "";
items.forEach((item) => {
  const li = document.createElement("li");
  li.className = "item-card";
  li.innerHTML = `
    <div class="item-name">${item.name}</div>
    <div class="item-price">${formatter.format(item.price)}</div>
  `;
  listEl.appendChild(li);
});