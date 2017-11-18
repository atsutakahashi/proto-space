$(document).on('turbolinks:load', function () {
  $("#like-button").on("click", function(e){
    var sum = $("#like-sum").text();
    var $heart = $("#like-button img");
    var $id = $(".img-responsive").data("prototype-id");
    e.preventDefault();
    like_function($id, $(this), $heart, sum);
  });
});
function like_function(id, button, heart, sum) {

  if (button.hasClass("decrement")){
    $.ajax({
      url: /likes/+id,
      type: "delete",
      data: {prototype_id: id},
      dataType: "json",
    })

    .done(function(data){
      button.removeClass("decrement").addClass("increment");
      heart.attr("src", "/assets/icon_heart.ico");
      $("#like-sum").text(sum-1);
    })
  }else{
    $.ajax({
      url: /likes/,
      type: "post",
      data: {prototype_id: id},
      dataType: "json",
    })

    .done(function(data){
      button.removeClass("increment").addClass("decrement");
      heart.attr("src", "/assets/icon_heart_red.ico");
      $("#like-sum").text(Number(sum+1));
    });
  };
};
