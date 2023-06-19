$('#actionNav').click(function(e) {
    e.stopPropagation();
    $('.navigation').toggleClass('hideNav');
});

$(document).click(function() {
    if ($('.navigation').hasClass('hideNav')) {
        $('.navigation').removeClass('hideNav');
        $('#actionNav').prop('checked', false);
    }
});