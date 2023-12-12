
// // Show & Hide plugin
// $(document).ready(function(){

//   $('.social-link').hide(function(){
    
//   });


// });

// Counter Up JS
jQuery(document).ready(function($) {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
        });
  
});

// OwlCarousel PlugIn
$('.owl-carousel').owlCarousel({
    center: true,
    items:3,
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    margin:10,
    responsive:{
        600:{
            items:1,
        },
          0:{
            items:1,
        }  
    }
});


// Gallery Filter jQuery Codes
var $grid = $('.grid').isotope({
});
// filter items on button click
$('.gallery-btn-area').on('click', 'li', function() {
    $(this).addClass('active').siblings().removeClass('active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});
$('.grid').isotope({
  itemSelector: '.portfolio-wrap',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.gallery-item'
  }
});