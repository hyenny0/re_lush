// jQuery Seletor Method Extend
// var $ = (function () {
// 	return function (e) {
// 		var el;
// 		if (/^[.]/.test(e)) {
// 			var classAll = document.querySelectorAll(e);
// 			el = classAll.length > 1 ? classAll : document.querySelector(e)
// 		} else {
// 			el = document.querySelector(e);
// 		}
// 		return el;
// 	}
// }())

// jQuery Seletor Method Minimal
var $ = (function () {
  function _jQuery() {
    return function (e) {
      var el = /^[.]/.test(e)
        ? document.querySelectorAll(e).length > 1
          ? document.querySelectorAll(e)
          : document.querySelector(e)
        : document.querySelector(e);
      return el;
    };
  }
  return new _jQuery();
})();

var ss = $(".swiper-slider");

$("#prev").addEventListener("click", function (e) {
  for (var i = 0; i < ss.length; i++) {
    if ($(".swiper-wrapper").children[i] === $(".current-step")) {
      var s = i;
      if (i == ss.length - 1) {
        $(".swiper-wrapper").children[0].classList.remove("next-step");
      } else {
        $(".swiper-wrapper").children[i + 1].classList.remove("next-step");
      }

      $(".current-step").classList.add("next-step");
      $(".current-step").classList.remove("current-step");
      $(".prev-step").classList.add("current-step");
      $(".prev-step").classList.remove("prev-step");

      if (i == 0) {
        var s = ss.length - 2;
        $(".swiper-wrapper").children[s].classList.add("prev-step");
      } else {
        if (i == 1) {
          $(".swiper-wrapper").children[ss.length - 1].classList.add(
            "prev-step"
          );
        } else {
          $(".swiper-wrapper").children[i - 2].classList.add("prev-step");
        }
      }
      break;
    }
  }
});

$("#next").addEventListener("click", function (e) {
  for (var i = 0; i < ss.length; i++) {
    if ($(".swiper-wrapper").children[i] === $(".current-step")) {
      var s = i;
      if (i == 0) {
        s = ss.length;
        $(".swiper-wrapper").children[s - 1].classList.remove("prev-step");
      } else {
        $(".swiper-wrapper").children[i - 1].classList.remove("prev-step");
      }

      $(".current-step").classList.add("prev-step");
      $(".current-step").classList.remove("current-step");
      $(".next-step").classList.add("current-step");
      $(".next-step").classList.remove("next-step");

      if (i == ss.length - 2) {
        $(".swiper-wrapper").children[0].classList.add("next-step");
      } else {
        if (i == ss.length - 1) {
          $(".swiper-wrapper").children[1].classList.add("next-step");
        } else {
          $(".swiper-wrapper").children[i + 2].classList.add("next-step");
        }
      }
      break;
    }
  }
});

document.getElementById("prev").addEventListener("click", function (e) {
  e.preventDefault(); // ← 이게 핵심!
  // 슬라이드 이전으로 이동하는 코드 넣기
});

document.getElementById("next").addEventListener("click", function (e) {
  e.preventDefault(); // ← 이것도!
  // 슬라이드 다음으로 이동하는 코드 넣기
});

