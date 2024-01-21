console.log("Welcome to jQuery!");

// Selector and Actions
// $("h1").hide();
// $(".second").hide();
// $("#third").hide();

// Events
$("#btn_hide").click(function () {
  $(".second").hide();
});

// Print key code
// $("body").keydown(function (event) {
//   console.log(event.which);
// });

//H to hide, S to show
$("body").keydown(function (event) {
  if (event.which === 72) {
    $(".second").hide();
  }

  if (event.which === 83) {
    $(".second").show();
  }
});

// Toggle Hide/Show afer 2 seconds
$(document).ready(function () {
  $("#btn_toggle").click(function () {
    $(".second").toggle(2000, function () {
      console.log("Completed");
    });
  });
});

// fadeToggle Hide/Show afer 2 seconds
$(document).ready(function () {
  $("#btn_fadeout").click(function () {
    $(".second").fadeToggle(2000, function () {
      console.log("Completed");
    });
  });
});

// slideToggle Hide/Show afer 2 seconds
$(document).ready(function () {
  $("#btn_slide").click(function () {
    $(".second").slideToggle(2000, function () {
      console.log("Completed");
    });
  });
});

// animate change css
$(document).ready(function () {
  $("#btn_animate").click(function () {
    $(".box").animate(
      {
        width: "200px",
        height: "200px",
        fontSize: "30px",
      },
      "slow"
    );
  });
});

// text: get text
$(document).ready(function () {
  $("#btn_text").click(function () {
    $(".text").text("New text");
    console.log($(".text").text());
  });
});

// html: get text, html, val, attr
$(document).ready(function () {
  $("#btn_html").click(function () {
    console.log($(".html").text());
    console.log($(".html").html());
    console.log($("#btn_html").val());
    console.log($("#btn_html").attr("type"));
  });
});

//addClass, removeClass, toggleClass
$(document).ready(function () {
  $("#btn_class").click(function () {
    $(".class").toggleClass("box");
    console.log($(".class").attr("class"));
  });
});

//.css
$(document).ready(function () {
  $("#btn_css").click(function () {
    let color = $("div.box").css("background-color");
    console.log(color);
    $(".css1").css("color", "blue");
    $(".css2").css({
      color: "yellow",
      "background-color": "black",
    });
  });
});

//Form events
//focus blur change submit
$(document).ready(function () {
  $("input").focus(function () {
    $(this).css("background-color", "tomato");
  });
  $("input").blur(function () {
    $(this).css("background-color", "");
  });
  $("input").change(function () {
    console.log($(this).val());
  });
  $("#registration_form").submit(function (event) {
    event.preventDefault();
    console.log("Success");
  });
});

//AJAX check
$(document).ready(function () {
  $("#btn_ajax1").click(function () {
    $("#output1").load("sample.txt", function (response, statusTxt, xhr) {
      console.log(response);
      console.log(statusTxt);
      console.log(xhr);
    });
  });
});

//AJAX load txt file
$(document).ready(function () {
  $("#btn_ajax2").click(function () {
    $("#output1").load("sample.txt", function (response, statusTxt, xhr) {
      if (statusTxt === "success") alert("Success");
      if (statusTxt === "error") alert("Error:" + xhr.statusText);
    });
  });
});

//AJAX API GET
//https://jsonplaceholder.typicode.com/users
$(document).ready(function () {
  $("#btn_get").click(function () {
    $.get(
      "https://jsonplaceholder.typicode.com/users",
      function (data, status) {
        console.log(data);
        console.log(status);
        var statusString = JSON.stringify(status, null, 4);
        $("#output2").text(statusString);
      }
    );
  });
});

//AJAX API POST
//https://jsonplaceholder.typicode.com/posts
$(document).ready(function () {
  $("#btn_post").click(function () {
    $.post(
      "https://jsonplaceholder.typicode.com/posts",
      { title: "New title", body: "New body" },
      function (data, status) {
        console.log(data);
        console.log(status);
        var dataString = JSON.stringify(data, null, 4);
        $("#output2").text(dataString);
      }
    );
  });
});
