(() => {
    $(function() {

        //content selector buttons
        var contentSelected = false; // Set this to true or false based on your condition

        document.getElementById('toggleButtonGroup').addEventListener('click', function(event) {
          
          // Ensure that one of the buttons was clicked
          if (event.target.id == "community") {
            $("#benefits-creator").css("display", "none");
            $("#features-creator").css("display", "none");
            $("#pricing-creator").css("display", "none");

            $("#benefits-community").css("display", "block");
            $("#features-community").css("display", "block");
            $("#pricing-community").css("display", "block");

          }

          if (event.target.classList.contains('toggle-button')) {
              
              // Get all buttons
              var buttons = document.querySelectorAll('.toggle-button');
              
              // Reset all buttons to inactive state
              buttons.forEach(function(button) {
                  button.classList.remove('active');
              });
      
              // Set the clicked button to active state
              event.target.classList.add('active');
          }
          contentSelected = true;
          $("#main-content-select").css("display", "none");
          $("#main-content-container").fadeIn(1000);  
          $('html, body').animate({
            scrollTop: $('#benefits').offset().top
          }, 1000);  // 1000 is the duration in milliseconds
      
        });
      
        //scroll user to main selector buttons if they click the nav menu before selecting who they are
        $('a.navlink, a.blue-fill-button').click(function(e){
            if (!contentSelected) {
                e.preventDefault(); // Prevent default anchor behavior
                var target = $("#main-content-select");
    
                if(target.length){
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000); // Duration of scroll
                }
            }
            // If contentSelected is true, normal anchor behavior will occur
        });

        // GIF loading script
        var gifs = document.querySelectorAll('.top-image:not(.placeholder)');
        gifs.forEach(function(gif) {
          var placeholder = gif.previousElementSibling;
          
          if (gif.complete) {
            placeholder.classList.add('loaded'); 
          } else {
            gif.addEventListener('load', function() {
              placeholder.classList.add('loaded');
            });
          }
        });
    });
})();
  