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

    
    // 方案btn
    
    $(".b1").click(function(){

        $(".btn1").animate({
        opacity:1,
        display:'toggle'
        });   


        // $(".btn1").toggle();
        // $(".btn1").fadeToggle("slow",1);
        
         
        $(".b1").css({
        "border":"solid 3.5px rgba(67,106,230,.9)",
        "background-color":"rgb(254, 254, 197)"
        });  

        // $(".wrap").addClass(".btn1");


    });

    


    $(".b2").click(function(){

        $(".btn2").animate({
        opacity:1,
        display:'toggle'
        
        });      

        $(".b2").css({
            "border":"solid 3.5px rgba(67,106,230,.9)",
            "background-color":"rgb(254, 254, 197)"
            });  
    });






    
});