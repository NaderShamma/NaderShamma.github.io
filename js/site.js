function getContent(input){
    var output;

    return
}

function parseContent(){
  var files = [
                {name: "home", url:"../content/home.json"},
                {name: "about", url:"../content/about.json"},
                {name: "pubs", url:"../content/pubs.json"},
                {name: "slides", url:"../content/slides.json"}
              ];
  var content;


}

function menu(){
  var menu = $('.menu li > a');
  console.log(menu);
}

function main(){
  $('.collapsible').collapsible();
  $(".button-collapse").sideNav();
  menu();
}

$(document).ready(main());
