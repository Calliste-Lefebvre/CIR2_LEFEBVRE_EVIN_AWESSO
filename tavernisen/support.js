// Support.js - Script pour la page Support de TAV'ISEN

// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer le formulaire de newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    const confirmationMessage = document.getElementById('confirmation-message');

    // Gérer la soumission du formulaire
    newsletterForm.addEventListener('submit', function(event) {
        // Empêcher le rechargement de la page
        event.preventDefault();

        // Récupérer les valeurs du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const interests = document.getElementById('interests').value;

        // Valider l'email avec une expression régulière simple
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }

        // Ici, normalement, on enverrait les données à un serveur
        // Pour cet exemple, on simule juste un envoi réussi
        
        // Afficher un message de confirmation
        confirmationMessage.style.display = 'block';
        
        // Réinitialiser le formulaire après 3 secondes
        setTimeout(function() {
            newsletterForm.reset();
            confirmationMessage.style.display = 'none';
        }, 3000);

        
        // 1. On écoute l'événement 'DOMContentLoaded' pour s'assurer que le HTML est chargé
        // 2. On récupère les éléments du formulaire avec getElementById
        // 3. On ajoute un écouteur d'événement pour le submit du formulaire
        // 4. On utilise event.preventDefault() pour empêcher le comportement par défaut
        // 5. On valide les données (ici juste l'email avec une regex simple)
        // 6. En situation réelle, on enverrait les données avec fetch() à un serveur
        // 7. On affiche un message de confirmation et on réinitialise le formulaire
    });

    // Animation simple pour les membres de l'équipe
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