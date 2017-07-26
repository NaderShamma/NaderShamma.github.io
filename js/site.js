
function renderPage(page){
  var pageTitle = $('#page-title');
  var contentBody = $('#main-content');
  var contentTitle = page.title;
  var contentURL = page.url;
  pageTitle.html(page.title);

  $.get(contentURL, function(data){
      contentBody.html(data);
  })
}

function navigation(p){
  var pages = p;
  var links = $('.menu li > a');
  var page;

  links.click(function(){
    var link = $(this);
    console.log(link);
    page = link.attr("data-content");
    console.log(page);
    console.log(pages.length);
    for(var i = 0; i < pages.length; i ++)
    {
      if(pages[i].page == page){
        renderPage(pages[i]);
        break;
      }
    }
  })

  console.log(links);
}

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
  console.log(data);
  console.log(data.content);
  console.log(data.content.length);

  init(data.content);
  navigation(data.content);

  $('.collapsible').collapsible();
}

function main(){
  console.log("main started");
  var pageData = "js/json/content.json";
  var pages = $.getJSON(pageData);
  console.log(pages);
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
