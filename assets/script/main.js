var selector = document.querySelectorAll(".phone");
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);
$(".completed__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
});

$(".lizing-partners__list").slick({
    responsive: [{
            breakpoint: 2048,
            settings: "unslick",
        },
        {
            breakpoint: 660,
            settings: {
                slidesToShow: 3,
                arrows: false,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 451,
            settings: {
                slidesToShow: 2,
                arrows: false,
                slidesToScroll: 2,
            },
        },
    ],
});

let animItems = document.querySelectorAll("._anim-items");
let animStart = document.querySelectorAll("._anim-banners");

function bannerANimate() {
    for (let index = 0; index < animStart.length; index++) {
        const animStartItem = animStart[index];
        animStartItem.classList.add("_active");
    }
}

window.addEventListener("scroll", animOScroll);

function animOScroll() {
    for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight - 50 / animStart;
        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
            scrollY > animItemOffset - animItemPoint &&
            scrollY < animItemOffset + animItemHeight
        ) {
            animItem.classList.add("_active");
        }
    }
}

function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
setTimeout(() => {
    animOScroll();
}, 300);

document.addEventListener("DOMContentLoaded", () => {
    let burger = document.querySelector(".header__burger");
    let menu = document.querySelector(".header__menu-burger");
    let itemBurgerMenu = document.querySelectorAll(".burger__item");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        document.body.classList.toggle("active");
        document.body.style.paddingRight = `${scroll}`;
    });
    itemBurgerMenu.forEach((item) => {
        item.addEventListener("click", () => {
            burger.classList.toggle("active");
            menu.classList.toggle("active");
            document.body.classList.toggle("active");
            document.body.style.marginRight = ``;
        });
    });

    const links = document.querySelectorAll(".header__item, .sub-menu__item");
    for (let link of links) {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const sectionId = link.getAttribute("href");
            document.querySelector(sectionId).scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    }

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 150 ||
            document.documentElement.scrollTop > 150
        ) {
            document.querySelector(".header").classList.add("scroll");
        } else {
            document.querySelector(".header").classList.remove("scroll");
        }
    }

    let startPopup = document.querySelectorAll(".startPop");
    let popup = document.querySelector(".popup");
    let popupClose = document.querySelector(".popup__close");
    let scroll = calcScroll();

    startPopup.forEach((item) => {
        item.addEventListener("click", () => {
            popup.classList.add("open");
            document.body.classList.add("active");
            document.body.style.paddingRight = `${scroll}`;
        });
    });

    popupClose.addEventListener("click", () => {
        document.body.style.paddingRight = "";
        popup.classList.remove("open");
        document.body.classList.remove("active");
    });

    function calcScroll() {
        let div = document.createElement("div");
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.overflowY = "scroll";
        div.style.visibility = "hidden";

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth + "px";
        div.remove();
        return scrollWidth;
    }




    // Заказчик

    let form = document.querySelectorAll(".form");
    form.forEach((item) => {
        item.addEventListener("submit", (e) => {
             e.preventDefault();
            formSend()
        })
    })




});