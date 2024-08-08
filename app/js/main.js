SmoothScroll({
    stepSize: 120,
    animationTime: 800, // [ms]
});

/**
 * Слушаем событие прокрутки
 */
if (document.querySelector('.main__menu-list')) {
    window.addEventListener('scroll', (e) => {
        let navbar = document.querySelector('.main__menu-list').classList;
        let active_class = 'fixed-nav';
        if (pageYOffset > 250) navbar.add(active_class);
        else navbar.remove(active_class);
        var sections = [
            document.getElementById('main'),
            document.getElementById('goods'),
            document.getElementById('about'),
            document.getElementById('contacts'),
        ];
        var scroll = window.scrollY;

        sections.forEach(function (section) {
            var top = section.offsetTop - 120;
            var bottom = top + section.offsetHeight + 1200;
            var id = section.getAttribute('id');

            if (scroll > top && scroll < bottom) {
                var activeLinks = document.querySelectorAll(
                    '.main__menu-item--active'
                );
                activeLinks.forEach(function (link) {
                    link.classList.remove('main__menu-item--active');
                });

                var targetLink = document.querySelector(
                    '.main__menu-link[href="#' + id + '"]'
                );
                if (targetLink) {
                    targetLink
                        .closest('.main__menu-item')
                        .classList.add('main__menu-item--active');
                }
            }
        });
    });
}

if (document.querySelector('.main__menu')) {
    document
        .querySelector('.main__menu')
        .addEventListener('click', function (event) {
            if (event.target.classList.contains('main__menu-link')) {
                event.preventDefault();

                var id = event.target.getAttribute('href');
                var targetElement = document.querySelector(id);

                if (targetElement) {
                    var top = targetElement.offsetTop;

                    window.scrollTo({
                        top: top,
                        behavior: 'smooth',
                    });
                }
            }
        });
}

filterSelection('all');
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName('main__goods-card');
    if (c == 'all') c = '';
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], 'show');
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], 'show');
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += ' ' + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(' ');
}

// Add active class to the current control button (highlight it)
if (document.getElementById('myBtnContainer')) {
    var btnContainer = document.getElementById('myBtnContainer');
    var btns = btnContainer.getElementsByClassName('main__goods-btn');
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            var current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace(' active', '');
            this.className += ' active';
        });
    }
}

const popbi = document.querySelector('.main__about-pop');

function togglePop() {
    document.querySelectorAll('.main__about-link').forEach((e) => {
        e.addEventListener('click', () => {
            // console.log('clicked');
            e.querySelector('.main__about-pop').classList.toggle('show');
        });
    });
}
togglePop();
document.addEventListener('click', (event) => {
    document.querySelectorAll('.main__about-link').forEach((e) => {
        if (event.target == e) {
            e.addEventListener('click', () => {
                // console.log('clicked');
                e.querySelector('.main__about-pop').classList.toggle('show');
            });
        } else {
            e.querySelector('.main__about-pop').classList.remove('show');
        }
    });
});

const swiper = new Swiper('.swiper', {
    // loop: true,
    mousewheel: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
});

if (document.querySelector('.similar-swiper')) {
    const similar_swiper = new Swiper('.similar-swiper', {
        mousewheel: true,
        spaceBetween: 20,
        slidesPerView: 'auto',
    });
}

if (document.querySelector('.swiper-thumbnail')) {
    const similar_swiper = new Swiper('.swiper-thumbnail', {
        mousewheel: true,
        spaceBetween: 8,
        slidesPerView: 'auto',
    });
}
// open modal by id
function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.classList.add('jw-modal-open');
}

// close currently open modal
function closeModal() {
    if (document.querySelector('.jw-modal.open')) {
        document.querySelector('.jw-modal.open').classList.remove('open');
    }
    if (document.querySelector('.partner-pop.open')) {
        document.querySelector('.partner-pop.open').classList.remove('open');
    }
    if (document.querySelector('.callback-pop.open')) {
        document.querySelector('.callback-pop.open').classList.remove('open');
    }
    if (document.querySelector('.request-pop.open')) {
        document.querySelector('.request-pop.open').classList.remove('open');
    }
    document.body.classList.remove('jw-modal-open');
}

