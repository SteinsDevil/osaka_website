const config = {
    type: 'carousel',
    perView: 4,
    breakpoints:  {
        900: {
            perView: 2
        }
    }
};
new Glide('.glide', config).mount();


$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
}); 