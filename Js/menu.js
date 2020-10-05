$(document).ready(function(){
    var menu = $('header');
    var btn = $('.toggle-button');

    btn.click(function(){
        menu.toggleClass('toggle');
    });
});