$(function(){
  function buildHTML(comment){
    var html = `<div class="media">
                  <div class="media-left">
                    <img src = "${ comment.user_avatar.url }" width="64", height="64">
                  </div>
                  <div class="media-body">
                    <h4>
                      ${ comment.user_name }
                    </h4>
                    <p>
                      ${ comment.text }
                    </P>
                  </div>
                </div>`
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
      $('.proto-comments').append(html)
      $('.text-box').val('')
    })
    .fail(function(){
      alert('error');
    })
  })
});



