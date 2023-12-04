//////////////////////////////////$RECYCLE.BIN
var burger = document.querySelector(".header__burger");
var htop = document.querySelector(".header__top");

burger.addEventListener("click", function (e) {
  burger.classList.toggle("active");
  htop.classList.toggle("active");
  console.log(document.querySelector("body") + "121");
  document.querySelector("body").classList.toggle("no-scroll");
});
//////////////////////////////////$RECYCLE.BIN
var search = document.querySelector(".header__input-icon");
var search_close = document.querySelector(".header__search-close");
var form = document.querySelector(".header__form");
search.addEventListener("click", function () {
  form.classList.add("active");
});
search_close.addEventListener("click", function () {
  form.classList.remove("active");
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

  if (window.innerWidth <= 767) {
    if (!finfo.contains(fcontact)) {
      block.removeChild(fcontact);
      finfo.appendChild(fcontact);
    }
  } else if (window.innerWidth > 767) {
    if (finfo.contains(fcontact)) {
      finfo.removeChild(fcontact);
      block.appendChild(fcontact);
    }
  }

  if (window.innerWidth <= 1199.98) {
    // Если ширина экрана <= 768px, перемещаем первый элемент в следующий блок
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
      content.classList.toggle("active");
      header.classList.toggle("active");
      header.parentNode.classList.toggle("active");
    });
  });
});

////////////////////////////////////$RECYCLE.BIN

function initSliders() {
  if (document.querySelector(".layout-slider__slider")) {
    let popular;
    var item = document.querySelector(".layout-slider");
    popular = new Swiper(".layout-slider__slider", {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 6,
      centeredSlides: true,
      speed: 1000,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      //   pauseOnMouseEnter: true,
      // },
      navigation: {
        nextEl: item.querySelector(".swiper-button-next2"),
        prevEl: item.querySelector(".swiper-button-prev2"),
      },
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 2.2,
          slidesPerGroup: 1,

          spaceBetween: 0,
          centeredSlides: true,
          loop: true,
        },
        576: {
          slidesPerView: 2,
          slidesPerGroup: 1,

          spaceBetween: 0,
          centeredSlides: true,
          loop: true,
        },

        778: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 0,
          centeredSlides: false,
        },

        1200: {
          slidesPerView: 5,
          slidesPerGroup: 1,
          spaceBetween: 0,
          centeredSlides: false,
          loop: true,
        },
      },
    });
  }

  if (document.querySelector(".layout-robota__slider")) {
    function initializeSwiper() {
      var screenWidth = window.innerWidth;
      let popular;

      if (screenWidth < 768) {
        //location.reload();
        //   popular.destroy(true, true);

        popular = new Swiper(".layout-robota__slider", {
          loop: true,
          spaceBetween: 20,
          slidesPerView: 1,
          centeredSlides: true,
          speed: 1000,
          // autoplay: {
          //     delay: 3000,
          //     disableOnInteraction: false,
          //     pauseOnMouseEnter: true,
          // },
          //touchRatio: 0,
          // pagination: {
          //     el: ".swiper-pagination",
          //     clickable: true,
          // },
          loop: true,

          navigation: {
            nextEl: ".robota-button-next",
            prevEl: ".robota-button-prev",
          },
          on: {
            init: function (swiper) {},
            resize: function (swiper) {
              if (window.innerWidth > 768) {
                //location.reload();
                swiper.destroy(true, true);
              }
            },
          },
        });
      }
    }

    window.addEventListener("resize", initializeSwiper);
    initializeSwiper();
  }
  if (document.querySelector(".layout-services__slider")) {
    function initializeSwip() {
      var screenWidth = window.innerWidth;
      let popular;

      if (screenWidth <= 992) {
        //location.reload();
        //   popular.destroy(true, true);

        popular = new Swiper(".layout-services__slider", {
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
        blocks2.appendChild(element);
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

///////////////////////////////////////$RECYCLE.BIN
// document
//   .querySelector(".layout-form__btn")
//   .addEventListener("submit", function (event) {
//     // Очищаем предыдущие сообщения об ошибках
//     clearErrors();
//     console.log("dfdfdf");
//     // Получаем значения полей
//     var name = document.querySelector("layout-form__name").value.trim();
//     var phone = document.querySelector(".layout-form__phone").value.trim();
//     var email = document.querySelector(".layout-form__email").value.trim();
//     console.log(name);
//     console.log(phone);
//     console.log(email);
//     // Валидация имени
//     if (name === "") {
//       displayError(".layout-form__name", "Name is required");
//       event.preventDefault();
//       console.log("name" + name);
//     }

//     // Валидация телефона (пример: 10 цифр)
//     if (!/^\d{10}$/.test(phone)) {
//       displayError("phoneError", "Invalid phone number (10 digits required)");
//       event.preventDefault();
//     }

//     // Валидация email
//     if (!isValidEmail(email)) {
//       displayError("emailError", "Invalid email address");
//       event.preventDefault();
//     }
//   });

// function isValidEmail(email) {
//   // Простейшая проверка формата email
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// function displayError(elementId, errorMessage) {
//   var errorElement = document.querySelector(elementId);
//   errorElement.innerHTML = errorMessage;
//   console.log(errorMessage);
// }

// function clearErrors() {
//   var errorElements = document.querySelectorAll(".error-message");
//   errorElements.forEach(function (element) {
//     element.textContent = "";
//   });
// }
if ((bottom = document.querySelector(".layout-legality__content"))) {
  function legalityElement() {
    var description = document.querySelector(".layout-legality__img");
    var bottom = document.querySelector(".layout-legality__content");
    var top = document.querySelector(".layout-legality__wrap");

    if (window.innerWidth <= 1199.98) {
      // Если ширина экрана <= 768px, перемещаем первый элемент в следующий блок
      if (!bottom.contains(description)) {
        top.removeChild(description);
        bottom.appendChild(description);
      }
    } else if (window.innerWidth > 1199.98) {
      // Если ширина экрана > 768px, перемещаем второй элемент в предыдущий блок
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
      // Если ширина экрана <= 768px, перемещаем первый элемент в следующий блок
      if (!bottom.contains(description)) {
        top.removeChild(description);
        bottom.appendChild(description);
      }
    } else if (window.innerWidth > 1199.98) {
      // Если ширина экрана > 768px, перемещаем второй элемент в предыдущий блок
      if (bottom.contains(description)) {
        bottom.removeChild(description);
        top.appendChild(description);
      }
    }
  }
  window.addEventListener("resize", exampleElement);
  window.addEventListener("load", exampleElement);
}
