SmoothScroll({
    stepSize: 120,
    animationTime: 800, // [ms]
});
let navbar = document.querySelector('.main__menu-list').classList;
let active_class = 'fixed-nav';

/**
 * Слушаем событие прокрутки
 */
window.addEventListener('scroll', (e) => {
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
var btnContainer = document.getElementById('myBtnContainer');
var btns = btnContainer.getElementsByClassName('main__goods-btn');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
    });
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
// open modal by id
function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.classList.add('jw-modal-open');
}

// close currently open modal
function closeModal() {
    document.querySelector('.jw-modal.open').classList.remove('open');
    document.body.classList.remove('jw-modal-open');
}

window.addEventListener('load', function () {
    // close modals on background click
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('jw-modal')) {
            closeModal();
        }
    });
});
document
    .querySelector('.main__request-btn.main__request-btn--red')
    .addEventListener('click', (event) => {
        event.preventDefault();
        openModal('modal-1');
    });

if (window.innerWidth === 992) {
    document.querySelectorAll('.main__advantage-img').forEach((elem) => {
        elem.src = '../images/src/icons/tick-small.svg';
    });
}
