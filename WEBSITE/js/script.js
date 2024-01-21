$(document).ready(function () {
  let offset = { offset: "80%" };
  $(".table_of_content_title").waypoint(function () {
    console.log("Reached the top");
    $(".table_of_content_title").addClass(
      "animate__animated animate__fadeInLeft"
    );
  }, offset);
  $("#intro").waypoint(function () {
    console.log("Reached the top");
    $("#intro").addClass("animate__animated animate__fadeInLeft");
  }, offset);
});
