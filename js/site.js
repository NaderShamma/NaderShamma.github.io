
function renderPage(p){
  var page = p;

  //set the page title
  $('#page-title').html(page.title);

  //render page content
  $.get(page.url, function(data){
      $('#main-content').html(data);
      $('.collapsible').collapsible();
  })
}

function navigation(p){
  var pages = p;
  var links = $('.menu li > a');
  var page;

  //bind .click() to all menu links
  links.click(function(){
    var link = $(this);
    page = link.attr("data-content");

    //search for page maching link data-content tag
    for(var i = 0; i < pages.length; i ++)
    {
      if(pages[i].page == page){
        renderPage(pages[i]);
        break;
      }
    }
  })
}

//load first page on entry
function init(p){
  var pages = p;
  for (var i = 0; i < pages.length; i++ ){
    if(pages[i].page == "home"){
      renderPage(pages[i]);
      break;
    }
  }
}

function materialize(data){
  init(data.content);
  navigation(data.content);
}

function main(){
  //get JOSN object
  var pages = $.getJSON("js/json/content.json");

  //initialise data and page
  pages.done(
    materialize
  ).fail(
    function(){
      console.log("failed");
    }
  );

  $(".button-collapse").sideNav();
}

$(document).ready(main());
