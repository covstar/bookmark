$(document).ready(function(){

    // menu icon functions 
    $('.hamburger__icon').click(function(){
        $(this).hide();
        $('.close__icon, .mobile__nav').show();
        $('.mobile__nav__logo > img').addClass('mobile__inverted');
    })

    $('.close__icon').click(function(){
        $(this).hide();
        $('.close__icon, .mobile__nav').hide();
        $('.hamburger__icon').show();
        $('.mobile__nav__logo > img').removeClass('mobile__inverted');
    })


    // tabs section function 
    $('.tab1__menu').click(function(){
        $(this).addClass('active');
        $('.tab2__menu, .tab3__menu').removeClass('active');
        $('.tab1').show();
        $('.tab2, .tab3').hide();
    })

    $('.tab2__menu').click(function(){
        $(this).addClass('active');
        $('.tab1__menu, .tab3__menu').removeClass('active');
        $('.tab2').show();
        $('.tab1, .tab3').hide();
    })

    $('.tab3__menu').click(function(){
        $(this).addClass('active');
        $('.tab1__menu, .tab2__menu').removeClass('active');
        $('.tab3').show();
        $('.tab2, .tab1').hide();
    })

    // FAQ section 
    $('.arrow1, .faq__one').click(function(){
        $('.arrow1').toggleClass('fa-angle-up');
        $('.answer1').toggle();
        $('.answer2, .answer3, .answer4').hide();
        $('.arrow2, .arrow3, .arrow4').addClass('fa-angle-down');
        $('.arrow2, .arrow3, .arrow4').removeClass('fa-angle-up');
    })

    $('.arrow2, .faq__two').click(function(){
        $('.arrow2').toggleClass('fa-angle-up');
        $('.answer2').toggle();
        $('.answer1, .answer3, .answer4').hide();
        $('.arrow1, .arrow3, .arrow4').addClass('fa-angle-down');
        $('.arrow1, .arrow3, .arrow4').removeClass('fa-angle-up');
    })

    $('.arrow3, .faq__three').click(function(){
        $('.arrow3').toggleClass('fa-angle-up');
        $('.answer3').toggle();
        $('.answer2, .answer1, .answer4').hide();
        $('.arrow2, .arrow1, .arrow4').addClass('fa-angle-down');
        $('.arrow2, .arrow1, .arrow4').removeClass('fa-angle-up');
    })

    $('.arrow4, .faq__four').click(function(){
        $('.arrow4').toggleClass('fa-angle-up');
        $('.answer4').toggle();
        $('.answer2, .answer3, .answer1').hide();
        $('.arrow2, .arrow3, .arrow1').addClass('fa-angle-down');
        $('.arrow2, .arrow3, .arrow1').removeClass('fa-angle-up');
    })

    // email validation 
    $('#email-form').submit(function(event) {
        event.preventDefault();
        var email = $('#email-input').val();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $('#email-input').css('border', '4px solid hsl(0, 94%, 66%)');
            $('#email-error, .input > img').show()
            $('#email-error').css('backgroundColor', 'hsl(0, 94%, 66%)');
          $('#email-error').text('Whoops, make sure it\'s an email');
        } else {
          // email is valid, do something else
          $('#email-form').unbind('submit').submit();
        }
      });
});