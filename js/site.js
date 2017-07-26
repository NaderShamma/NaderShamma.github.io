function getPages(input){
    var output;
    var meta = $.getJSON(input);
    console.log(meta);
    output = $.parseJSON(meta);
    console.log(output);
    return output;
}

function parseContent(page){
  var content;

}

function navigation(p){
  var pages = p;

  var links = $('.menu li > a');
  console.log(links);
}

function init(p){
  var pages = p;
  console.log("init triggered");
}

function main(){
  var pages = getPages("js/json/content.json");

  init(pages);

  $('.collapsible').collapsible();
  $(".button-collapse").sideNav();

  navigation(pages);
}

$(document).ready(main());
