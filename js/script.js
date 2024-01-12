function initElements() {
  var burger = document.querySelector(".header__burger");
  var htop = document.querySelector(".header__top");
  var search = document.querySelector(".header__input-icon");
  var search_close = document.querySelector(".header__search-close");
  var search_wrap = document.querySelector(".search-wrap");
  var back = document.querySelector(".header__back");
  var tab = document.querySelectorAll(".tab");
  var tabs = document.querySelectorAll(".tabs__content ");
  var listDropdown = document.querySelector(".header__list-dropdown ");
  var liDropdown = document.querySelector(".header__li-dropdown");
  burger.addEventListener("click", function (e) {
    listDropdown.classList.remove("active");
    liDropdown.classList.remove("active");

    back.innerHTML = "";
    tab.forEach(function (item) {
      item.classList.remove("active");
    });
    if (burger.classList.contains("active")) {
      burger.classList.remove("active");
      listDropdown.classList.remove("active");
      liDropdown.classList.remove("active");

      back.innerHTML = "";
      tab.forEach(function (item) {
        item.classList.remove("active");
      });
      // tabs.forEach(function (item) {
      //   item.classList.remove("active");
      // });
    } else {
      burger.classList.add("active");
    }

    htop.classList.toggle("active");

    document.querySelector("body").classList.toggle("no-scroll");
  });

  //////////////////////////////////$RECYCLE.BIN

  var form = document.querySelector(".header__form");
  search.addEventListener("click", function () {
    form.classList.add("active");
    burger.classList.remove("active");
    htop.classList.remove("active");
  });
  search_close.addEventListener("click", function () {
    form.classList.remove("active");
    search_wrap.classList.remove("active");
    document.querySelector("body").classList.remove("no-scroll");
  });
  //////////////
  function moveElement() {
    var top = document.querySelector(".header__top");
    var bottom = document.querySelector(".header__bottom");
    var description = document.querySelector(".header__description");

    var contact = document.querySelector(".header__contact");
    var email = document.querySelector(".header__email");
    var phone = document.querySelector(".header__phone");
    var fcontact = document.querySelector(".footer__contact");
    var finfo = document.querySelector(".footer__info");
    var block = document.querySelector(".footer__block:last-child");
    var iblock = document.querySelector(".layout-robota__img");
    var liblock = document.querySelector(".layout-robota__li");
    var cblock = document.querySelector(".layout-robota__content");
    var error404 = document.querySelector(".error404");

    if (window.innerWidth <= 767) {
      if (error404 && cblock && !cblock.contains(iblock)) {
        liblock.removeChild(iblock);
        var referenceElement = cblock.children[1]; // Второй элемент (индекс 1)

        // Вставляем новый элемент перед указанным элементом
        cblock.insertBefore(iblock, referenceElement);
        //  cblock.appendChild(iblock);
      }
      if (!finfo.contains(fcontact)) {
        block.removeChild(fcontact);
        finfo.appendChild(fcontact);
      }
    } else if (window.innerWidth > 767) {
      if (finfo.contains(fcontact)) {
        finfo.removeChild(fcontact);
        block.appendChild(fcontact);
      }
      if (error404 && cblock && cblock.contains(iblock)) {
        cblock.removeChild(iblock);
        liblock.appendChild(iblock);
      }
    }

    if (window.innerWidth <= 1199.98) {
      if (top.contains(description)) {
        top.removeChild(description);
        bottom.appendChild(description);
      }
      if (bottom.contains(email)) {
        bottom.removeChild(email);
        top.appendChild(email);
      }
      if (bottom.contains(phone)) {
        bottom.removeChild(phone);
        top.appendChild(phone);
      }
    } else if (window.innerWidth > 1199.98) {
      // Если ширина экрана > 768px, перемещаем второй элемент в предыдущий блок
      if (bottom.contains(description)) {
        bottom.removeChild(description);
        top.appendChild(description);
      }
      if (top.contains(phone)) {
        top.removeChild(phone);
        bottom.appendChild(phone);
      }
      if (top.contains(email)) {
        top.removeChild(email);
        bottom.appendChild(email);
      }
    }
  }
  window.addEventListener("resize", moveElement);
  window.addEventListener("load", moveElement);

  //////////////////////////////////$RECYCLE.BIN
  document.addEventListener("DOMContentLoaded", function () {
    var accordionItems = document.querySelectorAll("._accordion-item");

    accordionItems.forEach(function (item) {
      var header = item.querySelector("._accordion-title");
      var content = item.querySelector("._accordion-body");

      header.addEventListener("click", function () {
        if (header.classList.contains("active")) {
          content.classList.remove("active");
          header.classList.remove("active");
          header.parentNode.classList.remove("active");
        } else {
          accordionItems.forEach(function (item) {
            var header = item.querySelector("._accordion-title");
            var content = item.querySelector("._accordion-body");
            content.classList.remove("active");
            header.classList.remove("active");
            header.parentNode.classList.remove("active");
          });
          content.classList.add("active");
          header.classList.add("active");
          header.parentNode.classList.add("active");
        }
      });
    });
  });
  //////////////////////
  function asideElement() {
    if (window.innerWidth <= 991) {
      var asideItems = document.querySelectorAll("._aside-item");

      asideItems.forEach(function (item) {
        var header = item.querySelector("._aside-title");
        var content = item.querySelector("._aside-body");

        header.addEventListener("click", function () {
          if (header.classList.contains("active")) {
            content.classList.remove("active");
            header.classList.remove("active");
            header.parentNode.classList.remove("active");
          } else {
            content.classList.add("active");
            header.classList.add("active");
            header.parentNode.classList.add("active");
          }
        });
      });
    }
  }

  window.addEventListener("resize", asideElement);
  window.addEventListener("load", asideElement);

  ////////////////////////////////////$RECYCLE.BIN

  function initSliders() {
    if (document.querySelector(".layout-slider__slider")) {
      var rangeInput = document.getElementById("swiperRange");
      var item = document.querySelector(".layout-slider");
      let popular2 = new Swiper(".layout-slider__slider", {
        //  loop: true,
        spaceBetween: 20,
        slidesPerView: 6,
        slideToClickedSlide: true,
        speed: 1000,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // },
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
        },
        navigation: {
          nextEl: item.querySelector(".swiper-button-next2"),
          prevEl: item.querySelector(".swiper-button-prev2"),
        },
        //  loop: true,
        breakpoints: {
          0: {
            slideToClickedSlide: true,
            slidesPerView: 2,
            slidesPerGroup: 1,
            centeredSlides: false,
            spaceBetween: 0,

            //  loop: true,
          },
          576: {
            slidesPerView: 2.3,
            slidesPerGroup: 1,

            spaceBetween: 0,

            //  loop: true,
          },

          778: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 0,
            centeredSlides: false,
          },

          1200: {
            slidesPerView: 5,
            slidesPerGroup: 3,
            spaceBetween: 0,
            centeredSlides: false,
            //   loop: true,
          },
        },
        on: {
          init: function (swiper) {},
        },
      });
    }

    //////////////////////////////////////script.js
    if (document.querySelector(".layout-robota__slider")) {
      const slider = document.querySelector(".layout-robota__slider");

      let yourSlider;

      const sliderInit = () => {
        yourSlider = new Swiper(slider, {
          loop: true,
          spaceBetween: 20,
          slidesPerView: 1,
          centeredSlides: true,
          speed: 1000,

          loop: true,

          navigation: {
            nextEl: ".robota-button-next",
            prevEl: ".robota-button-prev",
          },
          on: {
            init: function (swiper) {
              if (window.innerWidth > 768) {
                // popular3.setProgress(0, 0);
                //  swiper.setTranslate(0);
                //  swiper.disable();
              }
            },

            resize: function (swiper) {
              if (window.innerWidth > 768) {
                // swiper.setTranslate(0);
                // swiper.disable();
                //  swiper.destroy(true, true);
              }
            },
          },
        });
      };

      const resizeHandlerSlider = () => {
        if (768 >= document.body.clientWidth) {
          if (yourSlider) {
            yourSlider.destroy();
          }

          sliderInit();
        } else {
          if (yourSlider) {
            yourSlider.destroy();
          }
        }
      };
      if (768 >= window.innerWidth) {
        sliderInit();
      }
      window.addEventListener("resize", resizeHandlerSlider);
    }
    ///////////////////////////////////script.js

    if (document.querySelector(".layout-services__slider")) {
      function initializeSwip() {
        var screenWidth = window.innerWidth;

        if (screenWidth <= 992) {
          //location.reload();
          //   popular.destroy(true, true);
          let popular4;
          popular4 = new Swiper(".layout-services__slider", {
            loop: true,

            // centeredSlides: true,
            speed: 1000,

            loop: true,
            breakpoints: {
              0: {
                spaceBetween: 15,
                slidesPerView: 1.2,
              },

              778: {
                spaceBetween: 35,
                slidesPerView: 1.5,
              },
            },
            on: {
              init: function (swiper) {},
              resize: function (swiper) {
                if (window.innerWidth > 992) {
                  //location.reload();
                  swiper.destroy(true, true);
                }
              },
            },
          });
        }
      }

      window.addEventListener("resize", initializeSwip);
      initializeSwip();
    }

    var forswiper = document.querySelector(".post-slider__slider");
    if (forswiper) {
      var swiper = new Swiper(forswiper, {
        spaceBetween: 30,
        // loop: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        slidesPerView: 1,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          991: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
        },
        navigation: {
          nextEl: ".post-slider__next",
          prevEl: ".post-slider__prev",
        },
      });
      // const swiperPrev = document.querySelector(".post-slider__prev");
      // const swiperNext = document.querySelector(".post-slider__next");

      // swiperPrev.addEventListener("click", () => {
      //   swiper.slidePrev();
      // });
      // swiperNext.addEventListener("click", () => {
      //   swiper.slideNext();
      // });
    }
  }
  window.addEventListener("load", function (e) {
    initSliders();
  });

  ///////////////////////$RECYCLE.BIN
  function rabotaElement() {
    var containers = document.querySelectorAll(".layout-robota__li");

    containers.forEach(function (container) {
      var blocks = container.querySelector(".layout-robota__img");
      var blocks2 = container.querySelector(".layout-robota__content");

      var elements = container.querySelectorAll(" h3");

      elements.forEach(function (element, elementIndex) {
        if (window.innerWidth <= 767 && !blocks.contains(element)) {
          // Если ширина экрана <= 768px, перемещаем первый элемент в следующий блок
          var nextBlock = blocks;
          nextBlock.appendChild(element);
        } else if (window.innerWidth > 767 && !blocks2.contains(element)) {
          // Если ширина экрана > 768px, перемещаем второй элемент в предыдущий блок

          blocks.removeChild(element);
          blocks2.insertBefore(element, blocks2.firstChild);
        }
      });
    });
  }
  window.addEventListener("resize", rabotaElement);
  window.addEventListener("load", rabotaElement);
  ///////////////////////$RECYCLE.BIN
  function blogElement() {
    var containers = document.querySelectorAll(".layout-blog__container");

    containers.forEach(function (container) {
      var blocks = container.querySelector(".layout-blog__wrap");

      var elements = container.querySelectorAll(".layout-blog__btn");

      elements.forEach(function (element, elementIndex) {
        if (window.innerWidth <= 576) {
          // Если ширина экрана <= 768px, перемещаем первый элемент в следующий блок
          var nextBlock = container;
          nextBlock.appendChild(element);
        } else if (window.innerWidth > 576 && !blocks.contains(element)) {
          // Если ширина экрана > 768px, перемещаем второй элемент в предыдущий блок
          var prevBlock = container;
          prevBlock.removeChild(element);
          blocks.appendChild(element);
        }
      });
    });
  }
  window.addEventListener("resize", blogElement);
  window.addEventListener("load", blogElement);

  if ((bottom = document.querySelector(".layout-legality__content"))) {
    function legalityElement() {
      var description = document.querySelector(".layout-legality__img");
      var bottom = document.querySelector(".layout-legality__content");
      var top = document.querySelector(".layout-legality__wrap");

      if (window.innerWidth <= 1199.98) {
        if (!bottom.contains(description)) {
          top.removeChild(description);
          bottom.appendChild(description);
        }
      } else if (window.innerWidth > 1199.98) {
        if (bottom.contains(description)) {
          bottom.removeChild(description);
          top.appendChild(description);
        }
      }
    }
    window.addEventListener("resize", legalityElement);
    window.addEventListener("load", legalityElement);
  }
  if (document.querySelector(".layout-example__wrap")) {
    function exampleElement() {
      var description = document.querySelector(".layout-example__img");
      var bottom = document.querySelector(".layout-example__content");
      var top = document.querySelector(".layout-example__wrap");

      if (window.innerWidth <= 1199.98) {
        if (!bottom.contains(description)) {
          top.removeChild(description);
          bottom.appendChild(description);
        }
      } else if (window.innerWidth > 1199.98) {
        if (bottom.contains(description)) {
          bottom.removeChild(description);
          top.appendChild(description);
        }
      }
    }
    window.addEventListener("resize", exampleElement);
    window.addEventListener("load", exampleElement);
  }
  /////////////////////////////

  if (document.querySelector(".tabs-container")) {
    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("tab")) {
        var tabNumber =
          Array.from(event.target.parentElement.children).indexOf(
            event.target
          ) + 1;

        document
          .querySelectorAll(".tabs__content")
          .forEach((content) => content.classList.remove("active"));
        document
          .querySelectorAll(".tab")
          .forEach((tab) => tab.classList.remove("active"));

        document.getElementById(`content${tabNumber}`).classList.add("active");
        event.target.classList.add("active");
      }
    });
  }

  if (document.querySelector(".header__list-dropdown")) {
    // var colorChangeElements = document.querySelectorAll("#Vector");
    var tabs = document.querySelector(".header__list-dropdown");
    // colorChangeElements.forEach(function (element) {
    //   element.addEventListener("click", function () {
    //     // Получаем текущий цвет элемента
    //     var currentColor = element.getAttribute("fill");

    //     // Пример: Изменяем цвет на обратный (белый, если был чёрный, и наоборот)
    //     currentColor = "white";

    //     // Устанавливаем новый цвет
    //     element.setAttribute("fill", currentColor);
    //   });
    // });
    tabs.addEventListener("click", function (event) {
      // Проверяем, является ли элемент, по которому произошел клик, вложенным в .child

      var parentElement = event.target.closest(".tab");

      if (parentElement) {
        // var currentColor = parentElement.querySelector("g");

        // var newColor =
        //   currentColor.getAttribute("fill") === "#0075FF" ? "white" : "#0075FF";
        // currentColor.setAttribute("fill", newColor);
        parentElement = parentElement.dataset.tab;

        openTab(parentElement);
      }
    });
    function openTab(tabName) {
      // Скрываем все содержимое вкладок
      var tabContents = document.querySelectorAll(".tabs__content");
      tabContents.forEach(function (content) {
        content.classList.remove("active");
      });
      // Скрываем все содержимое вкладок
      var tabContent = document.querySelectorAll(".tab");
      tabContent.forEach(function (content) {
        content.classList.remove("active");
      });

      // Отображаем только выбранную вкладку
      var selectedTabContent = document.querySelector(
        '[data-tab-content="' + tabName + '"]'
      );
      if (selectedTabContent) {
        selectedTabContent.classList.add("active");
      }
      // Отображаем только выбранную вкладку
      var selectedTabConten = document.querySelector(
        '[data-tab="' + tabName + '"]'
      );
      if (selectedTabConten) {
        selectedTabConten.classList.add("active");
      }
    }
  }
  if (document.querySelector(".layout-post__banner")) {
    function sizeBanner() {
      if (window.innerWidth >= 1199.98) {
        var scrollingBlock = document.querySelector(".banner");
        var container = document.querySelector(".layout-post__banner");

        var blockHeight = scrollingBlock.offsetTop;
        var bannerkHeight = container.clientHeight - scrollingBlock.offsetTop;
        var isFixed = false;

        window.addEventListener("scroll", function () {
          var scrollPosition = window.scrollY;

          if (
            scrollPosition > blockHeight &&
            !isFixed &&
            scrollPosition <= bannerkHeight
          ) {
            container.classList.toggle("active");
            scrollingBlock.style.top = "20";
            scrollingBlock.style.position = "sticky";

            isFixed = true;
          } else if (
            scrollPosition <= (blockHeight && isFixed) ||
            (scrollPosition >= bannerkHeight && isFixed)
          ) {
            scrollingBlock.style.top = "20";
            scrollingBlock.style.position = "relative";

            isFixed = false;
            container.classList.toggle("active");
          }
        });
      }
    }
    window.addEventListener("resize", sizeBanner);
    window.addEventListener("load", sizeBanner);
  }

  if (document.querySelector(".layout__aside-button")) {
    document.addEventListener("DOMContentLoaded", function () {
      var myList = document.querySelector(".layout__aside-list");
      var showMoreBtn = document.querySelector(".layout__aside-button");

      showMoreBtn.addEventListener("click", function () {
        myList.classList.toggle("show-third");
        showMoreBtn.classList.toggle("active");
        if (document.querySelector(".layout__aside-button.active")) {
          showMoreBtn.textContent = "Скрыть все";
        } else {
          showMoreBtn.textContent = "Показать все";
        }
      });
    });
  }
  //////////////////////////////////$RECYCLE.BIN
  if (window.innerWidth >= 1199.98) {
    var burger2 = document.querySelector(".header__li-dropdown");
    var htop2 = document.querySelector(".header__list-dropdown");

    burger2.addEventListener("click", function (e) {
      burger2.classList.toggle("active");
      htop2.classList.toggle("active");
    });
  }
  //////////////////////$RECYCLE.BIN

  if (document.querySelector(".search-more-text")) {
    document.addEventListener("DOMContentLoaded", function () {
      var myList = document.querySelector(".search-content-wrap");
      var showMoreBtn = document.querySelector(".search-more-text");
      var headerSearch = document.querySelector("#header-search");
      var wrapSearch = document.querySelector(".search-wrap");
      var wrapSearch2 = document.querySelector(".search-wrap.active");
      let step = 0;
      headerSearch.addEventListener("input", function (e) {
        wrapSearch.classList.add("active");
        step = 1;
        if (window.innerWidth <= 1199.98) {
          document.querySelector("body").classList.toggle("no-scroll");
        }
        jQuery(document).trigger("input_modal_search", {
          inputEvent: e,
          inputObject: this,
        });
      });
      showMoreBtn.addEventListener("click", function () {
        myList.classList.toggle("show-third");
        showMoreBtn.classList.toggle("active");
        if (document.querySelector(".search-more-text.active")) {
          showMoreBtn.textContent = "Скрыть все результаты";
        } else {
          showMoreBtn.textContent = "Показать все результаты";
        }
      });
      // if (window.innerWidth >= 1199.98) {
      //   window.addEventListener("click", function (e) {
      //     var modal = document.querySelector(".search-wrap");
      //
      //     if (e.target != modal && step == 1) {
      //       step = 0;
      //       modal.classList.remove("active");
      //     }
      //   });
      // }
    });
  }
  ///////////////////////////////////
  if (document.querySelector(".modal__pars")) {
    var modalpars = document.querySelectorAll(".modal__button");
    var modal = document.querySelector(".modal__pars");
    var modalclose = modal.querySelector(".modal-close");

    modalpars.forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        modal.classList.toggle("active");
        document.querySelector(".mf-bg").classList.toggle("active");
      });
    });
    modalclose.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.toggle("active");
      document.querySelector(".mf-bg").classList.remove("active");
    });
  }
  if (document.querySelector(".modal__message")) {
    var modalparsm = document.querySelectorAll(".modal__button-message");
    var modalm = document.querySelector(".modal__message");
    var modalclosem = modalm.querySelector(".modal-close");

    modalparsm.forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        modalm.classList.toggle("active");
        document.querySelector(".mf-bg").classList.toggle("active");
      });
    });
    modalclosem.addEventListener("click", function (e) {
      e.preventDefault();
      modalm.classList.toggle("active");
      document.querySelector(".mf-bg").classList.remove("active");
    });
  }
  if (document.querySelector(".modal__example")) {
    var modalparse = document.querySelectorAll(".modal__button-example");
    var modale = document.querySelector(".modal__example");
    var modalclosee = modale.querySelector(".modal-close");

    modalparse.forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        modale.classList.toggle("active");
        document.querySelector(".mf-bg").classList.toggle("active");
      });
    });
    modalclosee.addEventListener("click", function (e) {
      e.preventDefault();
      modale.classList.toggle("active");
      document.querySelector(".mf-bg").classList.remove("active");
    });
  }
  ///////////////////////////////////
  if (document.querySelector(".modal__vacancy")) {
    document.addEventListener("DOMContentLoaded", function () {
      var modalpars = document.querySelectorAll(".modal__resume");
      var modal = document.querySelector(".modal__vacancy");

      modalpars.forEach(function (item) {
        item.addEventListener("click", function (e) {
          e.preventDefault();
          modal.classList.toggle("active");
          document.querySelector(".mf-bg").classList.toggle("active");

          var modalclose = modal.querySelector(".modal-close");
          modalclose.addEventListener("click", function (e) {
            e.preventDefault();
            modal.classList.remove("active");
            document.querySelector(".mf-bg").classList.remove("active");
          });
        });
      });
    });
  }

  ///////////////////////////////////////$RECYCLE.BIN
  function checkCookieConsent() {
    return document.cookie.includes("cookieConsent=true");
  }

  // Устанавливаем куку согласия
  function setCookieConsent() {
    document.cookie =
      "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  }

  // Показываем или скрываем сообщение в зависимости от наличия согласия
  function showCookieMessage() {
    var cookieMessage = document.getElementById("cookieMessage");
    if (!checkCookieConsent()) {
      cookieMessage.style.display = "flex";
    } else {
      cookieMessage.style.display = "none";
    }
  }

  // Обработчик нажатия кнопки согласия
  document
    .getElementById("acceptCookie")
    .addEventListener("click", function () {
      setCookieConsent();
      showCookieMessage();
    });

  // Показываем сообщение при загрузке страницы
  showCookieMessage();
  ///////////////////////////////////////$RECYCLE.BIN // Получаем элементы
  var customFileInput = document.getElementById("customFileInput");
  var fileContainer = document.getElementById("fileContainer");

  customFileInput.addEventListener("change", function () {
    var files = customFileInput.files;
    displayFiles(files);
  });

  function displayFiles(files) {
    fileContainer.innerHTML = "";

    for (var i = 0; i < files.length; i++) {
      var fileItem = createFileItem(files[i]);
      fileContainer.appendChild(fileItem);
    }
  }

  function createFileItem(file) {
    var fileItem = document.createElement("div");
    fileItem.classList.add("file-item");

    var fileName = document.createElement("div");
    fileName.classList.add("file-name");
    fileName.innerText = file.name;

    var removeButton = document.createElement("div");
    removeButton.classList.add("remove-file");
    removeButton.innerHTML = "&times;";

    removeButton.addEventListener("click", function () {
      fileItem.remove();
    });

    fileItem.appendChild(fileName);
    fileItem.appendChild(removeButton);

    return fileItem;
  }
  /////////////////////////////////////////$RECYCLE.BIN
  if (window.innerWidth <= 1199.98) {
    var back = document.querySelector(".header__back");
    var tab = document.querySelectorAll(".tab");
    var tabs = document.querySelectorAll(".tabs__content ");
    var listDropdown = document.querySelector(".header__list-dropdown ");
    var liDropdown = document.querySelector(".header__li-dropdown");
    liDropdown.addEventListener("click", function () {
      if (!back.querySelector("._mobile")) {
        listDropdown.classList.add("active");
        liDropdown.classList.add("active");
        liDropdown.classList.add("_mobile");
        var mobile = document.querySelector("._mobile");
        back.appendChild(mobile.cloneNode(true));
      }
    });
    tab.forEach(function (item) {
      if (!back.querySelector(".tab")) {
        item.addEventListener("click", function () {
          back.appendChild(item.cloneNode(true));
        });
      }
    });

    back.addEventListener("click", function (e) {
      var mobile = document.querySelector("._mobile");
      var parentElement = e.target.parentNode;

      function closestByClass(target, className) {
        // Начинаем с текущего элемента и поднимаемся вверх по DOM
        while (target && !target.classList.contains(className)) {
          target = target.parentElement;
        }
        return target;
      }

      var closestParent = closestByClass(e.target, "_mobile");

      if (closestParent) {
        back.querySelector("._mobile").remove();
        listDropdown.classList.remove("active");
        liDropdown.classList.remove("active");
        back.innerHTML = "";
        tab.forEach(function (item) {
          item.classList.remove("active");
        });
        tabs.forEach(function (item) {
          item.classList.remove("active");
        });
      }
      var parentElement = e.target.parentNode;
      // Изменения здесь
      var isTabClick = Array.from(tab).some(function (item) {
        return item === parentElement;
      });

      if (
        e.target.contains(back.querySelector(".tab")) ||
        back.querySelector(".tab")
      ) {
        back.querySelector(".tab").remove();
        tab.forEach(function (item) {
          item.classList.remove("active");
        });
        tabs.forEach(function (item) {
          item.classList.remove("active");
        });
      }
    });
  }
}

