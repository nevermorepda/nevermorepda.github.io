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

    $('.showMenu').click(function() {
        if($(this).attr('status') == 'off') {
            $(this).find('i').addClass('fa-chevron-up')
            $(this).find('i').removeClass('fa-chevron-down')
            $(this).attr('status','on')
        } else {
            $(this).find('i').addClass('fa-chevron-down')
            $(this).find('i').removeClass('fa-chevron-up')
            $(this).attr('status','off')
        }
        $(this).parents('li').find('.subMenu').toggle('fast')
    })

    $('.boxTitle .tab').click(function() {
        $('.boxTitle .tab').removeClass('active')
        $(this).addClass('active')
        if($(this).attr('tlt') == 'signin') {
            $('.signinTab').css('display','block')
            $('.signupTab').css('display','none')
        } else {
            $('.signinTab').css('display','none')
            $('.signupTab').css('display','block')
        }
    })
    $('.closeLoginPage').click(function() {
        $('.signInPage').hide()
    })
    $('.showLoginPage').click(function() {
        $('.signInPage').show()
    })
    $('.showPopup').click(function() {
        $('.popup').show()
    })
    $('.closePopup').click(function() {
        $('.popup').hide()
    })
    $('.orderBox .edit').click(function() {
        $(this).parents('.updating').find('input').removeAttr('disabled')
        $(this).parents('.updating').find('select').removeAttr('disabled')
        $(this).parents('.updating').find('.btnBoxEdit').show()
    })
    $('.orderBox .btnBoxEdit .btnCancel').click(function() {
        $(this).parents('.updating').find('input').attr('disabled','true')
        $(this).parents('.updating').find('select').attr('disabled','true')
        $(this).parents('.btnBoxEdit').hide()
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

