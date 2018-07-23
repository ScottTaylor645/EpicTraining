// Click event used to execute my javascript function that enables my Hamburger menu when viewed in mobile
$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('ul').toggleClass('hidden');
    })
})