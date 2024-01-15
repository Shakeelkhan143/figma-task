$("#carousel-owner").owlCarousel({
    margin: 20,
    dots: false,
    loop: true,
    autoplay: true,
    items:3,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items:1,
        nav: true
      },
      600:{
        items:3,
        nav: true
      },
      1000:{
        items:5,
        nav: true
      }
    }
  });

  $("#carousel-card").owlCarousel({
    margin: 20,
    dots: false,
    loop: true,
    autoplay: false,
    center: true,
    items:3,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items:1,
        nav: true
      },
      600:{
        items:1,
        nav: true
      },
      1000:{
        items:3,
        nav: true
      }
    }
  });

  $("#carousel-inner").owlCarousel({
    margin: 20,
    dots: true,
    loop: true,
    autoplay: true,
    items:3,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items:1,
        nav: true
      },
      600:{
        items:1,
        nav: true
      },
      1000:{
        items:3,
        nav: true
      }
    }
  });