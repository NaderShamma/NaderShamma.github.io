
function renderPage(page){
  //set the page title
  $('#page-title').html(page.title);

  //render page content
  $.get(page.url, function(data){
    var start = data.indexOf("<!--content-->");
    var end = data.lastIndexOf("<!--content-->");
      $('#main-content').html(data.slice(start, end));
      $('.collapsible').collapsible();
  })
}

// set up menu
function menuOverride(pages){
    var j = 0;
    $.each($('.menu li > a'), function(i, val){
        if(j == pages.length){ j = 0;}
        $(this).attr("href", "#"+pages[j].page);
        j++;
    });
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
  $('html').removeClass('no-js');
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

  $(".button-collapse").sideNav({closeOnClick:true});
}

$(document).ready(main());
