function getContent(input){
    var output;
    var meta = $.getJSON(input, function(data, status){
      console.log(status);
      console.log(data);
    });
    console.log(meta);
    return meta;
}

function parseContent(){
  var content;

}

function navigation(){
  var links = $('.menu li > a');
  console.log(links);
}

function main(){
  var contentMetaData = getContent("js/json/content.json");

  $('.collapsible').collapsible();
  $(".button-collapse").sideNav();
  navigation();
}

$(document).ready(main());
