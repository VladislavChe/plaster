/* Nav Menu Start*/
/*Прилипание навигационного меню*/
{
  window.onscroll = function () {
    checkMarginToTop();
    checkMarginToTopMerit();
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
/* Nav Menu End*/

/* Hamburger-menu Start*/
{
  const gamburger = document.querySelector('.hamburger'), // hamburger
    gamburgerMenu = document.querySelector('.hamburger__menu'), // hamburger-before-after
    overlay = document.querySelector('.index-header__overlay'), // overlay
    nav = document.querySelector('.nav-menu__list-wrapp'); // nav-bar-menu

  // Open - Close nav-bar-menu
  gamburger.addEventListener('click', function (e) {
    nav.classList.toggle('nav-menu__list-wrapp--active');
    gamburgerMenu.classList.toggle('hamburger__menu--active');
    overlay.classList.toggle('index-header__overlay--active');
  });

  // click outside the nav-bar-menu
  window.addEventListener('click', function (e) {
    const target = e.target; // находим элемент, на котором был клик
    if (
      !target.closest('.hamburger') &&
      !target.closest('.nav-menu__list-wrapp')
    ) {
      // если этот элемент или его родительские элементы не окно навигации и не кнопка
      nav.classList.remove('nav-menu__list-wrapp--active'); // то закрываем окно навигации, удаляя активный класс
      gamburgerMenu.classList.remove('hamburger__menu--active'); // то трансформируем hamburger в исходный вид
      overlay.classList.remove('index-header__overlay--active'); // то закрываем overlay, удаляя активный класс
    }
  });
}
/*Hamburger-menu End*/

/*Nav-bar-menu Start*/
{
  const list = document.querySelectorAll('.nav-menu__item');

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
}
/*Nav-bar-menu End*/

/*Menu-group Start*/
{
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

  window.addEventListener('click', function (e) {
    const target = e.target;
    if (
      !target.closest('.nav-menu__group-icon--cancel') &&
      !target.closest('.nav-menu__group-icon--search') &&
      !target.closest('.nav-menu__search-label')
    ) {
      searchIcon.classList.remove('nav-menu__group-icon--search--active');
      cancelIcon.classList.remove('nav-menu__group-icon--cancel--active');
      searchLabel.classList.remove('nav-menu__search-label--active');
    }
  });
  /*Menu-group Search End*/

  /*Menu-group Dots Start*/
  const dotsIcon = document.querySelector('.nav-menu__group-icon--dots'),
    groupMenu = document.querySelector('.nav-menu__group-menu');

  dotsIcon.addEventListener('click', function () {
    groupMenu.classList.toggle('nav-menu__group-menu--active');
  });

  window.addEventListener('click', function (e) {
    const target = e.target;
    if (
      !target.closest('.nav-menu__group-icon--dots') &&
      !target.closest('.nav-menu__group-menu')
    ) {
      groupMenu.classList.remove('nav-menu__group-menu--active');
    }
  });
  /*Menu-group Dots End*/
}
/*Menu-group End*/

/*index.html*/
{
  const index = document.getElementsByClassName('.index-header');

  if (!index) {
    // console.log('da');
  } else {
    /*Ripple hover btn Start*/
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
    /*Ripple hover btn End*/

    /*Merit numbers Start*/
    {
      // Время в милисекундах
      const time = 1000;
      // Шаг
      const step = 1;

      function outNum(num, elem) {
        // Получаем элемент на странице куда мы выводим числа
        let l = document.querySelector('.' + elem);
        // Число от которого начинается отсчет
        let numb = 0;
        // Количество шагов от 0 до результата
        let count = Math.round(time / (num / step));
        // Интервал добавления цифр
        let interval = setInterval(() => {
          numb += step;

          if (numb == num) {
            clearInterval(interval);
          }
          if (numb < 10) {
            l.innerHTML = '0' + numb;
          } else {
            l.innerHTML = numb;
          }
        }, count);
      }

      const merit = document.querySelector('.merit');
      // создаем переменную с расстоянием над меню
      const meritOffset = merit.offsetTop;
      // ловим событие скролла
      function checkMarginToTopMerit() {
        if (
          window.pageYOffset > meritOffset - 400 &&
          merit.classList.contains('merit__not-animate')
        ) {
          outNum(10, 'merit__years-number');
          outNum(40, 'merit__skills-consultans');
          outNum(160, 'merit__skills-employers');
          merit.classList.remove('merit__not-animate');
        }
      }
    }
    /*Merit numbers End*/

    /*Filter Start*/
    {
      function app() {
        // Получаем кнопки и карточки
        const buttons = document.querySelectorAll('.projects__button');
        const cards = document.querySelectorAll('.projects__card-item');

        // Функция фильтра
        function filter(category, items) {
          // перебираем все карточки
          items.forEach((item) => {
            // класс как у дата атрибута кнопки
            const isItemFiltered = !item.classList.contains(category);
            // класс кнопки 'all'
            const isShowAll = category.toLowerCase() === 'all';
            // если класс как у кнопки и не 'all'
            if (isItemFiltered && !isShowAll) {
              // добавить класс анимированного скрытия
              item.classList.add('projects__anime');
            } else {
              // иначе убрать класс анимированного скрытия
              item.classList.remove('projects__anime');
              item.classList.remove('projects__hide');
            }
          });
        }

        // перебираем все кнопки
        buttons.forEach((button) => {
          // ловим клик на конкретной кнопке
          button.addEventListener('click', () => {
            // создаем переменную с дата-атрибутом той кнопки на которую кликнули
            const currentCategory = button.dataset.filter;
            // передаем переменную и сами карточки в функцию фильтра
            filter(currentCategory, cards);
          });
        });

        cards.forEach((card) => {
          // Ловим окончание анимации transition
          card.ontransitionend = function () {
            if (card.classList.contains('projects__anime')) {
              card.classList.add('projects__hide');
            }
          };
        });
      }

      app();
    }
    /*Filter End*/
  }
}
