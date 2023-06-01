$(document).ready(function(){
    var firstpage = '#page1';
    $(firstpage).show();

    $('.home').on('click', function(){
        $('.page').hide();
        $('#page1').show();
    });
    $('.introduce').on('click', function(){
        $('.page').hide();
        $('#page2').show();
    });
    $('.project').on('click', function(){
        $('.page').hide();
        $('#page3').show();
    });

    $('.myimg').show();
    $('.myimg2').hide();

    $('.myimg').click(function(){
        $('.myimg').hide();
        $('.myimg2').show();
    });
    $('.myimg2').click(function(){
        $('.myimg').show();
        $('.myimg2').hide();
    });
    $('a').hover(function(){
        $(this).css('color','red');
    }, function(){
        $('.acolor').css('color','#F361DC');
    });

    $('.emailfont').hover(function(){
        $(this).css('color','red');
    }, function(){
        $(this).css('color','#A6A6A6')
    });
    $('.pdfcolor').hover(function(){
        $(this).css('color','black');
    }, function(){
        $(this).css('color','gray')
    });
    $('#panel3').hide();
        $('.2020').click(function(){
            $(this).next('#panel3').slideToggle();
        });
    $('#panel1').hide();
        $('.2021').click(function(){
            $(this).next('#panel1').slideToggle();
        });
    $('#panel2').hide();
        $('.2022').click(function(){
            $(this).next('#panel2').slideToggle();
        });

});
