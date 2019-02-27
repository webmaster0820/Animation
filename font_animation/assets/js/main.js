/*
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
let flg_end_hide = false,
  flg_end_show,
  flg_start_hide,
  flg_start_show,
  now_finish_show_idx,
  letter_array = [],
  now_words_hide = 0,
  now_words_show = 0,
  now_letter_hide = 0,
  now_letter_show = 0,
  main_speed = 0.5,
  step_speed = 1.2,
  min_ang = 30,
  max_ang = 80;


const get_random_range = (a, b) => {
  let ret = a + Math.floor(Math.random() * (b - a));
  if (Math.floor(Math.random() * 100) % 2) ret *= -1;
  return ret;
};

const create_animation_hide = (obj, word, ang, n_op, letter) => {
  let step = get_random_range(min_ang, max_ang),
    speed = main_speed + Math.random() * step_speed,
    tm = Math.abs(step / speed);
  ang = step + ang;

  if (letter == letter_array[word].length - 1 && n_op == 1.0) {
    start_show();
    n_op = 0.99;
    flg_start_show = true;
  }
  if (flg_start_show) n_op = Math.min(n_op, 0.9);

  if (n_op == 0) {
    flg_end_hide = true;
    // alert("finish hide");
  }
  if (flg_end_hide) ang = 0;
  if (n_op == 0.0) {
    $(obj).animate(
      {
        transform: "rotateY(0deg)",
        opacity: 0.0
      },
      tm,
      function() {
        // Animation complete.
        // create_animation(obj, word, letter,ed_op);
      }
    );
  } else {
    if (flg_start_hide) n_op = Math.max(0.0, n_op - 0.04);
    // console.log("hide", word, letter, n_op);
    $(obj).animate(
      {
        transform: "rotateY(" + ang + "deg)",
        opacity: n_op
      },
      tm,
      function() {
        // Animation complete.
        create_animation_hide(obj, word, ang, n_op, letter);
      }
    );
  }
};
const create_animation_show = (obj, word, ang, n_op, letter) => {
  let step = get_random_range(min_ang, max_ang),
    speed = main_speed + Math.random() * step_speed,
    tm = Math.abs(step / speed);
  ang = step + ang;

  if (letter == 0 && n_op == 1.0) {
    // setTimeout(start_hide, 5000);
  }

  if (n_op > 0.1) flg_start_hide = true;
  // console.log("show", word, letter, n_op);

  if (letter == letter_array[word].length - 1 && n_op == 1.0) {
    flg_end_show = true;
    flg_start_hide = true;
    // alert("finish show");
  }

  if (flg_end_show && letter == now_finish_show_idx) {
    ang = 360 * Math.floor((ang + 359) / 360);
    n_op = 1.0;
    $(obj).animate(
      {
        transform: "rotateY(" + ang + "deg)",
        opacity: n_op
      },
      80,
      function() {
        $(obj).css({ transform: "rotateY(0deg)" });
        if (letter == 0) {
          setTimeout(start_hide, 2000);
        }
        // console.log("end show" + ang + ":" + word + ":" + letter,obj,tm);
        now_finish_show_idx--;
      }
    );
  } else {
    n_op = Math.min(n_op + 0.08, 1.0);
    //if (flg_end_show) tm = 80;
    $(obj).animate(
      {
        transform: "rotateY(" + ang + "deg)",
        opacity: n_op
      },
      tm,
      function() {
        create_animation_show(obj, word, letter, n_op, letter);
      }
    );
  }
};
const hide_letters = () => {
  create_animation_hide(
    letter_array[now_words_hide][now_letter_hide],
    now_words_hide,
    0,
    1.0,
    now_letter_hide++
  );
  if (now_letter_hide < letter_array[now_words_hide].length) {
    setTimeout(() => {
      hide_letters();
    }, 200);
  }
};
const show_letters = () => {
  create_animation_show(
    letter_array[now_words_show][now_letter_show],
    now_words_show,
    0,
    0.3,
    now_letter_show--
  );
  if (now_letter_show >= 0) {
    setTimeout(() => {
      show_letters();
    }, 50);
  }
};

const start_show = () => {
  //  alert("start show");
  now_words_show = (now_words_show + 1) % letter_array.length;
  now_finish_show_idx = letter_array[now_words_show].length - 1;
  now_letter_show = now_finish_show_idx;
  flg_end_show = false;
  flg_start_show = false;
  show_letters();
};
const start_hide = () => {
  //  alert("start hide");
  now_words_hide = now_words_show;
  now_letter_hide = 0;
  flg_start_hide = false;
  flg_end_hide = false;
  hide_letters();
};



(function($) {
  const init_sizes = ()=>{
    $(".ipad-frame").css({"zoom":$(window).width() * 0.305 / 1230 });
  }
  
  $(window).resize(function() {
    // alert("<div>" + $(window).width() + "</div>");
    init_sizes();
  });
  init_sizes();
  arr_words.forEach(element => {
    let innerHtmlStr = '<div class="word-content">';
    for (let i = 0; i < element.length; i++) {
      if (element[i] == "*") innerHtmlStr += "<br>";
      else if (element[i] == " ")
        innerHtmlStr += '<div class="letter">&nbsp;</div>';
      else innerHtmlStr += '<div class="letter">' + element[i] + "</div>";
    }
    innerHtmlStr += "</div>";
    $(".ipad-frame").append(innerHtmlStr);
  });
  $(".word-content").each(function(index1) {
    letter_array[index1] = [];
    $(
      $(this)
        .find(".letter")
        .get()
        .reverse()
    ).each(function(index2) {
      if (index1) $(this).css({ opacity: 0.0 });
      letter_array[index1][index2] = this;
    });
  });
  // console.log(letter_array);
  start_hide();
})(jQuery);
