//Add Class Sticky On Scroll
$(window).on('scroll', function (event) {
  var scroll = $(window).scrollTop();
  if (scroll > 20) {
    $("header").addClass("sticky");
  } 
  else {
    $("header").removeClass("sticky");
  }
});

// CheckMate Sec6 Slider JS
var swiper = new Swiper(".app-screen-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 4,
  spaceBetween: 10,
  loop:true,
  coverflowEffect: {
    rotate: 4,
    stretch: 0,
    depth: 50,
    modifier: 5,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".screen-slider-wrap .right-arrow",
    prevEl: ".screen-slider-wrap .left-arrow",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  }
});

// CaseStudy Sec5 Slider JS
$('.casestudySec5-slider').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

// eVoke Slider Js
$('.evokeSlider').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

// eVoke Sec6 Slider Js
$('.evokeSec6-slider').owlCarousel({
    loop:true,
    margin:15,
    center:true,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

// KornHole Sec6 Slider Js
$('.kornholeSec6-slider').owlCarousel({
    loop:true,
    margin:15,
    center:true,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


// Testimonials Slider JS
$(document).ready(function() {
  var bigimage = $("#big");
  var thumbs = $("#thumbs");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: false,
    autoplay: false,
    dots: true,
    loop: true,
    responsiveRefreshRate: 200,
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 5,
    dots: false,
    autoplay: false,
    smartSpeed: 200,
    slideSpeed: 500,
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
});

// ******CUSTOM CURSOR*************
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
});
document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
});

$( function() {
  $( '.type-text' ).each( function() {
    var items = $( this ).attr( 'title' ) + ';' + $( this ).text();
    $( this ).empty().attr( 'title', '' ).teletype( {
      text: $.map( items.split( ';' ), $.trim ),
      typeDelay: 100,
      backDelay: 20,
      cursor: '▋',
      delay: 3000,
      preserve: false,
      loop: 0
  } );
} );
} );

// Locomotive Js
const Locoscroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  mobile: {
       smooth: false
   },
   tablet: {
       smooth: true
   }
});


// Mobile Menu Js
$('.mobile-toggle').click(function(){
	$('.main-menu').toggleClass('active');
});

// Drop Down Menu Js
$('.dropDown-menu').click(function(){
  $(this).find('.subMenu').toggleClass('show');
});