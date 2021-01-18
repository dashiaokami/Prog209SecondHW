let word = [3];
const myWords = document.getElementById("words");
let btn = document.getElementById("clickMe");
let btn2 = document.getElementById("changed");
const theWords = document.getElementById("theWords");

btn.addEventListener('click', function () {
  let i;
  for (i = 0; i < 3; i++) {
     word[i] = prompt("Please enter a word");

  }

    for (i = 0; i < 3; i++) {
      let li = document.createElement('li');
      li.textContent = word[i];
      myWords.appendChild(li);
  }
  document.getElementById("changed").style.display = "block";
   document.getElementById("clickMe").style.display = "none";

});
btn2.addEventListener('click', function(){
  document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";

 let secondArray = word.map(function(oneWord) { return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0);});
 
for (i = 0; i < 3; i++){
     let li = document.createElement('li');
      li.textContent = secondArray[i];
      theWords.appendChild(li);

}
 });