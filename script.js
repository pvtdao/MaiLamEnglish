// ===================================Script Header===================================
window.addEventListener("scroll", ()=>{
    var header = document.querySelector("#header");
    header.classList.toggle('sticky', window.scrollY > 0)

    var app = document.querySelector(`.app-store`);
    app.classList.toggle('disable-app', window.scrollY > 0)

});

// $(document).ready(()=>{
//     $(document).on('click', '.menu__item', function(){
//         $(this).addClass('active').siblings().removeClass('active')
//     })
// })

function toggleMenu(){
    const buttonMenu = document.querySelector(`#bugger`)
    const menuToggle = document.querySelector(`#header_nav`)
    const menuItem = document.querySelector(`.menu__item`);
    menuToggle.classList.toggle('nav-active')
    buttonMenu.classList.toggle('nav-active')
    menuItem.classList.toggle('nav-active')
}



$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
        console.log(i);
            if ($(this).position().top <= scrollDistance) {
                console.log(`yes`);
                    $('.header_nav li.active').removeClass('active');
                    $('.header_nav li').eq(i).addClass('active');
            }
    });
}).scroll();
// =========================================================================================================