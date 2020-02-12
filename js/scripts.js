$(document).ready(function () {


  $(".search-icon").click(function () {
    $(".search-box__wrap").fadeToggle("active");
    $(this).closest("body").toggleClass("active");
    $("input[type='search']").focus();
  });

  $('.main__slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		appendArrows:$('.main__arrows .container'),
		// autoplay:true,
		// autoplaySpeed:800,
		speed:1000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
  $('.offer__slide').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,
		appendArrows:$('.offer__arrows'),
		// autoplay:true,
		// autoplaySpeed:800,
		speed:1000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});

		//CHECK
		$.each($('.check'), function(index, val) {
			if($(this).find('input').prop('checked')==true){
				$(this).addClass('active');
			}
		});
		$('body').off('click','.check',function(event){});
		$('body').on('click','.check',function(event){
			if(!$(this).hasClass('disable')){
					var target = $(event.target);
				if (!target.is("a")){
						$(this).toggleClass('active');
					if($(this).hasClass('active')){
						$(this).find('input').prop('checked', true);
					}else{
						$(this).find('input').prop('checked', false);
					}
				}
			}
		});

	// up scroll--------------
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) { //crollTop-1000px
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 700); //speed
	});

  
});