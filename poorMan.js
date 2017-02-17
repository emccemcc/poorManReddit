//start of js
$(function() {

  var url = 'https://www.reddit.com/r/aww/.json'

$.get(url).done(function(responseBody){
  //simple test
  console.log("DONE", responseBody.data.children[1].data.title);
  //actuall jazz to post on the page
  //foreach loop for dispaly
  responseBody.data.children.forEach(function(post){
    //making variables
  var t =post.data.title;
  var a =post.data.author;
  var d =post.data.created_utc;
        var realTime = new Date(d*1000);
  var p =post.data.thumbnail;
  //why is this one an issue?
  //var imgs =post.data.preview.images.source.url;
  //from prior assignment
  var $header = $('<h3>').text(t);
  var $paragraph = $('<p>').addClass("details");
  var $author = $('<span>').addClass("author").text("Author: "+a);
  var $date = $('<span>').addClass("date").text("UTC Time Created: "+realTime);
  var $thumbnail = $('<div>').addClass("picture").html("<img src="+p+">"+"</img>");
  //var $image = $('<div>').addClass("fullPicture").html("<img src="+imgs+">"+"</img>");

  //variable to post


//posting to page
$('body').append($header)
      .append($paragraph.append($author).append($date))
      .append($thumbnail)
      //.append($image)

//end of ammending
;


});


}).fail(function() {
  console.log("FAIL");
}).always(function() {
  console.log("ALWAYS");
});








  //end of ajax


//end of JS
});
