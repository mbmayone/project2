// script comes from https://www.jqueryscript.net/slider/Elastic-Full-window-Page-Slider-With-jQuery-CSS3.html

$('.page-slider').each(function() {
  var $slider =  $(this);
  var numberOfSlides = $slider.find('.panel').length;

  $slider.find('.panel:eq(0)').addClass('_active');
  $slider.find('.nav-dot:eq(0)').addClass('active');

  var $activeSlide = $slider.find('.panel._active');
  var $nextBtn = $slider.find('.next-btn');
  var $prevBtn = $slider.find('.prev-btn');

  $('.nav-dot').on('click', function() {
    var slideToGo = $(this).data('slide');
    goToSlide(slideToGo);
  });


  $slider.on('slide.changed', function() {
    console.log('slide changed !');
    $('.nav-dot').removeClass('active');
    var $activeDot = $('.nav-dot[data-slide="'+$('.panel._active').data('slide')+'"]');
    $activeDot.addClass('active');
  });

  $nextBtn.on('click', function(event) {
    nextSlide();
  });

  $prevBtn.on('click', function(event) {
    prevSlide();
  });


  function nextSlide() {
    $activeSlide = $slider.find('.panel._active');
    var $nextSlide = $activeSlide.next('.panel');
    $activeSlide.removeClass('_active');
    $nextSlide.addClass('_active');

    //$activeSlide = $nextSlide;

    var slideIndex = $slider.find('.panel._active').index('.panel');
    console.log(slideIndex);


    if(slideIndex >= numberOfSlides || slideIndex <= -1 ) {
      firstSlide();
      $slider.trigger('slide.changed');

    }else {
      $slider.trigger('slide.changed');
    }

  }

function prevSlide() {
    $activeSlide = $slider.find('.panel._active');

    var $prevSlide = $activeSlide.prev('.panel');
    //console.log($prevSlide);
    $activeSlide.removeClass('_active');
    $prevSlide.addClass('_active');
    //$activeSlide = $prevSlide;

    var slideIndex = $slider.find('.panel._active').index();
    console.log(slideIndex);



    if(typeof $prevSlide === 'undefined'|| $prevSlide === null || $prevSlide.length == -1 || slideIndex <= -1 ) {
      lastSlide();
      $slider.trigger('slide.changed');
    } else {
      $slider.trigger('slide.changed');
    }

  }

  function firstSlide() {
      $('.panel._active').removeClass('_active');
      $slider.find('.panel:eq(0)').addClass('_active');
      $activeSlide = $slider.find('.panel:eq(0)');

  }

    function lastSlide() {
      //console.log('last');
      $('.panel._active').removeClass('_active');
      $slider.find('.panel').eq(numberOfSlides-1).addClass('_active');
      //$activeSlide = $slider.find('.panel:eq(numberOfSlides)');

  }

  function goToSlide(slideToGo) {
      $('.panel._active').removeClass('_active');
      $slider.find('.panel').eq(slideToGo -1).addClass('_active');
      $activeSlide = $slider.find('.panel').eq(slideToGo -1).addClass('_active');
      $slider.trigger('slide.changed');
  }

});


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


// script for quiz comes from https://codepen.io/jchamill/pen/

$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
      {
        'q': 'TRUE or FALSE: Until 1950, if one nominee came within three votes of the winner, he or she ALSO won.',
        'options': [
          'True',
          'False'
        ],
        'correctIndex': 0,
        'correctResponse': 'Good job, that is correct.',
        'incorrectResponse': 'Sadly, that is incorrect.'
      },
      {
        'q': 'How is the "magic number" calculated?',
        'options': [
          'By taking the total number of ballots recieved for that category and dividing them by the number of possible nominees, and then rounding it up to the nearest whole number',
          'By taking the total number of ballots received for that category and dividing them by the number of possible nominees plus two, and then rounding it up to the nearest whole number.',
          'By taking the total number of ballots received for that category and dividing them by the number of possible nominees plus one, and then rounding it up to the nearest whole number.'
        ],
        'correctIndex': 2,
        'correctResponse': 'Good job, that is correct.',
        'incorrectResponse': 'Sadly, that is incorrect.'
      },
      {
        'q': 'TRUE or FALSE: Each Academy member gets to vote in each category twice.',
        'options': [
          'True',
          'False'
        ],
        'correctIndex': 1,
        'correctResponse': 'Good job, that is correct.',
        'incorrectResponse': 'Sadly, that is incorrect.'
      },
      {
        'q': 'Each member can only be in one branch—actor, film editor, etc.—and can mostly only vote for other people also in that specialty. What category is the exception of this rule?',
        'options': [
          'Best Lead Actor',
          'Best Screenplay',
          'Best Picture'
        ],
        'correctIndex': 2,
        'correctResponse': 'Good job, that is correct.',
        'incorrectResponse': 'Sadly, that is incorrect.'
      }
    ]
  });
