function toggleMenu() {
    const burger = document.getElementById('burger');
    burger.classList.toggle('is-active');
    const overlay = document.getElementById('overlay');
    overlay.classList.toggle('show');
    const nav = document.getElementById('menu');
    menu.classList.toggle('is-open');
}