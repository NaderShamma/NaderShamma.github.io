
function parseContent(page){
  var content;

}

function navigation(p){
  var pages = p;

  var links = $('.menu li > a');
  console.log(links);
}


function init(data){
  console.log(pages);
  $('.collapsible').collapsible();
}

function main(){
  console.log("main started");
  var pageData = "js/json/content.json";
  var pages = $.getJSON(pageData);
  console.log(pages);
  pages.done(
    init
  ).fail(
    function(){
      console.log("failed");
    }
  );

  $(".button-collapse").sideNav();
}

$(document).ready(main());
