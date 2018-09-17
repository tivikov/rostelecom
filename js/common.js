$(function() {

	$(".humb").click(function(){
		$(".mobile-menu").slideToggle();
	})
	$('.slick-container').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		accessibility: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	})
});
