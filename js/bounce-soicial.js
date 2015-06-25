 $(window).scroll(function() {
  
                var target = $('#social-instagram').offset().top;
                var viewport = window.innerHeight;
  
                    // incr when scroll down
                var scrolling = $(document).scrollTop();
  
                if(scrolling > target - viewport /1 ) {
    
                   
                    $('#social-instagram').addClass('animated bounceInLeft');
                } else {
                    $('#social-instagram').removeClass('animated bounceInLeft');
                }
  
                });  

 $(window).scroll(function() {
  
                var target = $('#social-facebook').offset().top;
                var viewport = window.innerHeight;
  
                    // incr when scroll down
                var scrolling = $(document).scrollTop();
  
                if(scrolling > target - viewport /1 ) {
    
                   
                    $('#social-facebook').addClass('animated bounceInLeft');
                } else {
                    $('#social-facebook').removeClass('animated bounceInLeft');
                }
  
                });  

 $(window).scroll(function() {
  
                var target = $('#social-twitter').offset().top;
                var viewport = window.innerHeight;
  
                    // incr when scroll down
                var scrolling = $(document).scrollTop();
  
                if(scrolling > target - viewport /1 ) {
    
                   
                    $('#social-twitter').addClass('animated bounceInLeft');
                } else {
                    $('#social-twitter').removeClass('animated bounceInLeft');
                }
  
                });  
            