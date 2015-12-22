$(document).ready(function() {
	/* =======================================
	 * WOW
	 * =======================================
	 */
	wow = new WOW({
		mobile : false,
		offset : 200,
	})
	wow.init();
	/* =======================================
	 * Initiate Owl Carousel
	 * =======================================
	 */
	$( '.testimonial-items' ).owlCarousel({
			singleItem : true,
			autoHeight : true,
	});


	/* =======================================
	 * Smooth Scroll
	 * =======================================
	 */

	$('a[href^="#"]').on('click', function(e) {
	    e.preventDefault();

	    var headerHeight = $('.header-section').height();

		var $a = $( this ),
		    $target = $( $a.attr( 'href' ) );

		if ( $target.length < 1 ) return;

		$( 'html, body' ).animate({ scrollTop: ($target.offset().top - headerHeight) }, 1000 );
	});
});
