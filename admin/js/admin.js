$( document ).ready(function() {
    if(screen.width <= 567){
        $('.navMenu').addClass('navMenuMobile')
    }

    $('.menu > .item').click(function() {
        const act = $(this).attr('status')

        if(act == 0) {
            $(this).addClass('active')
            $(this).attr('status',1)
        } else {
            $(this).removeClass('active')
            $(this).attr('status',0)
        }
    })

    $('.fa-bars-m').click(function () {
        let show = $(this).attr('show')
        if (show == 0) {
            $('.navMenuMobile').addClass('show')
            $(this).attr('show',1)
        } else {
            $('.navMenuMobile').removeClass('show')
            $(this).attr('show',0)
        }
    })

    $('.showAssign').click(function() {
        $('.popupAssign').show()
    })
    $('.showRefund').click(function() {
        $('.popupRefund').show()
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

    $('.changeStatus .item').click(function() {
        $(this).parents('.boxChangeStatus').find('.orderStatus').html($(this).html())
    })
});

