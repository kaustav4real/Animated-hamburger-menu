$('.menu').on('click',()=>{
    $('.menu_bar_one').toggleClass('menu_1')
    $('.menu_bar_two').toggleClass('menu_2')
    $('.menu_bar_three').toggleClass('menu_3')
    $('.menu_items').slideToggle('menu_items_display')
});