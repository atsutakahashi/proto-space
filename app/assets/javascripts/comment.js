$(document).on('turbolinks:load', function(){
  function buildHTML(comment){
    var html = '<div class="media">'+
                  '<div class="media-left">'+
                    '<img src = "'+ comment.user_avatar.url +'" width="64px", height="64px">'+
                  '</div>'+
                  '<div class="media-body">'+
                    '<h4>' +comment.user_name + '</h4>'+
                    '<p>' + comment.text + '</p>'+
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

$(document).on('turbolinks:load', function(){
  function buildEditHTML(pId,cId){
    var html =  '<div class="edit-form-group">'+
                  '<div class="row">'+
                    '<form class="edit_comment" id="edit_comment" action="/prototypes/'+pId+'/comments/'+cId+'" accept-charset="UTF-8" method="post">'+
                      '<div class="edit-form-group col md-10">'+
                        '<textarea class="text-box" name="comment[text]" id="comment_text"></textarea>'+
                      '</div>'+
                      '<div class="edit-form-group col-md-2">'+
                        '<input name="_method" type="hidden" value="PATCH">'+
                        '<input type="submit" name="commit" value="update" class="btn btn-primary">'+
                      '</div>'+
                    '</form>'+
                  '</div>'+
                '</div>'
    return html;
  }
  $(".edit-function").on('click' ,function(e){
    e.preventDefault();
    var pId = $(this).parent().parent().find(".media-left").data("prototype-id");
    var cId = $(this).parent().data("comment-id")
    var html = buildEditHTML(pId,cId)
    $(this).parent().find("p").html(html)
  });
});

$(document).on('turbolinks:load', function(){
  $('.delete-function').on('click', function(e){
    e.preventDefault();
    $(event.target).parent().parent().remove();
  })
})







