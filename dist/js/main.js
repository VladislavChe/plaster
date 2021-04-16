"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*index.html*/
{
  var index = document.getElementById('particles-js');

  if (!index) {// console.log('no');
  } else {
    /*Анимация логотипа*/
    // const logoImg = document.getElementById('logo-wrapp');
    // const logo = document.getElementById('logo');
    // logo.addEventListener('mouseover', () => {
    //   logoImg.classList.add('animate__flip');
    // });
    // logo.addEventListener('mouseleave', () => {
    //   setTimeout(() => {
    //     logoImg.classList.remove('animate__flip');
    //   }, 800);
    // });

    /*animateTypeName-Start*/
    var namee = document.getElementById('name'),
        stuck = document.getElementById('stuck'),
        myName = document.getElementById('myname');
    var word = [];
    var word2 = '';
    stuck.remove();
    myName.remove();
    var contentStuck = stuck.innerHTML;
    var stuckArr = contentStuck.split('');
    var contentMyname = myName.innerHTML;
    var myNameArr = contentMyname.split('');

    var typeWord = function typeWord(arr1, arr2) {
      namee.innerHTML += "\n    <div class=\"header__wrappoffer d-flex\"\">\n      <h1 id=\"stuck\" style=\"width: 100%;\"></h1><span id=\"cursor1\" class=\"header__cursor\">|</span>\n    </div>   \n    <div class=\"header__wrappoffer d-flex\"\">\n      <h2 id=\"myname\"></h2><span id=\"cursor2\" class=\"header__cursor2\">|</span>\n    </div>\n    ";
      var cursor1 = document.getElementById('cursor1'),
          cursor2 = document.getElementById('cursor2');
      var ticTac = 0;

      function tickCursor1(n) {
        if (n == 0) {
          setTimeout(function () {
            cursor1.classList.toggle('header__cursorhover');

            if (ticTac == 0) {
              tickCursor1(0);
            }
          }, 200);
        } else {}
      }

      function tickCursor2(n) {
        if (n == 0) {
          setTimeout(function () {
            cursor2.classList.toggle('header__cursorhover2');

            if (ticTac == 0) {
              tickCursor2(0);
            }
          }, 200);
        } else {}
      }

      var promiseEl = new Promise(function (resolve, reject) {
        tickCursor1(ticTac);
        setTimeout(function () {
          function typeStuck() {
            var ind = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            setTimeout(function () {
              var stuck = document.getElementById('stuck');
              var result = ind;

              if (result <= arr1.length - 1) {
                stuck.innerHTML += "".concat(arr1[result]);
                result = ind + 1;
                typeStuck(result);
              }

              if (result > arr1.length - 1) {
                cursor1.style.visibility = 'hidden';
                cursor1.classList.remove('cursorhover');
                resolve();
              }
            }, 200);
          }

          typeStuck();
        }, 0);
      });
      promiseEl.then(function () {
        tickCursor2(ticTac);

        function typeName() {
          var ind = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          setTimeout(function () {
            var myName = document.getElementById('myname');
            var result = ind;

            if (result <= arr2.length - 1) {
              myName.innerHTML += "".concat(arr2[result]);
              result = ind + 1;
              typeName(result);
            }

            if (result > arr2.length - 1) {
              cursor2.classList.remove('cursorhover2');
              cursor2.style.visibility = 'hidden';
              ticTac = 1;
            }
          }, 200);
        }

        typeName(0);
      });
    };

    typeWord(stuckArr, myNameArr);
  }
}
/*animateTypeName-End*/

/*burgerMenu-Start*/

{
  var hamburger = document.getElementById('hamburger');

  if (!hamburger) {// console.log('no');
  } else {
    var menu = document.getElementById('burger-menu');
    var closeBurger = document.getElementById('close-burger');
    hamburger.addEventListener('click', function () {
      menu.classList.add('oppened');
    });
    closeBurger.addEventListener('click', function () {
      menu.classList.remove('oppened');
    });
  }
}
/*burgerMenu-End*/

/*index.html - END*/

/*about.html - START*/

