// Menu Items Data
const menuItems = [
    // Pizzas
    {
        id: 1,
        name: "Crown Crust Pizza",
        category: "pizza",
        description: "Our signature crown crust pizza with premium toppings",
        price: 2400,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        name: "Cheesy Mughlai Pizza",
        category: "pizza",
        description: "Rich Mughlai flavors with extra cheese",
        price: 2400,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        name: "The Corn Lover",
        category: "pizza",
        description: "Sweet corn with creamy sauce",
        price: 1750,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        name: "Chicken Arabian",
        category: "pizza",
        description: "Arabian spiced chicken pizza",
        price: 1750,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        name: "Classic Pepperoni",
        category: "pizza",
        description: "Classic pepperoni with mozzarella",
        price: 1750,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        name: "Very Veggie",
        category: "pizza",
        description: "Fresh vegetables with herbs",
        price: 1750,
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop"
    },
    {
        id: 7,
        name: "Cheese Lover",
        category: "pizza",
        description: "Triple cheese pizza",
        price: 1750,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop"
    },
    {
        id: 8,
        name: "Creamy Melt",
        category: "pizza",
        description: "Creamy sauce with melting cheese",
        price: 1750,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop"
    },
    {
        id: 9,
        name: "Chicken Fajita",
        category: "pizza",
        description: "Spicy chicken fajita pizza",
        price: 1750,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop"
    },
    {
        id: 10,
        name: "Chicken Tikka",
        category: "pizza",
        description: "Traditional chicken tikka pizza",
        price: 1750,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop"
    },
    {
        id: 11,
        name: "Chilli Chicken",
        category: "pizza",
        description: "Spicy chili chicken pizza",
        price: 2050,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop"
    },
    {
        id: 12,
        name: "Chicken Supreme",
        category: "pizza",
        description: "Supreme chicken with all toppings",
        price: 2050,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop"
    },
    {
        id: 13,
        name: "The Crust Special",
        category: "pizza",
        description: "Our special recipe pizza",
        price: 2050,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop"
    },
    {
        id: 14,
        name: "Behari Kabab",
        category: "pizza",
        description: "Behari kabab pizza",
        price: 2050,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop"
    },
    {
        id: 15,
        name: "Fajita Sicilian",
        category: "pizza",
        description: "Sicilian style fajita pizza",
        price: 2050,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop"
    },
    {
        id: 16,
        name: "Afghani Tikka",
        category: "pizza",
        description: "Afghani tikka pizza",
        price: 2050,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop"
    },
    {
        id: 17,
        name: "Peri Peri Pizza",
        category: "pizza",
        description: "Spicy peri peri chicken pizza",
        price: 2050,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop"
    },
    {
        id: 18,
        name: "Malai Boti",
        category: "pizza",
        description: "Creamy malai boti pizza",
        price: 2050,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop"
    },
    // Pasta
    {
        id: 19,
        name: "Fettuccine Pasta",
        category: "pasta",
        description: "Classic fettuccine with creamy sauce",
        price: 800,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
    },
    {
        id: 20,
        name: "The Crust Special Pasta",
        category: "pasta",
        description: "Our special pasta recipe",
        price: 850,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
    },
    {
        id: 21,
        name: "Lasagne",
        category: "pasta",
        description: "Traditional lasagne with layers",
        price: 960,
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop"
    },
    // Burgers
    {
        id: 22,
        name: "Crust Crispy Burger",
        category: "burger",
        description: "Crispy chicken burger",
        price: 450,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"
    },
    {
        id: 23,
        name: "Mighty Thunder Burger",
        category: "burger",
        description: "Double patty thunder burger",
        price: 650,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop"
    },
    {
        id: 24,
        name: "Chicken Burgers",
        category: "burger",
        description: "Classic chicken burger",
        price: 350,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"
    },
    // Sides
    {
        id: 25,
        name: "Classic Platter",
        category: "sides",
        description: "Mixed platter with sides",
        price: 1150,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop"
    },
    {
        id: 26,
        name: "The Crust Special Platter",
        category: "sides",
        description: "Special platter with premium items",
        price: 1050,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop"
    },
    {
        id: 27,
        name: "The Crust Special Sandwich",
        category: "sides",
        description: "Special sandwich",
        price: 950,
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop"
    },
    {
        id: 28,
        name: "French Fries",
        category: "sides",
        description: "Crispy french fries",
        price: 250,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop"
    },
    {
        id: 29,
        name: "Chicken Poppers",
        category: "sides",
        description: "Crispy chicken poppers",
        price: 650,
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400&h=300&fit=crop"
    },
    {
        id: 30,
        name: "Chicken Nuggets",
        category: "sides",
        description: "Golden chicken nuggets",
        price: 500,
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400&h=300&fit=crop"
    },
    {
        id: 31,
        name: "Loaded Fries",
        category: "sides",
        description: "Fries loaded with toppings",
        price: 550,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop"
    },
    {
        id: 32,
        name: "Crispy Chicken Strips",
        category: "sides",
        description: "Crispy chicken strips",
        price: 750,
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400&h=300&fit=crop"
    },
    {
        id: 33,
        name: "Spin Rolls",
        category: "sides",
        description: "Spicy chicken rolls",
        price: 750,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop"
    },
    {
        id: 34,
        name: "Oven Baked Wings",
        category: "sides",
        description: "Oven baked chicken wings",
        price: 750,
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop"
    },
    {
        id: 35,
        name: "Chicken Cheese Stick",
        category: "sides",
        description: "Cheese stuffed chicken",
        price: 1150,
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400&h=300&fit=crop"
    },
    // Deals
    {
        id: 36,
        name: "Value Deal 1",
        category: "deals",
        description: "Pizza + Drink + Fries",
        price: 1500,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop"
    },
    {
        id: 37,
        name: "Value Deal 2",
        category: "deals",
        description: "2 Pizzas + 2 Drinks",
        price: 2200,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop"
    },
    {
        id: 38,
        name: "Lasagne Deal",
        category: "deals",
        description: "Lasagne + Drink + Garlic Bread",
        price: 1200,
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop"
    }
];

