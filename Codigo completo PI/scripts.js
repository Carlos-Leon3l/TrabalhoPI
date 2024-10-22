function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right > 0
    );
}

function handleScroll() {
    console.log('Scroll event triggered');
    const pais = document.querySelector('.pais');
    const textos = document.querySelector('.textos');

    if (pais && textos) {
        console.log('Elements found');
        console.log('Image position:', pais.getBoundingClientRect());
        if (isElementInViewport(pais)) {
            console.log('Image is in viewport, adding show class');
            textos.classList.add('show');
        } else {
            console.log('Image is not in viewport, removing show class');
            textos.classList.remove('show');
        }
    } else {
        console.log('Elements not found');
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded');
    handleScroll();
});

console.log('Script loaded');