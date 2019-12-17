var letters= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var images=["images/hang0.png","images/hang1.png","images/hang2.png","images/hang3.png","images/hang4.png","images/hang5.png","images/hang6.png","images/hang7.png"];
var easyTeachers=["albinson","schweng","glimme","rock"];
var mediumTeachers=["mueller","palen","boltz", "kaku"];
var hardTeachers=["rodrigues","aardal","mckee","perez"];

var easyDrinks=["redbull","monster","rockstar","bang"];
var mediumDrinks=["nos","kickstart","amp","celsius"];
var hardDrinks=["zevia","xyience","enviga"];

var easyFruits=["apple","banana","orange","grape","strawberry"];
var mediumFruits=["cantaloupe","kiwi","tomato","cucumber","pumpkin"];
var hardFruits=["dragonfruit","jackfruit","durian","cherimoya","feijoya"];

var word="";
var guesses=0;
var img=0;
function getWord(){
    var cat= document.getElementById("category").value;
    var dif= document.getElementById("difficulty").value;
    var category;
    if(dif==1 && cat==1){
        category= easyTeachers
    }
    if(dif==2 && cat==1){
        category= mediumTeachers
    }
    if(dif==3 && cat==1){
        category=hardTeachers
    }
    if(dif==1 && cat==2){
        category=easyDrinks
    }
    if(dif==2 && cat==2){
        category= mediumDrinks
    }
    if(dif==3 && cat==2){
        category=hardDrinks
    }
    if(dif==1 && cat==3){
        category=easyFruits
    }
    if(dif==2 && cat==3){
        category=mediumFruits
    }
    if(dif==3 && cat==3){
        category=hardFruits
    }
    word=category[Math.floor(Math.random() * category.length)]
}

function makeLetters(){
    var btn;
    var div = document.getElementById("allTheLetters");
    for(var i =0 ;i<letters.length; i++){
        btn= document.createElement("input");
        btn.setAttribute("type","button");
        btn.setAttribute("class","btn btn-outline-success");
        btn.setAttribute("value", letters[i]);
        btn.setAttribute("id", letters[i]);
        btn.setAttribute("onclick", "guess(this)");
        btn.disabled=true;
        document.getElementById("allTheLetters").innerHtml+="dfsd ";
        div.appendChild(btn);
        btn.innerHTML= letters[i];
        if(i==12){
            var br= document.createElement("br");
            div.appendChild(br);
        }
    }
}

function startGame(){
    word="";
    guesses=7;
    img=0;
    document.getElementById("image").src=images[0];
    document.getElementById("guessLeft").innerHTML="Guesses Remaining: "+guesses;
    var div = document.getElementById("wordToGuess");
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    getWord();
    var ltr;
    activateButtons();
    for(var i =0 ; i< word.length; i++){
        ltr = document.createElement("span");

        ltr.setAttribute("id", i );

        ltr.innerHTML= "_ ";
        div.appendChild(ltr);
    }
}

function guess(button) {
    //var word = getWord()
    var theirGuess = button.id;
    button.disabled = "true";
    var x=0;
    for (var i = 0; i < word.length; i++) {
        if (theirGuess == word.substring(i, i + 1)) {
            document.getElementById(i).innerHTML = word.substring(i, i + 1);
            x++
        }
    }
    if(x==0){
        guesses--;
        img++;
        document.getElementById("guessLeft").innerHTML="Guesses Remaining: "+guesses;
    }
    if(guesses==0){
        deactivateButtons();
        for (var i = 0; i < word.length; i++) {
            document.getElementById(i).innerHTML = word.substring(i, i + 1);
        }
        document.getElementById("guessLeft").innerHTML= "You Lost! Click Start to Start a New Game"
    }else if(isWon()==true){
        deactivateButtons();
        document.getElementById("guessLeft").innerHTML= "You Won! Click Start to Start a New Game"
    }
    document.getElementById("image").src=images[img];
}
function isWon(){
    var x=0;
    for(var i =0 ; i< word.length; i++){
        var temp = document.getElementById(i).innerHTML;
        if(temp != "_ "){
            x++
        }
    }

    if(x==word.length){
        return true
    }
}

function deactivateButtons(){
    var btn;
    for(var i =0 ;i<letters.length; i++){
        btn= document.getElementById(letters[i]);
        btn.disabled=true

    }
}
function activateButtons(){
    var btn;
    for(var i =0 ;i<letters.length; i++){
        btn= document.getElementById(letters[i]);
        btn.disabled= false

    }
}
