
function renderPage(page){
  //set the page title
  $('#page-title').html(page.title);

  //render page content
  $.get(page.url, function(data){
      $('#main-content').html(data);
      $('.collapsible').collapsible();
  })
}

// set up menu
function menuOverride(pages){
    var i = 0;
    console.log($('.menu li > a'));
    while (i < $('.menu li > a').length && i < pages.length) {
      $('.menu li > a')[i].attr("href", pages[i].page);
      i++;
    }

    i = 0;
}

//load first page on entry
function init(pages){
  for (var i = 0; i < pages.length; i++ ){
    if(pages[i].page == "home"){
      renderPage(pages[i]);
      break;
    }
  }
}

function navigation(pages){
    //bind .click() to all menu links
  $('.menu li > a').click(function(){

      //search for page maching link data-content tag
    for(var i = 0; i < pages.length; i ++)
    {
      if(pages[i].page == $(this).attr("data-content")){
        renderPage(pages[i]);
        break;
      }
    }

  });
}

function materialize(data){
  menuOverride(data.content);
  init(data.content);
  navigation(data.content);
}

function main(){
  //get and process JSON data
  $.getJSON("js/json/content.json").done(
    materialize
  ).fail(
    function(){
      console.log("failed");
    }
  );

  $(".button-collapse").sideNav();
}

$(document).ready(main());
