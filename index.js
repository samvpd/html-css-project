console.log('SUKKKA')

const burgerEl = document.getElementById('burger_menu');

function toggleBurgerMenu() {
    if (burgerEl.classList.contains('hidden')) {
        burgerEl.classList.remove('hidden');
    } else {
        burgerEl.classList.add('hidden');
    }
}