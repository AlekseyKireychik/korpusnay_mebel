/*************************************
********* ФОРМА ОБРАТНОЙ СВЯЗИ *******
*************************************/

(function main(){
	document.addEventListener('DOMContentLoaded', DOMContentLoaded );

	function DOMContentLoaded(){
		var aNode = document.querySelector('.contacts__jsShowForm');
		aNode.addEventListener('click', showForm);
		var iNode = document.querySelector('.close');
		iNode.addEventListener('click', closeForm);
		var grayNode = document.querySelector('.gray');
		grayNode.addEventListener('click', closeForm);
	}

	function showForm(){
		var node1 = document.querySelector('.jsForm');
		node1.classList.remove('hidden');
		var node2 = document.querySelector('.gray');
		node2.classList.remove('hidden');
		var closeNode3 = document.querySelector('nav');
		closeNode3.classList.add('hidden');
	}

	function closeForm(){
		var closeNode1 = document.querySelector('.jsForm');
		closeNode1.classList.add('hidden');
		var closeNode2 = document.querySelector('.gray');
		closeNode2.classList.add('hidden');
		var closeNode3 = document.querySelector('nav');
		closeNode3.classList.remove('hidden');
	}
})();


/*******************************************
************** КНОПКА НАВЕРХ ********************
*******************************************/

var $btnTop = $(".btn__top")
$(window).on("scroll", function(){
	if ($(window).scrollTop() >= 750){
		$btnTop.fadeIn();
	}else{
		$btnTop.fadeOut();
	}
});

$btnTop.on("click", function(){
	$("html,body").animate({scrollTop:0}, 850)
});

/*******************************************
************** ОТЗЫВЫ ********************
*******************************************/

$(document).ready(function(){
	$(".reviews__sliders").owlCarousel({
		items: 1,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3500,
		margin: 10,
		loop: true,
		dots: true,
		paginationNumbers: true
		});
});

// модальное окно отзывы
function showModal(modal) {
  $('.modal__overlay').fadeIn(200,function(){
    $(modal).fadeIn();
  });
}
function closeModal() {
  $('.reviews-form__wrap').fadeOut(200,function(){
     $('.modal__overlay').fadeOut();
  });
}

  $('.button__btn').click(function(){
    showModal($(this).attr('data-content'));
  });

  $('.button__btn .form__close, .modal__overlay').click(function(){
    closeModal();
  });
//****** плавный scroll ********//

$('.scroll')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
