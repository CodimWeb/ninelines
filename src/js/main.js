import './vendor';

$(document).ready(function() {
    let userDataField = $('.user-data__field');
    $(userDataField).focusin(function(){
        $(this).siblings('.user-data__label').addClass('is-active');
    });

    $(userDataField).focusout(function(){
        if($(this).val() == '') {
            $(this).siblings('.user-data__label').removeClass('is-active');
        }
        console.log($(this).siblings('.user-data__label'))
    });

    $.Tween.propHooks.number = {
        get: function ( tween ){
            var num = tween.elem.innerHTML.replace(/^[^\d-]+/, '');
            return  parseInt(num) || 0;
        },
        
        set: function( tween ) {
            var opts = tween.options;
            tween.elem.innerHTML = (opts.prefix || '')
            + tween.now.toFixed(opts.fixed || 0)
            + (opts.postfix || '');
        }
    };
    $('.js-skills__rate')
    .delay(0)
    .animate({ number: 955 }, {
        duration: 3000,
    });
});