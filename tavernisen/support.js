// Support.js - Script pour la page Support de TAV'ISEN

document.addEventListener('DOMContentLoaded', function() {
    
    const newsletterForm = document.getElementById('newsletterForm');
    const confirmationMessage = document.getElementById('confirmation-message');

    newsletterForm.addEventListener('submit', function(event) {
        
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const interests = document.getElementById('interests').value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }

        confirmationMessage.style.display = 'block';

        setTimeout(function() {
            newsletterForm.reset();
            confirmationMessage.style.display = 'none';
        }, 3000);
    });

    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });

        member.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

});
