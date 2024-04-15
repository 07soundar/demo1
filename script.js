document.addEventListener("DOMContentLoaded", function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.parentElement.querySelector('h2').textContent;
      const productPrice = parseFloat(button.dataset.price);
      addToCart(productName, productPrice);
    });
  });

  function addToCart(name, price) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ name, price });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
});
