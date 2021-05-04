/*Open hamburger-menu Start*/
{
  const gamburger = document.querySelector('.hamburger'),
    gamburgerMenu = document.querySelector('.hamburger__menu'),
    overlay = document.querySelector('.index-header__overlay'),
    nav = document.querySelector('.nav-menu__list-wrapp');

  gamburger.addEventListener('click', function () {
    nav.classList.toggle('nav-menu__list-wrapp--active');
    gamburgerMenu.classList.toggle('hamburger__menu--active');
    overlay.classList.toggle('index-header__overlay--active');
  });
}
/*Open hamburger-menu End*/
/*Nav-menu Start*/
{
  /*Mobile-menu Start*/
  const list = document.querySelectorAll('.nav-menu__item');
  const listBtn = document.querySelectorAll('.nav-menu__wrapp-img');

  list.forEach((item) => {
    // Remove class 'products__item--active'
    function removeClass() {
      list.forEach((el) => {
        el.classList.remove('nav-menu__item--active');
      });
    }
    // Click
    item.addEventListener('click', () => {
      if (item.classList.contains('nav-menu__item--active')) {
        item.classList.remove('nav-menu__item--active');
      } else {
        removeClass();
        item.classList.add('nav-menu__item--active');
      }
    });
  });
  /*Mobile-menu End*/

  /*Menu-group Start*/
  /*Menu-group Search Start*/
  const searchIcon = document.querySelector('.nav-menu__group-icon--search'),
    cancelIcon = document.querySelector('.nav-menu__group-icon--cancel'),
    searchLabel = document.querySelector('.nav-menu__search-label');

  searchIcon.addEventListener('click', function () {
    searchIcon.classList.toggle('nav-menu__group-icon--search--active');
    cancelIcon.classList.toggle('nav-menu__group-icon--cancel--active');
    searchLabel.classList.toggle('nav-menu__search-label--active');
  });
  cancelIcon.addEventListener('click', function () {
    searchIcon.classList.toggle('nav-menu__group-icon--search--active');
    cancelIcon.classList.toggle('nav-menu__group-icon--cancel--active');
    searchLabel.classList.toggle('nav-menu__search-label--active');
  });
  /*Menu-group Search End*/
  /*Menu-group Dots Start*/
  const dotsIcon = document.querySelector('.nav-menu__group-icon--dots'),
    groupMenu = document.querySelector('.nav-menu__group-menu');

  dotsIcon.addEventListener('click', function () {
    groupMenu.classList.toggle('nav-menu__group-menu--active');
  });
  /*Menu-group Dots End*/
  /*Menu-group End*/
}
/*Nav-menu End*/
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
      const animatedClassName = 'animated';
      const ELEMENTS = document.querySelectorAll('.btn');
      const ELEMENTS_SPAN = [];

      ELEMENTS.forEach((element, index) => {
        let addAnimation = false;
        // On the last element in the page, add a listener to remove
        // ---> animation-class when animation ends
        if (element.classList[1] == 'FLASH') {
          g = element;
          element.addEventListener('animationend', (e) => {
            element.classList.remove(animatedClassName);
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
          if (addAnimation) element.classList.add(animatedClassName);
        });

        element.addEventListener('mouseout', (e) => {
          ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + 'px';
          ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + 'px';
        });
      });
    }
  }
}
