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
      heart.attr("src", "/assets/icon_heart-80d3735057f1bd26be8fb5f2531ea345d487fe845d95381a091d611b8a7d044b.ico");
      var a = (parseInt(sum) - 1);
      $("#like-sum").text(Number(a));
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
      heart.attr("src", "/assets/icon_heart_red-370d567528143e59c69996cdce5e7af1490c8fd92bf217ccd45fc97852e9454a.ico");
      var a = (parseInt(sum) + 1);
      $("#like-sum").text(Number(a));
    });
  };
};
