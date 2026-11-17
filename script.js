// Плавное появление элементов при прокрутке
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
});

// Создание падающих лепестков
function createPetal() {
    const petal = document.createElement('div');

    petal.classList.add('petal');

    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (6 + Math.random() * 7) + 's';
    petal.style.opacity = 0.3 + Math.random() * 0.5;
    petal.style.width = (8 + Math.random() * 10) + 'px';
    petal.style.height = (12 + Math.random() * 12) + 'px';

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 14000);
}

setInterval(createPetal, 900);

// Кнопка музыки — пока подготовлена для подключения аудио
const musicButton = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');

if (musicButton && backgroundMusic) {
    musicButton.addEventListener('click', () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicButton.textContent = '♫ Пауза';
        } else {
            backgroundMusic.pause();
            musicButton.textContent = '♫ Музыка';
        }
    });
}
/* Открытие любовного письма */
const openLetterButton = document.getElementById("openLetter");
const letterCard = document.getElementById("letterCard");

if (openLetterButton && letterCard) {
    openLetterButton.addEventListener("click", () => {
        openLetterButton.classList.add("hidden");
        letterCard.classList.add("open");

        setTimeout(() => {
            letterCard.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 300);
    });
}