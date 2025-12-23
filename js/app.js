const form = document.querySelector('form');
const filmList = document.querySelector('ul');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs
    const name = document.getElementById('name').value;
    const genre = document.getElementById('genre').value;
    const note = parseInt(document.getElementById('note').value);

    // Vérification de la note
    if(note < 1 || note > 5 || isNaN(note)) {
        alert('La note doit être entre 1 et 5');
        return;
    }

    // Créer un élément li pour le film
    const li = document.createElement('li');
    li.textContent = `${name} (${genre}) - Note : ${note}/5`;

    // Ajouter à la liste
    filmList.appendChild(li);

    // Réinitialiser le formulaire
    form.reset();
});
