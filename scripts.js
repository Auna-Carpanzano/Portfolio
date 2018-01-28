$(document).ready(function() {
  $(".card").each(function(index) {
    $(this).delay((index++) * 500).fadeIn("slow");
  });
});
