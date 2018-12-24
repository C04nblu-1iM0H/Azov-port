$(document).ready(function(){
    $( ".slide-toggle" ).hide();
    $(".hidden__img").on('click', function() {
    if ($(this).attr("class") == "hidden__img") {
      this.src = this.src.replace("Vector1.jpg","Vector2.jpg");
    } else {
      this.src = this.src.replace("Vector2.jpg","Vector1.jpg");
    }
    $(this).toggleClass("on");
    $( ".slide-toggle" ).slideToggle(500);
  });
});
    