  // Бургер меню
$('.menu-icon').on('click', function(){
    $('.menu-icon, .menu').toggleClass("active");
    // $('body').toggleClass("overlay");
  })
  
  $(document).click(function(e) {
    if (!$(e.target).hasClass("active") &&
        $(e.target).parents(".site-nav").length === 0) {
          $('.menu-icon, .menu').removeClass("active");
          // $('body').removeClass("overlay");
    }
  });
  $('.menu-item').on('click', function(){
    $('.menu-icon, .menu').removeClass("active");
    // $('body').removeClass("overlay");
  }) 


  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const answer = item.querySelector('.faq-answer');

        if (item.classList.contains('active')) {
            answer.style.height = answer.scrollHeight + 'px';

            requestAnimationFrame(() => {
                answer.style.height = '0px';
            });

            item.classList.remove('active');
        } else {
            item.classList.add('active');
            answer.style.height = answer.scrollHeight + 'px';

            answer.addEventListener('transitionend', function handler() {
                if (item.classList.contains('active')) {
                    answer.style.height = 'auto';
                }
                answer.removeEventListener('transitionend', handler);
            });
        }
    });
});


// tabs
document.querySelectorAll('.catalog-page__tabs-btn').forEach(button => {
    button.addEventListener('click', () => {

        const tabId = button.dataset.tab;

        document.querySelectorAll('.catalog-page__tabs-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        document.querySelectorAll('.catalog-page__tab-panel').forEach(panel => {
            panel.classList.remove('active');
        });

        button.classList.add('active');

        document.querySelector('.catalog-page__tab-panel[data-tab="' + tabId + '"]').classList.add('active');
    });
});

// load more
document.querySelectorAll('.load-more-btn').forEach(button => {
    button.addEventListener('click', function () {

        const panel = button.closest('.catalog-page__tab-panel');
        const hiddenItems = panel.querySelectorAll('.hidden-product');

        for(let i = 0; i < 2; i++){
            if(hiddenItems[i]){
                hiddenItems[i].style.display = 'block';
                hiddenItems[i].classList.remove('hidden-product');
            }
        }

        if(panel.querySelectorAll('.hidden-product').length === 0){
            button.style.display = 'none';
        }
    });
});
// slider
$(document).ready(function(){
    $('.product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    appendArrows:".product__slider-arrow",
    arrows: true,
    infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
    });
  });

//   
document.querySelectorAll('.catalog-page__tabs-btn').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.dataset.tab;

        document.querySelectorAll('.catalog-page__tabs-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        document.querySelectorAll('.catalog-page__tab-panel').forEach(panel => {
            panel.classList.remove('active');
        });

        button.classList.add('active');

        const activePanel = document.querySelector('.catalog-page__tab-panel[data-tab="' + tabId + '"]');
        activePanel.classList.add('active');

        const cards = activePanel.querySelectorAll('.main-page__our-products-item');

        cards.forEach(card => {
            card.classList.remove('is-animated');
        });

        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('is-animated');
            }, index * 90);
        });
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const firstPanel = document.querySelector('.catalog-page__tab-panel.active');

    if(firstPanel){
        const cards = firstPanel.querySelectorAll('.main-page__our-products-item');

        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('is-animated');
            }, index * 90);
        });
    }
});