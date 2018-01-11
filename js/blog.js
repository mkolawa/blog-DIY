$(document).ready(function()/*search*/
{
  $('#search').click(function(){
  $('#input').toggle();   
  });
  $('#search_mobile').click(function(){
  $('#input_mobile').toggle();   
  });
  });

$(window).scroll(function()
		{
			if($(this).scrollTop()<280){ $('ol.activ').removeClass('activ');
            $('.mmobile span').removeClass('shadow');}
		}
		);

$(document).ready(function(){ /**************categories mobile*/
  $('.menumobile').click(function(){
      if($('ol').hasClass('activ')){
          $('ol').removeClass('activ');
      $('.mmobile span').removeClass('shadow'); }
      else {$('ol').addClass('activ');
           $('.mmobile span').addClass('shadow');}
  });
  });

$(document).ready(function(){
    $('ol.activ ').click(function(){
        $(this).toggle();
    });
});

 $(window).scroll(function()
		{
			if($(this).scrollTop()>300) 
            $('.menu_sticky').fadeIn();
			else{ $('.menu_sticky').fadeOut(); }
		});

$(document).ready(
    function() /*slider strzałki*/
{
  $('#prev').mouseover(function(){
  $('#prev-arrow').addClass('opacity');
  });
  $('#prev').mouseout(function(){
  $('#prev-arrow').removeClass('opacity');
  });
  $('#next').mouseover(function(){
  $('#next-arrow').addClass('opacity');
  });
  $('#next').mouseout(function(){
  $('#next-arrow').removeClass('opacity');
  });
    });

$(document).ready(
    function(){
        $('.arrows').click(
            function(){
                $(this).addClass('border');
      $('.arrows').not(this).removeClass('border');
            })
    });

$(document).ready( /*_______lista popular_______*/
    function(){
        $('.stripe').click(
            function(){
                $(this).addClass('active'); 
                $('.stripe').not(this).removeClass('active');
            })
    });
$(document).ready(
    function(){
       if($(window).width()<=823){
    $('.stripe').click(function(){
                $('.stripe').not(this).fadeOut();
                $('.stripe').show();
                $('.wtext').toggle('visible');
                $('.more_horizontal').toggle('hide');
            })
     } })

$(document).ready(
    function() {/*_______popular text_______*/
    $('.note').hide();
    $('#visible').show();
    $('.stripe').click(
        function() {
    $('.note').hide();
    $('.note[data-link=' + $(this).data('link') + ']').fadeIn (500);
    });
  });

$(function(){ /*_______zmiana img src_______*/
        $('.stripe').on('click',function(e){
            e.preventDefault();
            var imgSRC = $(this).data('src');
            $('#list').html('<img src="'+imgSRC+'" alt="" />').fadeIn(1000);
        });
    });

   $(window).scroll(function() /*_______scrollup_______*/
		{
			if($(this).scrollTop()>300) $('.scrollup').fadeIn();
			else $('.scrollup').fadeOut();	
		});  
     $(function(){   
    $('.scrollup').click(function() { 
        $.scrollTo($('body'), 1000); 
    });
});

 $(document).ready(function() {
    $("#slider").lightSlider({ /*_______archive_______*/
        item: 12,
        autoWidth: true,
        slideMove:1, 
        slideMargin:15,
        easing: 'linear',
        speed: 2000,
        cssEasing: 'ease',
        pager: false,
        autoWidth: true,
        item: 12,
        galleryMargin: 40,
    }); 
  });

$(document).ready(function(){
    $('.butterfly span').click(function(){
    $('.haiku').fadeIn(500);    
    $('.haiku').fadeOut(5500);     
    });
});
