function removeAllEventListeners(element) {
  // Создаем новый элемент с тем же внутренним HTML
  var newElement = element.cloneNode(true);

  // Заменяем старый элемент на новый с использованием outerHTML
  element.parentNode.replaceChild(newElement, element);

  return newElement;
}
// Функция для переинициализации всех элементов
function resetAndInitElements() {
  // tab.forEach(function (item) {
  //   item.classList.remove("active");
  // });

  // if (burger.classList.contains("active")) {
  //   burger.classList.remove("active");
  //   listDropdown.classList.remove("active");
  //   liDropdown.classList.remove("active");
  //   back.innerHTML = "";
  //   tab.forEach(function (item) {
  //     item.classList.remove("active");
  //   });
  //   tabs.forEach(function (item) {
  //     item.classList.remove("active");
  //   });
  // }

  var burger = document.querySelector(".header__burger");
  var back = document.querySelector(".header__back");
  var tab = document.querySelectorAll(".tab");
  var tabs = document.querySelectorAll(".tabs__content ");
  var listDropdown = document.querySelector(".header__list-dropdown ");
  var liDropdown = document.querySelector(".header__li-dropdown");
  back.innerHTML = "";
  listDropdown.classList.remove("active");
  liDropdown.classList.remove("active");
  burger = removeAllEventListeners(burger);
  back = removeAllEventListeners(back);
  //tab = removeAllEventListeners(tab);
  //tabs = removeAllEventListeners(tabs);
  listDropdown = removeAllEventListeners(listDropdown);
  liDropdown = removeAllEventListeners(liDropdown);

  initElements();
}

initElements();
// Добавление обработчика события изменения размера экрана
window.addEventListener("resize", resetAndInitElements);
