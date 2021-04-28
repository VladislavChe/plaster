/*index.html*/
{
  const index = document.getElementsByClassName('.index-header');

  if (!index) {
    // console.log('da');
  } else {
    /*Прилипание навигационного меню*/
    {
      window.onscroll = function () {
        checkMarginToTop();
      };
      const nav = document.querySelector('.index-header__nav'),
        content = document.querySelector('.index-header__content');
      // создаем переменную с расстоянием над меню
      const navOffset = nav.offsetTop;
      // ловим событие скролла
      function checkMarginToTop() {
        if (window.pageYOffset > navOffset) {
          nav.classList.add('nav-fixed');
          content.classList.add('content-fixed');
        } else {
          nav.classList.remove('nav-fixed');
          content.classList.remove('content-fixed');
        }
      }
    }

    /*Ripple hover btn*/
    {
      const ANIMATEDCLASSNAME = 'animated';
      const ELEMENTS = document.querySelectorAll('.btn');
      const ELEMENTS_SPAN = [];

      ELEMENTS.forEach((element, index) => {
        let addAnimation = false;
        // Elements that contain the "FLASH" class, add a listener to remove
        // animation-class when the animation ends
        if (element.classList[1] == 'FLASH') {
          element.addEventListener('animationend', (e) => {
            element.classList.remove(ANIMATEDCLASSNAME);
          });
          addAnimation = true;
        }

        // If The span element for this element does not exist in the array, add it.
        if (!ELEMENTS_SPAN[index])
          ELEMENTS_SPAN[index] = element.querySelector('span');

        element.addEventListener('mouseover', (e) => {
          ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + 'px';
          ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + 'px';

          // Add an animation-class to animate via CSS.
          if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
        });

        element.addEventListener('mouseout', (e) => {
          ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + 'px';
          ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + 'px';
        });
      });
    }
  }
}
