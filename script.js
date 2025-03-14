// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent scrolling while modal is open
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Form Submission Functions
function submitLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Here you would typically send this data to your server
    // For this example, we'll just show an alert
    alert(`Login attempt with: ${email}`);
    
    // Close the modal after submission
    closeModal('loginModal');
}

function submitRegistration() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }
    
    // Here you would typically send this data to your server
    // For this example, we'll just show an alert
    alert(`Registration for: ${name} (${email})`);
    
    // Close the modal after submission
    closeModal('registerModal');
}

function submitOrder() {
    const recipientName = document.getElementById('recipientName').value;
    const deliveryAddress = document.getElementById('deliveryAddress').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    
    // Here you would typically send this data to your server
    // For this example, we'll just show an alert
    alert(`Order placed for: ${recipientName}\nDelivery on: ${deliveryDate}`);
    
    // Close the modal after submission
    closeModal('orderModal');
}

// Submit contact form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send this data to your server
            // For this example, we'll just show an alert
            alert(`Message received from: ${name} (${email})`);
            
            // Clear the form
            contactForm.reset();
        });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get the email input, which is the first input in the form
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            // Here you would typically send this data to your server
            alert(`Subscribed to newsletter: ${email}`);
            
            // Clear the form
            newsletterForm.reset();
        });
    }
});