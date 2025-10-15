import fetchProducts from './products.js';
import { formatCurrency } from './data.js';

let cart = [];
let cartTotal = 0;

// Function to update cart total
function updateCartTotal() {
  cartTotal = cart.reduce((total, item) => total + item.quantity, 0);
  /*console.log(`Cart total updated: ${cartTotal} items`); //Template literal #2*/
  return cartTotal;
}

// Load cart from localStorage
function loadCartFromStorage() {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
    /*console.log(`Loaded ${cart.length} items from storage`); //Template literal #3*/
  }
}

// Save cart to localStorage
function saveCartToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Main initialization function
async function init() {
  // Fetch the products data
  const data = await fetchProducts();

  let renderHtml = '';

  // Render products
  data.forEach(product => {
    renderHtml += `
      <section class="js-product-container product-container" id="${product.id}">
        <div class="product-image-container">
          <img class="js-product-image product-image" src="${product.image}" alt="">
        </div>
        <div class="product-name">
          <p>${product.name}</p>
        </div>
        <div class="product-rating">
          <p>${product.rating.stars}</p>
        </div>
        <div class="product-price">
          <p>$${formatCurrency(product.priceCents)}</p>
        </div>
        <div class="product-quantity">
          <select class="product-amount">
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
        <div>
          <button class="primary-button" data-product-id="${product.id}">
            Add to cart
          </button>
        </div>
      </section>
    `;
  });

  const displayProducts = document.querySelector('.products');
  if (displayProducts) {
    displayProducts.innerHTML = renderHtml;
  }

  // Lazy load all images and add 'active' class
  const allImages = document.querySelectorAll('img');
  allImages.forEach((img) => {
    img.setAttribute('loading', 'lazy');
    img.classList.add('active');
  });

  // Load cart and update UI
  loadCartFromStorage();
  updateCartTotal();

  // Update cart display
  const cartHtmlElement = document.querySelector('.cart-items-number');
  if (cartHtmlElement) {
    cartHtmlElement.innerHTML = cartTotal;
  }

  // Handle Add to Cart
  const addToCartButtons = document.querySelectorAll('.primary-button');

  addToCartButtons.forEach(button => {
    const productId = button.dataset.productId;
    const isInCart = cart.find(item => item.productId === productId);
    if (isInCart) {
      button.innerHTML = 'Item added to cart';
    }

    button.addEventListener('click', () => {
      const productContainer = button.closest('.js-product-container');
      const quantitySelect = productContainer.querySelector('.product-amount');
      const quantity = parseInt(quantitySelect.value);

      const index = cart.findIndex(item => item.productId === productId);

      if (index === -1) {
        // Add product
        cart.push({ productId, quantity });
        button.innerHTML = 'Item added to cart';
      } else {
        // Remove product
        cart.splice(index, 1);
        button.innerHTML = 'Add to cart';
      }

      // Update cart total and display
      const total = updateCartTotal();
      if (cartHtmlElement) {
        cartHtmlElement.innerHTML = total;
      }

      // Save to localStorage
      saveCartToStorage();
    });
  });
}

init();