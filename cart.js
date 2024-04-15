document.addEventListener("DOMContentLoaded", function() {
  const cartItemsContainer = document.getElementById('cart-items');
  const clearCartButton = document.getElementById('clear-cart');
  const totalPriceDisplay = document.getElementById('total-price');

  // Retrieve cart items from local storage
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Display cart items and calculate total price
  let totalPrice = 0;
  cartItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.innerHTML = `
      <img src="product_images/${item.name.toLowerCase().replace(/\s/g, '')}.jpg" alt="${item.name}">
      <div>
        <p>${item.name}</p>
        <p>Rs.${item.price}</p>
      </div>
    `;
    cartItemsContainer.appendChild(itemElement);
    totalPrice += item.price;
  });

  // Display total price
  totalPriceDisplay.textContent = `Total Price: Rs.${totalPrice}`;

  // Clear cart button event listener
  clearCartButton.addEventListener('click', () => {
    localStorage.removeItem('cartItems');
    cartItemsContainer.innerHTML = '';
    totalPriceDisplay.textContent = `Total Price: Rs.0`;
    cartItems = [];
  });
});