{
  var pageAbout = document.getElementById('header-about');

  if (!pageAbout) {} else {
    var anchors = document.querySelectorAll('a[href*="#"]');

    var _iterator = _createForOfIteratorHelper(anchors),
        _step;

    try {
      var _loop = function _loop() {
        var anchor = _step.value;
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          var blockId = anchor.getAttribute('href');
          document.querySelector('' + blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        });
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}
/*about.html - END*/

/*page-accordeon.html - START*/

{
  var pageAccordeon = document.querySelectorAll('.accordeon__title');

  if (!pageAccordeon) {// console.log('no');
  } else {
    (function () {
      var accordeon = document.querySelectorAll('.accordeon__wrapp'),
          accordeonBtn = document.querySelectorAll('.accordeon__element');

      for (var i = 0; i < accordeonBtn.length; i++) {
        accordeonBtn[i].addEventListener('click', function (event) {
          var currBtn = event.target.dataset.btn;

          for (var j = 0; j < accordeon.length; j++) {
            if (accordeon[j].style.maxHeight) {
              accordeon[j].style.maxHeight = null;
            } else {
              if (accordeon[j].dataset.content === currBtn) {
                accordeon[j].style.maxHeight = accordeon[j].scrollHeight + 'px';
              }
            }
          }
        });
      }
    })();
  }
}
/*page-accordeon.html - END*/

/*page-generator.html - START*/

{
  var cube = document.getElementById('generator__cube');

  if (!cube) {// console.log('no');
  } else {
    var changeRadius = function changeRadius() {
      var range = {
        tl: document.getElementById('generator__tlr').value,
        tr: document.getElementById('generator__trr').value,
        br: document.getElementById('generator__brr').value,
        bl: document.getElementById('generator__blr').value
      }; //change text of range

      document.getElementById('generator__result-tlr').innerHTML = range.tl;
      document.getElementById('generator__result-trr').innerHTML = range.tr;
      document.getElementById('generator__result-brr').innerHTML = range.br;
      document.getElementById('generator__result-blr').innerHTML = range.bl;
      var bdrs = "".concat(range.tl, "px ").concat(range.tr, "px ").concat(range.br, "px ").concat(range.bl, "px");
      cube.style.borderRadius = bdrs;
    };

    var changeTextCode = function changeTextCode() {
      var cubeStyle = getComputedStyle(cube);
      textCode.innerHTML = 'border-radius: ' + cubeStyle.borderRadius + ';';
    };

    var btnShowCode = document.getElementById('generator__btn-viewcode'),
        textCode = document.getElementById('generator__samecode');
    var inputs = document.querySelectorAll('.generator__input');
    btnShowCode.addEventListener('click', function () {
      textCode.classList.toggle('generator__active');

      if (textCode.classList.contains('generator__active')) {
        btnShowCode.innerHTML = 'Скрыть код';
      } else {
        btnShowCode.innerHTML = 'Показать код';
      }
    });

    var _iterator2 = _createForOfIteratorHelper(inputs),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        node = _step2.value;
        node.addEventListener('input', changeRadius);
        node.addEventListener('input', changeTextCode);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
}
/*page-generator.html - END*/

/*page-calculator.html - START*/

{
  var pageCalculator = document.querySelector('.calculator__title');

  if (!pageCalculator) {// console.log('no');
  } else {
    var activePlan = function activePlan(el) {
      for (var i = 0; i < btn.length; i++) {
        btn[i].classList.remove('calculator__active');
      }

      el.classList.add('calculator__active');
    };

    var summ = function summ(a) {
      if (numbers.value == 10) {
        totalSumm(staticOptionNumb * a);
      }

      var optionNumb = +numbers.value;
      var total = a * optionNumb;
      totalSumm(total);
      numbers.addEventListener('change', function () {
        var optionNumb = +numbers.value;
        var total = a * optionNumb;
        totalSumm(total);
      });
    };

    var totalSumm = function totalSumm(sum) {
      totality.innerHTML = sum;
    };

    var btn = document.querySelectorAll('.calculator__wrapp-input'),
        plans = document.querySelectorAll('.calculator__selected-plan'),
        _inputs = document.querySelectorAll('.calculator__price-input'),
        numbers = document.getElementById('calculator__numb');

    btn.forEach(function (element) {
      element.addEventListener('click', function (event) {
        activePlan(element);
        var currInput = this.dataset.input;

        for (var j = 0; j < plans.length; j++) {
          plans[j].classList.remove('calculator__active');

          if (plans[j].dataset.plan === currInput) {
            plans[j].classList.add('calculator__active');
          }
        }
      });
    });

    _inputs.forEach(function (input) {
      input.addEventListener('change', function (e) {
        var inputNumb = +input.value;
        summ(inputNumb);
      });
    });

    var op = document.getElementById('calculator__op');
    var totality = document.querySelector('.calculator__total-price');
    var staticOptionNumb = 10;
  }
}
/*page-calculator.html - END*/

/*page-slider.html - START*/

{
  var pageSlider = document.querySelector('.slider__title');

  if (!pageSlider) {// console.log('no');
  } else {
    var activeSlide = function activeSlide(n) {
      slides.forEach(function (slide) {
        slide.classList.remove('slider__active');
      });
      slides[n].classList.add('slider__active');
    };

    var nextSlide = function nextSlide() {
      if (indexSlide == slides.length - 1) {
        indexSlide = 0;
        activeSlide(indexSlide);
        changeDot(indexSlide);
      } else {
        indexSlide++;
        activeSlide(indexSlide);
        changeDot(indexSlide);
      }
    };

    var prevSlide = function prevSlide() {
      if (indexSlide == 0) {
        indexSlide = slides.length - 1;
        activeSlide(indexSlide);
        changeDot(indexSlide);
      } else {
        indexSlide--;
        activeSlide(indexSlide);
        changeDot(indexSlide);
      }
    };

    var changeDot = function changeDot(d) {
      dots.forEach(function (dot) {
        dot.classList.remove('slider__active');
        dots[d].classList.add('slider__active');
      });
    };

    var activeDot = function activeDot(act) {
      for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove('slider__active');
      }

      act.classList.add('slider__active');
    };

    var slides = document.querySelectorAll('.slider__slide'),
        btnPrev = document.getElementById('slider__btn-prev'),
        btnNext = document.getElementById('slider__btn-next'),
        dots = document.querySelectorAll('.dot');
    var indexSlide = 0;
    btnNext.addEventListener('click', nextSlide);
    btnPrev.addEventListener('click', prevSlide);
    dots.forEach(function (dot) {
      dot.addEventListener('click', function (event) {
        var currDot = event.target.dataset.dot;
        activeDot(event.target);

        for (var j = 0; j < slides.length; j++) {
          slides[j].classList.remove('slider__active');

          if (slides[j].dataset.slide === currDot) {
            slides[j].classList.add('slider__active');
          }
        }
      });
    });
  }
}
/*page-slider.html - END*/

/*page-tabs.html - START*/

{
  var pageTabs = document.querySelector('.tabs__title');

  if (!pageTabs) {// console.log('no');
  } else {
    (function () {
      var changeClass = function changeClass(el) {
        for (var i = 0; i < tabs.length; i++) {
          tabs[i].classList.remove('tabs__active');
        }

        el.classList.add('tabs__active');
      };

      var tabs = document.querySelectorAll('.tabs__btn'),
          content = document.querySelectorAll('.tabs__content');

      for (var j = 0; j < tabs.length; j++) {
        tabs[j].addEventListener('click', function (event) {
          var currTab = event.target.dataset.btn;
          changeClass(event.target);

          for (var i = 0; i < content.length; i++) {
            content[i].classList.remove('tabs__active');

            if (content[i].dataset.content === currTab) {
              content[i].classList.add('tabs__active');
            }
          }
        });
      }
    })();
  }
}
/*page-tabs.html - END*/

/*page-map.html - START*/

{
  var pageMap = document.querySelector('.map__title');

  if (!pageMap) {// console.log('no');
  } else {
    var scalle = document.querySelector('.map__inner-scalle'),
        bgScalle = document.querySelector('.map__bg-scalle'),
        plus = document.querySelector('.map__scalle-plus'),
        minuse = document.querySelector('.map__scalle-minuse');
    map = document.querySelector('.map__mini-map');
    bgScalle.style.width = 50 + 'px';
    map.style.width = 50 + 'px';
    map.style.height = 50 + 'px';
    var counter = 50;
    scalle.addEventListener('mousemove', function (event) {
      if (event.offsetX >= 50) {
        counter = event.offsetX;
        bgScalle.style.width = event.offsetX + 'px';
        map.style.width = event.offsetX + 0 + 'px';
        map.style.height = event.offsetX + 0 + 'px';
      }
    });
    plus.addEventListener('click', function () {
      if (counter >= 50) {
        counter += 10;
        bgScalle.style.width = counter + 'px';
        map.style.width = counter + 'px';
        map.style.height = counter + 'px';
      }
    });
    minuse.addEventListener('click', function () {
      if (counter >= 51) {
        counter -= 10;
        bgScalle.style.width = counter + 'px';
        map.style.width = counter + 'px';
        map.style.height = counter + 'px';
      }
    });
  }
}
/*page-map.html - END*/