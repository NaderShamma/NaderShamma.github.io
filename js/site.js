function getContent(input){
    var output;
    var data = $.getJSON(input);
    console.log(data);
    return data;
}

function parseContent(){
  var content;

}

function navigation(){
  var links = $('.menu li > a');
  console.log(menu);
}

function main(){
  var contentMetaData = getContent("./json/content.json");

  $('.collapsible').collapsible();
  $(".button-collapse").sideNav();
  navigation();
}

$(document).ready(main());
