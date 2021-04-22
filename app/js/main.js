/*Прилипание навигационного меню*/
{
  const nav = document.querySelector('.index-header__nav'),
    content = document.querySelector('.index-header__content');
  // создаем переменную с расстоянием над меню
  const navOffset = nav.getBoundingClientRect().top + document.body.scrollTop;
  // ловим событие скролла
  window.addEventListener('scroll', function () {
    // создаем переменную с колличеством проскроленных пикселей
    const scrolled = window.scrollY;

    // если разница проскроленных пикселей больше высоты меню
    if (scrolled > navOffset) {
      nav.classList.add('nav-fixed');
      content.classList.add('content-fixed');
      // если разница проскроленных пикселей меньше высоты меню
    } else if (scrolled < navOffset) {
      nav.classList.remove('nav-fixed');
      content.classList.remove('content-fixed');
    }
  });
}
/*index.html*/
{
  const index = document.getElementsByClassName('.index-header');

  if (!index) {
    // console.log('da');
  } else {
    // console.log('da');
  }
}
