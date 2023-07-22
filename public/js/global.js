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
    $('.listToggle h6').click(function() {
        if($(this).attr('status') == 'off') {
            $(this).find('i').addClass('fa-chevron-up')
            $(this).find('i').removeClass('fa-chevron-down')
            $(this).attr('status','on')
        } else {
            $(this).find('i').addClass('fa-chevron-down')
            $(this).find('i').removeClass('fa-chevron-up')
            $(this).attr('status','off')
        }
        $(this).parents('li').find('p').toggle('fast')
    })
});

$(document).on('click','.videoBoxPC .fa-play', function() {
    $(this).removeClass('fa-play')
    $(this).addClass('fa-pause')
    document.getElementById('videoPC').play();
})
$(document).on('click','.videoBoxPC .fa-pause', function() {
    $(this).removeClass('fa-pause')
    $(this).addClass('fa-play')
    document.getElementById('videoPC').pause();
})

$(document).on('click','.bannerMobile .fa-play', function() {
    $(this).removeClass('fa-play')
    $(this).addClass('fa-pause')
    document.getElementById('videoMobile').play();
})
    $(document).on('click','.bannerMobile .fa-pause', function() {
    $(this).removeClass('fa-pause')
    $(this).addClass('fa-play')
    document.getElementById('videoMobile').pause();
})

