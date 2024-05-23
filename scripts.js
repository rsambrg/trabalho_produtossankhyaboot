$( document ).ready(function() {

    $(window).scroll(function (e) {
  
      let scroll = $(window).scrollTop();
  
      });
  
    // Parallax
  
    // setTimeout serve para carregar primeiro as imagens
    setTimeout(function() {
      $('#data-area').parallax({imageSrc: 'assets/img/cidadeparallax.png'});
      $('#apply-area').parallax({imageSrc: 'assets/img/pattern.png'});
    }, 200);
  
    function eachBoxes(type, boxes) {
  
      if(type == 'all') {
        $(boxes).fadeIn();
      } else {
        $(boxes).each(function() {
          if(!$(this).hasClass(type)) {
            $(this).fadeOut('slow');
          } else {
            $(this).fadeIn();
          }
        });
      }
    }
  
    // scroll para as seções
  
    let navBtn = $('.nav-item');
  
    let bannerSection = $('#hero_reb');
    let aboutSection = $('#hero_reb');
    let servicesSection = $('#features_reb');
    let teamSection = $('#prices-doug');
    let portfolioSection = $('#mainSlider');
    let contactSection = $('#contato_reb');
  
    let scrollTo = '';
  
    $(navBtn).click(function() {
  
      let btnId = $(this).attr('id');
  
      if(btnId == 'sobre-menu') {
        scrollTo = aboutSection;
      } else if(btnId == 'recursos-menu') {
        scrollTo = servicesSection;
      } else if(btnId == 'precos-menu') {
        scrollTo = teamSection;
      } else if(btnId == 'depoimentos-menu') {
        scrollTo = portfolioSection;
      } else if(btnId == 'contato-menu') {
        scrollTo = contactSection;
      } else {
        scrollTo = bannerSection;
      }
  
      $([document.documentElement, document.body]).animate({
          scrollTop: $(scrollTo).offset().top - 70
      },500);
    });
  
  });