// Reviews Data
const reviews = [
    {
        id: 1,
        name: "Ahmed Khan",
        rating: 5,
        text: "Best pizza in Gujranwala! The crust is perfect and toppings are always fresh. Highly recommend the Crown Crust Pizza.",
        date: "December 2024"
    },
    {
        id: 2,
        name: "Sara Ali",
        rating: 5,
        text: "Amazing food and excellent service. The Chicken Tikka Pizza is my favorite. Will definitely order again!",
        date: "November 2024"
    },
    {
        id: 3,
        name: "Muhammad Usman",
        rating: 4,
        text: "Great taste and quick delivery. The prices are reasonable for the quality you get. Love their deals!",
        date: "November 2024"
    },
    {
        id: 4,
        name: "Fatima Zahra",
        rating: 5,
        text: "The Crust Special Pasta is absolutely delicious. My family loves ordering from here every weekend.",
        date: "October 2024"
    },
    {
        id: 5,
        name: "Hassan Raza",
        rating: 5,
        text: "Professional service and amazing food quality. The burgers are juicy and perfectly cooked. Best in town!",
        date: "October 2024"
    },
    {
        id: 6,
        name: "Ayesha Malik",
        rating: 4,
        text: "Very satisfied with the food and delivery. The Cheese Lover pizza is a must-try. Good value for money.",
        date: "September 2024"
    }
];

// News Data
const news = [
    {
        id: 1,
        title: "Rising Brand Of The Year",
        excerpt: "A Proud Moment for The Crust Pizza! From passion to perfection, our journey of flavor and dedication has been recognized with not one, but two prestigious honors! Rising Brand of the Year award celebrates our commitment to excellence.",
        date: "November 27, 2025",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop"
    }
];

// Cart functionality
let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderMenuItems('all');
    renderReviews();
    renderNews();
    setupMenuTabs();
    updateCartCount();
});

