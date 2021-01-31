const menuIcon = document.getElementsByClassName('menu__icon')[0],
      menuBbody = document.getElementsByClassName('menu__body')[0],
      headerLogo = document.getElementsByClassName('header-top__logo')[0]

menuIcon.addEventListener('click', () =>{
  menuIcon.classList.toggle("active");
  menuBbody.classList.toggle("active");
  headerLogo.classList.toggle("active");
});

$(document).ready(function() {
	$('.gallery__inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});

new WOW().init();
