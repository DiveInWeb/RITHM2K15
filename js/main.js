/*-----------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/  

(function($) {

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
  	$(window).load(function() {

   	// will first fade out the loading animation 
    	$("#status").fadeOut("slow"); 

    	// will fade out the whole DIV that covers the website. 
    	$("#preloader").delay(500).fadeOut("slow").remove();      

  	}) 

  	/*----------------------------------------------------*/
  	/* Backstretch
  	/*----------------------------------------------------*/

  	if($("html").hasClass('ie8')) {
  		$("#hero").backstretch("images/hero-bg.jpg");  	
  		$("#page-title").backstretch("images/hero-bg.jpg");	
  	} 



	/*----------------------------------------------------*/
	/* Adjust Primary Navigation Background Opacity
	------------------------------------------------------*/
   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var header = $('#main-header');

	   if ((y > h + 30 ) && ($(window).outerWidth() > 768 ) ) {
	      header.addClass('opaque');
	   }
      else {
         if (y < h + 30) {
            header.removeClass('opaque');
         }
         else {
            header.addClass('opaque');
         }
      }

	});

   /*-----------------------------------------------------*/
	/* Alert Boxes
  	-------------------------------------------------------*/
	$('.alert-box').on('click', '.close', function() {
	  $(this).parent().fadeOut(500);
	});	


   /*-----------------------------------------------------*/
  	/* Mobile Menu
   ------------------------------------------------------ */  
   var menu_icon = $("<span class='menu-icon'></span>");
  	var toggle_button = $("<a>", {                         
                        id: "toggle-btn", 
                        html : "<span class='menu-text'>Menu</span>",
                        title: "Menu",
                        href : "#" } 
                        );
  	var nav_wrap = $('nav#nav-wrap')
  	var nav = $("ul#nav");  
   
   /* if JS is enabled, remove the two a.mobile-btns 
  	and dynamically prepend a.toggle-btn to #nav-wrap */
  	nav_wrap.find('a.mobile-btn').remove(); 
  	toggle_button.append(menu_icon); 
   nav_wrap.prepend(toggle_button); 

  	toggle_button.on("click", function(e) {
   	e.preventDefault();
    	nav.slideToggle("fast");     
  	});

  	if (toggle_button.is(':visible')) nav.addClass('mobile');
  	$(window).resize(function() {
   	if (toggle_button.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	$('ul#nav li a').on("click", function() {      
   	if (nav.hasClass('mobile')) nav.fadeOut('fast');      
  	});


  	/*----------------------------------------------------*/
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});


 
 
	/*----------------------------------------------------*/
	/*	contact form
	------------------------------------------------------*/

   $('form#contactForm button.submit').on('click', function() {

      $('#image-loader').fadeIn();

      var contactFname = $('#contactForm #contactFname').val();
      var contactLname = $('#contactForm #contactLname').val();
      var contactEmail = $('#contactForm #contactEmail').val();
      var contactSubject = $('#contactForm #contactSubject').val();
      var contactMessage = $('#contactForm #contactMessage').val();

      var data = 'contactFname=' + contactFname  + '&contactLname=' + contactLname + 
                 '&contactEmail=' + contactEmail + '&contactSubject=' + contactSubject + 
                 '&contactMessage=' + contactMessage;

      $.ajax({

	      type: "POST",
	      url: "inc/sendEmail.php",
	      data: data,
	      success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
               $('#image-loader').fadeOut();
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();   
            }
            // There was an error
            else {
               $('#image-loader').fadeOut();
               $('#message-warning').html(msg);
	            $('#message-warning').fadeIn();
            }

	      }

      });
      return false;
   });


   $('form#registerForm button.submit').on('click', function() {

      $('#image-loader').fadeIn();
      var regName = $('#registerForm #regName').val();
      var regCollege = $('#registerForm #regCollege').val();
      var regEmail = $('#registerForm #regEmail').val();
      var regMobile = $('#registerForm #regMobile').val();
      var regEvent = $('#registerForm #regEvent').val();
      var regMessage = $('#registerForm #regMessage').val();
      var data = 'regName=' + regName  + '&regCollege=' + regCollege + 
                 '&regEmail=' + regEmail + '&regMobile=' + regMobile + 
                 '&regEvent=' + regEvent + '&regMessage=' + regMessage;
      $.ajax({

        type: "POST",
        url: "inc/sendEmail_reg.php",
        data: data,
        success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
               $('#image-loader').fadeOut();
               $('#reg-message-warning').hide();
               $('#registerForm').fadeOut();
               $('#reg-message-success').fadeIn();   
            }
            // There was an error
            else {
               $('#image-loader').fadeOut();
               $('#reg-message-warning').html(msg);
              $('#reg-message-warning').fadeIn();
            }

        }

      });
      return false;
   });


	/*-----------------------------------------------------*/
  	/* Back to top
   ------------------------------------------------------ */ 
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (jQuery(window).scrollTop() >= pxShow) {
			jQuery("#go-top").fadeIn(fadeInTime);
		} else {
			jQuery("#go-top").fadeOut(fadeOutTime);
		}

	}); 

 var msg = "RITHM2K15";
        var size = 17;
        var circleY = 0.75; var circleX = 2;
        var letter_spacing = 5;
        var diameter = 10;
        var rotation = 0.27;
        var speed = 0.3;

        if (!window.addEventListener && !window.attachEvent || !document.createElement) return;

        msg = msg.split('');
        var n = msg.length - 1, a = Math.round(size * diameter * 0.208333), currStep = 20,
        ymouse = a * circleY + 20, xmouse = a * circleX + 20, y = [], x = [], Y = [], X = [],
        o = document.createElement('div'), oi = document.createElement('div'),
        b = document.compatMode && document.compatMode != "BackCompat"? document.documentElement : document.body,

        mouse = function(e){
         e = e || window.event;
 ymouse = !isNaN(e.pageY)? e.pageY : e.clientY; // y-position
 xmouse = !isNaN(e.pageX)? e.pageX : e.clientX; // x-position
},