// Render menu items
function renderMenuItems(category) {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';
    
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    filteredItems.forEach(item => {
        const menuItemHTML = `
            <div class="col-md-6 col-lg-4">
                <div class="menu-item">
                    <span class="in-stock-badge">In Stock</span>
                    <div class="menu-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <h3 class="menu-item-title">${item.name}</h3>
                    <p class="menu-item-description">${item.description}</p>
                    <p class="menu-item-price">Rs. ${item.price}</p>
                    <div class="menu-item-actions">
                        <button class="btn btn-order" onclick="orderNow(${item.id})">
                            <i class="fas fa-shopping-bag"></i> Order Now
                        </button>
                        <button class="btn btn-add-cart" onclick="addToCart(${item.id})">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
        menuGrid.innerHTML += menuItemHTML;
    });
}

// Setup menu tabs
function setupMenuTabs() {
    const tabButtons = document.querySelectorAll('.menu-tabs .nav-link');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Render items for selected category
            const category = this.getAttribute('data-category');
            renderMenuItems(category);
        });
    });
}

// Render reviews
function renderReviews() {
    const reviewsGrid = document.getElementById('reviewsGrid');
    reviewsGrid.innerHTML = '';
    
    reviews.forEach(review => {
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        const reviewHTML = `
            <div class="col-md-6 col-lg-4">
                <div class="review-card">
                    <div class="review-stars">${stars}</div>
                    <p class="review-text">"${review.text}"</p>
                    <div class="review-author">${review.name}</div>
                    <div class="review-date">${review.date}</div>
                </div>
            </div>
        `;
        reviewsGrid.innerHTML += reviewHTML;
    });
}

// Render news
function renderNews() {
    const newsGrid = document.getElementById('newsGrid');
    newsGrid.innerHTML = '';
    
    news.forEach(item => {
        const newsHTML = `
            <div class="col-md-6 col-lg-4">
                <div class="news-card">
                    <div class="news-image">
                        <img src="${item.image}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover;">
                    </div>
                    <div class="news-content">
                        <h3 class="news-title">${item.title}</h3>
                        <p class="news-excerpt">${item.excerpt}</p>
                        <p class="news-date">${item.date}</p>
                    </div>
                </div>
            </div>
        `;
        newsGrid.innerHTML += newsHTML;
    });
}

// Add to cart
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (item) {
        const existingItem = cart.find(i => i.id === itemId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...item,
                quantity: 1
            });
        }
        updateCartCount();
        renderCart();
        showNotification(`${item.name} added to cart!`);
    }
}

// Order now (direct WhatsApp)
function orderNow(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (item) {
        const message = `Hi, I would like to order: ${item.name} - Rs. ${item.price}`;
        const whatsappUrl = `https://wa.me/923393770072?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Render cart
function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center text-muted">Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const cartItemHTML = `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h5>${item.name}</h5>
                        <p>Rs. ${item.price} x ${item.quantity}</p>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            cartItemsContainer.innerHTML += cartItemHTML;
        });
    }
    
    updateCartTotal();
}

// Remove from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartCount();
    renderCart();
}

// Update cart total
function updateCartTotal() {
    const cartTotal = document.getElementById('cartTotal');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `Rs. ${total}`;
}

// Toggle cart modal
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.toggle('active');
    renderCart();
}

// Checkout via WhatsApp
function checkoutWhatsApp() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    let message = 'Hi, I would like to place an order:\n\n';
    let total = 0;
    
    cart.forEach(item => {
        message += `${item.name} x ${item.quantity} - Rs. ${item.price * item.quantity}\n`;
        total += item.price * item.quantity;
    });
    
    message += `\nTotal: Rs. ${total}`;
    
    const whatsappUrl = `https://wa.me/923393770072?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Clear cart after checkout
    cart = [];
    updateCartCount();
    renderCart();
    toggleCart();
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#28A745' : '#DC3545'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1001;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Close cart when clicking outside
document.addEventListener('click', function(event) {
    const cartModal = document.getElementById('cartModal');
    const cartIcon = document.querySelector('.cart-icon');
    
    if (!cartModal.contains(event.target) && !cartIcon.contains(event.target)) {
        cartModal.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});
