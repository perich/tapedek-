function postFunctions() {
  $("#helpBlock").on("click", function () {
    $("#urlFormattingList").toggle();
  });

  $(".reply_button").on('click', function () {
    $(this).parent().next('.reply_form').toggle();
  });

  $(".new_post").on('submit', function (e) {
    // e.preventDefault();
    var $tag_list = $("#post_tag_list"),
        tags = $tag_list.val().toLowerCase().split(" ").join("").split(",").slice(0,8),
        uniqueTags = [];

    $.each(tags, function(i, el){
        if($.inArray(el, uniqueTags) === -1) uniqueTags.push(el);
    });
    $tag_list.val(uniqueTags.join(","))
  });
}

function socialSharing () {
  function reset () {
    $('span.post_share_buttons.active').removeClass("active");
    $('#sharing_box').remove();
  }

  $('.post_share_buttons').on('click', function (){
    $('span.post_share_buttons').find(".active");
    reset();
    var $this = $(this),
        url = $this.data('url'),
        title = $this.data('title');
    var template = _.template(JST['social_share'])({title: title, url: url})
    $this.addClass("active");
    $this.parents(".post_footer").after(template)
  });
}  
