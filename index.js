document.addEventListener('DOMContentLoaded', function() {
            const quantityInput = document.getElementById('quantity');
            const decreaseBtn = document.getElementById('decrease-qty');
            const increaseBtn = document.getElementById('increase-qty');
            const unitPriceElement = document.getElementById('unit-price');
            const totalPriceElement = document.getElementById('total-price');
            const stockCountElement = document.getElementById('stock-count');
            
            const unitPrice = 600.72;
            let stockCount = 2;
            
            // Update total price function
            function updateTotalPrice() {
                const quantity = parseInt(quantityInput.value);
                const totalPrice = (unitPrice * quantity).toFixed(2);
                totalPriceElement.textContent = totalPrice;
                
                // Update stock warning if needed
                if (quantity > stockCount) {
                    stockCountElement.textContent = '0';
                    stockCountElement.parentElement.style.backgroundColor = '#ff0000';
                } else {
                    const remainingStock = stockCount - quantity;
                    stockCountElement.textContent = remainingStock;
                    stockCountElement.parentElement.style.backgroundColor = remainingStock < 3 ? '#ff4444' : '#4CAF50';
                }
            }
            
            // Decrease quantity
            decreaseBtn.addEventListener('click', function() {
                let currentValue = parseInt(quantityInput.value);
                if (currentValue > 1) {
                    quantityInput.value = currentValue - 1;
                    updateTotalPrice();
                }
            });
            
            // Increase quantity
            increaseBtn.addEventListener('click', function() {
                let currentValue = parseInt(quantityInput.value);
                quantityInput.value = currentValue + 1;
                updateTotalPrice();
            });
            
            // Manual input handling
            quantityInput.addEventListener('input', function() {
                let value = parseInt(this.value);
                if (isNaN(value) || value < 1) {
                    this.value = 1;
                }
                updateTotalPrice();
            });
            
            // Initialize
            updateTotalPrice();
        });