document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Handle the contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // In a real website, you would send this data to a server
            console.log('Form submitted with:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
            
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}); 