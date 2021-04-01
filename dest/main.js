const btnTop = document.querySelector('#top');
btnTop.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// Hamburger menu
const navBtn = document.querySelector('.ham-menu');
const nav = document.querySelector('.menu-mobile');
navBtn.addEventListener('click', function() {
    nav.classList.toggle('active');
    navBtn.classList.toggle('active');
})

$(function() {
    $('.project__list .project__item:lt(6)').show();
    $('#btn-less').hide();
    $('#btn-more').hide();
    let items = 12;
    let shown = 6;
    $('#btn-show-more').click(function() {
        $('#btn-show-more').hide();
        shown = $('.project__list .project__item:visible').length + 3;
        if (shown < items) {
            $('.project__list .project__item:lt('+shown+')').show(300);
            $('#btn-more').show();
            $('#btn-more').click(function() {
                shown = $('.project__list .project__item:visible').length + 3;
                $('.project__list .project__item:lt('+shown+')').show(300);
                $('#btn-more').hide();
                $('#btn-less').show();
            })
        }
    })
    $('#btn-less').click(function() {
        $('.project__list .project__item').not(':lt(6)').hide(300);
        $('#btn-more').show();
        $('#btn-less').hide();
    });
})

//cafeBox Slider
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
const slides = document.querySelectorAll('.gallery-w');
let index = 0;
prevBtn.addEventListener('click', function() {
    prevSlide();
})
nextBtn.addEventListener('click', function() {
    nextSlide();
})
function prevSlide() {
    if (index <= 0) {
        index = slides.length - 1;
    }
    else {
        index--;
    }
    changeSlide();
}
function nextSlide() {
    if (index >= slides.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    changeSlide();
}
function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}

//studio details slider
const prev = document.querySelector('.btn-prev');
const next = document.querySelector('.btn-next');
const slide = document.querySelectorAll('.studio__item');
let category = 0;
prev.addEventListener('click', function() {
    previousToSlide();
})
next.addEventListener('click', function() {
    nextToSlide();
})
function previousToSlide() {
    if (category <= 0) {
        category = slide.length - 1;
    }
    else {
        category--;
    }
    changeToSlide();
}
function nextToSlide() {
    if (category >= slide.length - 1) {
        category = 0;
    }
    else {
        category++;
    }
    changeToSlide();
}
function changeToSlide() {
    for (let j = 0; j < slide.length; j++) {
        slide[j].classList.remove('active');
    }
    slide[category].classList.add('active');
}


