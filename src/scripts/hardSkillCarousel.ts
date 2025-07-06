document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-hard-skills') as HTMLElement;
    const list = carousel.querySelector('.carousel-list') as HTMLElement;
    const items = list.querySelectorAll('.carousel-item') as NodeListOf<HTMLElement>;
    const prevBtn = carousel.querySelector('.carousel-prev') as HTMLButtonElement;
    const nextBtn = carousel.querySelector('.carousel-next') as HTMLButtonElement;
    const indicators = carousel.querySelectorAll('.carousel-indicator') as NodeListOf<HTMLElement>;
    let current = 0;

    function updateCarousel() {
        list.style.transform = `translateX(-${current * 100}%)`;
        for (let i = 0; i < indicators.length; i++) {
            indicators[i].classList.toggle('active', i === current);
        }
    }

    prevBtn.addEventListener('click', () => {
        current = (current - 1 + items.length) % items.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        current = (current + 1) % items.length;
        updateCarousel();
    });

    updateCarousel();
});