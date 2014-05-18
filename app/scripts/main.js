'use strict';

$(document).ready(function(){
    var $menu     = $('#menu'),
        $menuLink = $('.menu-link');

    $menuLink.on('click', function(){
        $menuLink.toggleClass('active');
        $menu.toggleClass('active');
        return false;
    });
});