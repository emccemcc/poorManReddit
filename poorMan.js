//start of js
$(function() {

  var url = 'https://www.reddit.com/r/aww/.json'

$.get(url).done(function//start of js
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
  // CONVERT TIMESTAMP TO READABLE DATE
            var date = post.data.created_utc;
            var timestampInMilliSeconds = date * 1000;
            var date = new Date(timestampInMilliSeconds);
            var day = (date.getDate() < 10 ? '0' : '') + date.getDate();
            var month = (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1);
            var year = date.getFullYear();
            var hours = ((date.getHours() % 12 || 12) < 10 ? '0' : '') + (date.getHours() % 12 || 12);
            var minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
            var meridiem = (date.getHours() >= 12) ? 'pm' : 'am';
            var formattedDate = month + '-' + day + '-' + year + ' at ' + hours + ':' + minutes + ' ' + meridiem;


  var p =post.data.thumbnail;
  //why is this one an issue?
  //var imgs =post.data.preview.images.source.url;
  //from prior assignment
  var $header = $('<h3>').text(t);
  var $paragraph = $('<p>').addClass("details");
  var $author = $('<span>').addClass("author").text("Created by: "+a + " on " + formattedDate);
  // var $date = $('<span>').addClass("date").text(" Created: "+formattedDate);
  var $thumbnail = $('<div>').addClass("picture").html("<img src="+p+">"+"</img>");
  //var $image = $('<div>').addClass("fullPicture").html("<img src="+imgs+">"+"</img>");

  //variable to post


//posting to page
$('.postContainer').append($header)
      .append($paragraph).append($author)
      // .append($date)
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
(responseBody){
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
