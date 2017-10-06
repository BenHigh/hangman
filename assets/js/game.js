var wrong = 0;

var guessArr = [];

var gArray = [["",""],["g3", "||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(_)"], ["g4", "||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |"],["g4", "||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/|"],["g4", "||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/|\\"],["g5", "||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /"],["g5", "||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /\\"]];

var words = ["calculate","wicked","toothpaste","homely","bath","shirt","supply","unadvised","smooth","measure","taste","half","treatment","clean","fowl","curious","steadfast","minute","kaput","annoyed","chase","writing","monkey","kill","oven","move","mask","penitent","carve","juggle","unable","spurious","psychotic","fluffy","plastic","racial","massive","productive","polish","quaint","billowy","respect","utopian","hum","spade","waiting","train","simplistic","account","diligent","rob","decorate","charming","book","outrageous","serious","yawn","include","analyse","hook","gentle","parsimonious","rest","nippy","furniture","steel","reject","guard","observation","kind","cactus","sleepy","unlock","seashore","meddle"];

var word;

var done = false;

var chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function printGallows(){
  if(done == true && wrong < 6){
    $("#gallows").html("<h1>YOU WIN</h1>");
  }else{
    if(wrong < 6 && wrong > 0){
      var elm = $("#" + gArray[wrong][0]);
      $(elm).html(gArray[wrong][1]);
    }
    else if(wrong!=0){
      $("#gallows").html("<h1>YOU LOSE</h1>");
    }
  }
}

function showWord() {
  var divword = "";
  var tempword = words[word].split('');
  console.log("wrong " + wrong);

  for(i in tempword){
    if(!guessArr.includes(tempword[i]) && !done){
      divword+=" -";
    }
    else{
      divword+=(" "+tempword[i]);
    }
  }
  done = !divword.includes("-");
  $("#word").html(divword);
}

function updateScore() {
  $("#guessesL").html((6-wrong) + " guesses remaining...");
  var spacedguess = guessArr.sort().join(", ");
  $("#guesses").html(spacedguess);
}

function runGame(){
  word = Math.floor((Math.random() * 75));
  $("body").focus();
};