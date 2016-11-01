/* :: PARALLAX SHIFT :: */
/*SPEED CONTROL*/
var bg = -.1;
var mg = -.35;
var fg = -.75;
/*grab the scroll location*/
jQuery(window).scroll(function(){
	var scrollSpot = jQuery(document).scrollTop();
	/*create distance based off speed and location*/
	var bgOffset = scrollSpot*bg;
	var mgOffset = scrollSpot*mg;
	var fgOffset = scrollSpot*fg;
	/*apply distance to top margin*/
	jQuery('.background').animate({'marginTop': bgOffset}, 5, 'swing');
	jQuery('.midground').animate({'marginTop': mgOffset}, 15, 'swing');
	jQuery('.foreground').animate({'marginTop': fgOffset}, 25, 'swing');
});

