$(document).ready(function () {
    $('div.menu a').click(function(){
       $('div.menu li').removeClass('active');
       $(this).parent().addClass('active');
    })
 });


 