makecircle = function(){
 if(init.nopy){
  o.style.top = (b || document.body).scrollTop + 'px';
  o.style.left = (b || document.body).scrollLeft + 'px';
};
currStep -= rotation;
for (var d, i = n; i > -1; --i){
  d = document.getElementById('iemsg' + i).style;
  d.top = Math.round(y[i] + a * Math.sin((currStep + i) / letter_spacing) * circleY - 15) + 'px';
  d.left = Math.round(x[i] + a * Math.cos((currStep + i) / letter_spacing) * circleX) + 'px';
};
},

drag = function(){
 y[0] = Y[0] += (ymouse - Y[0]) * speed;
 x[0] = X[0] += (xmouse - 20 - X[0]) * speed;
 for (var i = n; i > 0; --i){
  y[i] = Y[i] += (y[i-1] - Y[i]) * speed;
  x[i] = X[i] += (x[i-1] - X[i]) * speed;
};
makecircle();
},

init = function(){
 if(!isNaN(window.pageYOffset)){
  ymouse += window.pageYOffset;
  xmouse += window.pageXOffset;
} else init.nopy = true;
for (var d, i = n; i > -1; --i){
  d = document.createElement('div'); d.id = 'iemsg' + i;
  d.style.height = d.style.width = a + 'px';
  d.appendChild(document.createTextNode(msg[i]));
  oi.appendChild(d); y[i] = x[i] = Y[i] = X[i] = 0;
};
o.appendChild(oi); document.body.appendChild(o);
setInterval(drag, 25);
},

ascroll = function(){
 ymouse += window.pageYOffset;
 xmouse += window.pageXOffset;
 window.removeEventListener('scroll', ascroll, false);
};

o.id = 'outerCircleText'; o.style.fontSize = size + 'px';

if (window.addEventListener){
 window.addEventListener('load', init, false);
 document.addEventListener('mouseover', mouse, false);
 document.addEventListener('mousemove', mouse, false);
 if (/Apple/.test(navigator.vendor))
   window.addEventListener('scroll', ascroll, false);
}
else if (window.attachEvent){
 window.attachEvent('onload', init);
 document.attachEvent('onmousemove', mouse);
};


})(jQuery);

