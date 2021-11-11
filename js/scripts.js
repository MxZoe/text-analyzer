//utility logic
function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

function noInputtedText(text){
    return text.trim().length === 0;
}

function wordMatch(wordOne, wordTwo) {
  return wordOne.toLowerCase().includes(wordOne.toLowerCase()) && wordOne.toLowerCase() === wordTwo.toLowerCase()
}
//business logic

function wordCounter(text){
  if(noInputtedText(text)){
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(word) {
    if(!Number(word)){
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text){
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if(wordMatch(element, word)) {
      wordCount++;
    }
  });
      return wordCount;
}

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (wordMatch(element, word)) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}
function topThreeWords(text){
  if(noInputtedText(text)){
    return 0;
  }
  let wordArray = text.split(" ");
  let countSentence = "";
  let topmost = 0;
  let topmostWord = "";
  let secondMost = 0;
  let secondWord = "";
  let thirdMost = 0;
  let thirdWord = "";
  let result = "";
  wordArray.forEach(function(element){
    if(countSentence.toLowerCase().includes(element.toLowerCase())){
      return
    }
    let numberOfTimes = numberOfOccurrencesInText(element, text);
    if(numberOfTimes > topmost){
      topmost = numberOfTimes;
      topmostWord = element;
    } else if(numberOfTimes > secondMost){
      secondMost = numberOfTimes;
      secondWord = element;
    } else if(numberOfTimes > thirdMost){
      thirdMost = numberOfTimes;
      thirdWord = element;
    }
    
    result = "<br>" + topmostWord + " " + topmost + "<br>" + secondWord + " " + secondMost + "<br>" + thirdWord + " " +thirdMost;
    countSentence = countSentence.concat(result);
  });
  
  return result;
}

// UI Logic

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    
    let passage = $("#text-passage").val();
    let word = $("#word").val();
    let wordCount = wordCounter(passage);
    let occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    let topWord = topThreeWords(passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
    $("#topWord").html(topWord);
    event.preventDefault();
  });
});