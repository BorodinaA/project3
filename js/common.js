if (window.matchMedia("(max-width: 716px)").matches) {
	$(document).ready(function(){
		$('.product__list').slick({
			responsive: [
				{
					breakpoint: 716,
					dots: false,
					infinite: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true
				}
			]
		});
	});
}