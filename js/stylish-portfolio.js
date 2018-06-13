(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Portfolio modal
  $(".portfolio-item").click(function() {
    var title = $(this).find("h2").text(),
        content = $(this).find("p").text();

    $(".modal-title").text(title);
    $(".modal-body").text(content);
  })

  // Contact form
  $("#submit").click(function(e) {
    e.preventDefault();

    var name = $("#name").val(),
        email = $("#email").val(),
        message = $("#message").val();

    $.ajax({
        type: "POST",
        url: 'URL_ENDPOINT_FROM_LAST_STEP',
        contentType: 'application/json',
        data: JSON.stringify({
            'name': name,
            'email': email,
            'message': message
        }),
        success: function(res){
            $('#form-response').text('Email was sent.');
        },
        error: function(){
            $('#form-response').text('Error.');
        }
    });
  })
})(jQuery); // End of use strict