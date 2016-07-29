jQuery( document ).ready(function() {
   $('.dropdown').click(function(){
	   $('.main-shop .dropdown-menu').slideToggle();
   });
});


jQuery( document ).ready(function() {
   $('.search').click(function(){
	   $('.header-contact .main').slideToggle();
   });
});

jQuery( document ).ready(function() {
   $('.fa-search').click(function(){
	   $('.header-contact .dummy-text').slideToggle();
   });
});

jQuery( document ).ready(function() {
   $('.images').click(function(){
	   $(this).animate({
            height: '150px'
            
        });
   });
});