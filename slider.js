function slider({container, slide, nextArrow, prevArrow, wrapper, field}) {
    // Slider


    const slides = document.querySelectorAll(slide),
        leftBtn = document.querySelector(prevArrow),
        rightBtn = document.querySelector(nextArrow),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width,
        slider = document.querySelector(container);
    let slideIndex = 1;
    let offset = 0;


    slidesField.style.width = 100 * slides.length + '%'; // Делаем размер в процентах в количестве слайдах * 100%

    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden'; // Скрытие блоков за пределами wrapper

    slides.forEach(slide => {
        slide.style.width = width;
    });

    function digitOnly(str) {
        return +str.replace(/\D/g, '');
    }

    rightBtn.addEventListener('click', () => {
        if (offset == digitOnly(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += digitOnly(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = 1;
    });
    leftBtn.addEventListener('click', () => {
        if (offset == 0) {
            offset = digitOnly(width) * (slides.length - 1);
        } else {
            offset -= digitOnly(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = 1;
    });
    slider.style.position = 'relative';
    const indicators = document.createElement('ol'),
        dots = [];
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');

        if (i == 0) {
            dot.style.opacity = 1;
        }

        indicators.append(dot);
        dots.push(dot);
    }
}

export default slider;
