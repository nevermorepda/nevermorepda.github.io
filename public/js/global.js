$( document ).ready(function() {
    $('.mobile .fa-bars').click(function () {
        let show = $(this).attr('show')
        if (show == 0) {
            $('.boxMenuMobile').addClass('show')
            $(this).attr('show',1)
        } else {
            $('.boxMenuMobile').removeClass('show')
            $(this).attr('show',0)
        }
    })
});