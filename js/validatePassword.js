function validatePassword() {
    // Récupérer le mot de passe entré par l'utilisateur
    var password = prompt('Veuillez entrer le mot de passe :');

    // Hasher le mot de passe avec SHA256
    var hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);

    // Comparer le mot de passe hashé avec le hash du mot de passe attendu
    if (hashedPassword === 'd74ff0ee8da3b9806b18c877dbf29bbde50b5bd8e4dad7a3a725000feb82e8f1') {
        // Si le mot de passe est correct, afficher le contenu
        document.body.style.visibility = 'visible';
    } else {
        // Si le mot de passe est incorrect, afficher un message d'erreur
        alert('Mot de passe incorrect. Accès refusé.');
        // Rediriger vers une autre page
        window.location.href = 'index.html';
    }
}