$(document).ready(function () {
    let tabsItem = $('.burger-menu__link');

    tabsItem.on('click', function (event) {    
        $('.burger-menu__link-active').toggleClass('burger-menu__link-active');
        $(this).toggleClass('burger-menu__link-active');
    });

// Плавный переход по якорным ссылкам

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    }); 

// modal

    var button = document.getElementById('open');
    var close = document.getElementById('close');
    var modal = document.getElementById('modal');

    button.addEventListener('click', function(event) {
    modal.style.display = 'block';
    });

    close.addEventListener('click', function(event) {
    modal.style.display = 'none';
    });


// scroll-to-top

    const scrollBtn = $('.scroll-to-top-btn');

    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            scrollBtn.fadeIn();
        } else {
            scrollBtn.fadeOut();
        }
    });

    scrollBtn.click(function(){
        $('html, body').animate({ scrollTop: 0 }, 360);
        return false;
        });
    


// burger-menu

    function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');
    
    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu() {
        menu.toggleClass('burger-menu_active');
        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'visible');
        } else {
            $('body').css('overflow', 'visible');
            }
        }
    }
    burgerMenu ('.burger-menu');

    // owl-carousel

    $('.owl-carousel').owlCarousel({
        nav:true,
        items:1        
    });
});