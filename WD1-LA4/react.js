// Simple cart logic for product.html
document.addEventListener('DOMContentLoaded', function() {
	// Get all Add to Cart buttons
	const buttons = document.querySelectorAll('.card button');
	// Cart elements
	const cartItemsContainer = document.querySelector('.cart-items');
	const cartTotalAmount = document.querySelector('.total-amount');

	// Clear initial cart items (optional, for demo)
	if (cartItemsContainer) cartItemsContainer.innerHTML = '';
	if (cartTotalAmount) cartTotalAmount.textContent = 'PHP 0.00';

	// Store cart as array of {name, price}
	let cart = [];

	// Helper to parse price string (e.g., 'PHP 12.00')
	function parsePrice(str) {
		const match = str.match(/([\d,.]+)/);
		return match ? parseFloat(match[1].replace(/,/g, '')) : 0;
	}

	// Helper to update cart display
	function updateCart() {
		cartItemsContainer.innerHTML = '';
		let total = 0;
		cart.forEach(item => {
			const div = document.createElement('div');
			div.className = 'cart-item';
			div.innerHTML = `<div class="item-title">${item.name}</div><div class="item-price">PHP ${item.price.toFixed(2)}</div>`;
			cartItemsContainer.appendChild(div);
			total += item.price;
		});
		cartTotalAmount.textContent = 'PHP ' + total.toFixed(2);
	}

	// Add event listeners to all buttons
	buttons.forEach(btn => {
		btn.addEventListener('click', function() {
			const card = btn.closest('.card');
			const name = card.querySelector('h3').textContent.replace('Name: ', '');
			const priceStr = card.querySelector('div').textContent;
			const price = parsePrice(priceStr);
			cart.push({name, price});
			updateCart();
		});
	});
});
