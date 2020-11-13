$(document).ready(function(){

	$("#nav li a").unbind("click").bind("click", doScroll);
	init();
	
	function init() {
		$(".teamMember, .service").css("display", "none");
		$(".project-1, .project-2, .project-3").css("display", "none"); 
	}
	
	$( window ).scroll(function() {
		  var scrollPostion = $(this).scrollTop();
		  console.log(scrollPostion);
		  if(scrollPostion >= 200) {
			  $(".teamMember").css("display", "block");
			  $(".teamMember").addClass('animated slideInUp');
		  }
		  if(scrollPostion >= 1000) {
			  $(".service").css("display", "block");
			  $(".service").addClass('animated slideInUp');
		  }
		  if(scrollPostion >= 1900) {
			  $(".project-1, .project-2, .project-3").css("display", "block");
			  $(".project-1").addClass('animated slideInLeft');
			  $(".project-2").addClass('animated jackInTheBox');
			  $(".project-3").addClass('animated slideInRight');
		  }
	});
	
	function doScroll() {
		var target = $(this).get(0).href.split("#")[1];
		console.log($(this).get(0).href)
		
		
		$('html, body').stop().animate({
		   scrollTop: $('#'+target).offset().top
		}, 1000);
	}
	
});