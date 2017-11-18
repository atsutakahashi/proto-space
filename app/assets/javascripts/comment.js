$(document).on('turbolinks:load', function(){
  function buildHTML(comment){
    var html = '<div class="media">'+
                  '<div class="media-left">'+
                    '<img src = "'+ comment.user_avatar.url +'" width="64px", height="64px">'+
                  '</div>'+
                  '<div class="media-body">'+
                    '<h4>' +comment.user_name + '</h4>'+
                    '<p>' + comment.text + '</P>'+
                  '</div>'+
                '</div>'
    return html;
  }
  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = $(this).attr('action')
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
   .done(function(data){
      var html = buildHTML(data);
      $('.comments').append(html)
      $('.text-box').val('')
    })
    .fail(function(){
      alert('error');
    })
  })
});

(function(document){

  $(document).ready(function(){
    $("p").click(edit_togle());
  });

  function edit_togle(){
    var edit_flag = false;
    return function(){
      if(edit_flag) return;
      var $input = $("<input>").attr("type","text").val($(this).text());
      $(this).html($input);
      $("input", this).focus().blur(function(){
        save($(this).val());
        $(this).after($(this).val()).unbind().remove();
        edit_flag = false;
        });
        edit_flag = true;
      }
    }

    function save(value){
      alert("「"+value+"」を保存しました");
    }
})(document);
