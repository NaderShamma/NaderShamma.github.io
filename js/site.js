function getPages(input){
    var output;
    var meta = $.getJSON(input, function(data, status){
      console.log(status);
      console.log(data);
      if(status === 200 ){
        output = data;
      }
      else{
        output = null;
      }
    });
    console.log(meta);
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
  console.log(pages);
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
