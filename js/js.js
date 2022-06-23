// JavaScript Document

$(document).ready(function(){

  // RWD_menu
  $(".menu").click(function(){ 
	
		$("nav").slideToggle(500);
		
	});

    $(window).on('load resize',function(){
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("nav").show(); else $("nav").hide();
	});


    // Initialize Swiper 
    var swiper = new Swiper(".mySwiper", {
        speed:1000,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    function bannerresize(){ //depends on your needs to change the ratio
        $fw = $("#s_pic").width();
        $fh = $fw/1600*668;
        $("#s_pic").height($fh);
        $("#m1 img").height($fh);
    };
    
    function vbannerresize(){ //depends on your needs to change the ratio
        $vw = $("#v_pic").width();
        $vh = $vw/900*1111;
        $("#v_pic").height($vh);
        $("#m2 img").height($vh);
    }









    
})