window.addEventListener('load', function () {
    // close modals on background click
    document.addEventListener('click', (event) => {
        if (
            event.target.classList.contains('jw-modal') ||
            event.target.classList.contains('partner-pop') ||
            event.target.classList.contains('callback-pop') ||
            event.target.classList.contains('request-pop')
        ) {
            closeModal();
        }
    });
});

document
    .querySelector('.header__partner')
    .addEventListener('click', (event) => {
        event.preventDefault();
        openModal('partner');
    });
document.querySelector('.header__phone').addEventListener('click', (event) => {
    event.preventDefault();
    openModal('callback');
});
document.querySelector('#call').addEventListener('click', (event) => {
    event.preventDefault();
    openModal('callback');
});
if (document.querySelector('.main__request-btn-mobile')) {
    document
        .querySelector('.main__request-btn-mobile')
        .addEventListener('click', (event) => {
            event.preventDefault();
            openModal('request');
        });
}
if (document.querySelector('.main__request-btn')) {
    document
        .querySelector('.main__request-btn')
        .addEventListener('click', (event) => {
            event.preventDefault();
            openModal('request');
        });
}

document.querySelector('.cookie__btn').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.cookie__wrapper').classList.add('hidden');
});
if (window.innerWidth <= 992 && document.querySelector('.main__contacts-map')) {
    document.querySelectorAll('.main__advantage-img').forEach((elem) => {
        elem.src = '../images/src/icons/tick-small.svg';
    });
    document.querySelector('.main__contacts-map').innerHTML =
        '<div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/org/mebelnaya_fabrika/229325602374/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Мебельная фабрика</a><a href="https://yandex.ru/maps/1/moscow-and-moscow-oblast/category/furniture_factory/184106634/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Мебельная фабрика в Москве и Московской области</a><iframe src="https://yandex.ru/map-widget/v1/?azimuth=0.0020453077171808547&ll=37.085203%2C56.155899&mode=poi&poi%5Bpoint%5D=37.084766%2C56.155929&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D229325602374&z=18.67" width="724" height="280" frameborder="1" allowfullscreen="true" style="position:relative; border: none;"></iframe></div>';
}

if (
    window.innerWidth <= 360 &&
    document.querySelector('.main__request-btn.main__request-btn--red')
) {
    document
        .querySelector('.main__request-btn.main__request-btn--red')
        .addEventListener('click', (event) => {
            event.preventDefault();
            openModal('request');
        });
    const swiperMobile = new Swiper('.swiper', {
        // loop: true,
        mousewheel: true,
        spaceBetween: 12,
        slidesPerView: 'auto',
    });
    document.querySelector('.main__contacts-map').innerHTML =
        '<div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/org/mebelnaya_fabrika/229325602374/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Мебельная фабрика</a><a href="https://yandex.ru/maps/1/moscow-and-moscow-oblast/category/furniture_factory/184106634/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Мебельная фабрика в Москве и Московской области</a><iframe src="https://yandex.ru/map-widget/v1/?ll=37.085197%2C56.157014&mode=poi&poi%5Bpoint%5D=37.084766%2C56.155929&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D229325602374&z=17.4" width="312" height="190" frameborder="1" allowfullscreen="true" style="position:relative; border: none; border-radius: 20px;"></iframe></div>';
} else {
    if (document.querySelector('.main__request-btn.main__request-btn--red')) {
        document
            .querySelector('.main__request-btn.main__request-btn--red')
            .addEventListener('click', (event) => {
                event.preventDefault();
                openModal('modal-1');
            });
    }
}

let thumbnails = document.querySelectorAll('.thumbnail');
let mainImage = document.getElementById('main-image');
thumbnails[0].style.border = '1px solid var(--primary-blue-5o)';
thumbnails.forEach((img) => img.addEventListener('click', imgClick));

function imgClick(e) {
    thumbnails.forEach((img) => (img.style.border = 'none'));
    mainImage.src = e.target.src;
    mainImage.classList.add('fade-in');
    setTimeout(() => mainImage.classList.remove('fade-in'), 500);
    e.target.style.border = '1px solid var(--primary-blue-5o)';
}

if (
    window.innerWidth <= 992 &&
    window.location.href.includes('product-chair')
) {
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.footer').style.paddingBottom = '0';
    document.querySelector('.footer').style.minHeight = '120px';
}
