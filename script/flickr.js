$(function() {
  var $keyword = $('#keyword');
  var $searchButton = $('#searchButton');

  $searchButton.on('click', function() {
    var str = $keyword.val();
    var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=' + str + '&tagmode=any&format=json&jsoncallback=callback';
    var script = $('<script/>').attr({src: url});
    $('head').append(script);
    $('.moji').text(str);
  });

  setInterval(function() {
    $('.moji').css('color', randomColor());
  }, 100);
});

function callback(result) {
  console.log(result);
  drawImg(result);
}

function drawImg(result) {
  var $resultArea = $('#resultArea');
  if(result.items.length === 0) return;
  var random = Math.floor(Math.random() * (result.items.length - 0));
  var imgUrl = result.items[random].media.m;

  $('body').css('background', 'url(' + imgUrl + ')');
}

function randomColor() {
  var colorHue = Math.floor( Math.random() * 360 );
  return "hsl(" + colorHue + ", 100%, 50% )";
}
