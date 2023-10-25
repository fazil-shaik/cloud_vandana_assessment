function reverseWord(word) {
  var reversed = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}

function reverseWordsInSentence(sentence) {
  var words = [];
  var currentWord = '';
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      currentWord += sentence[i];
    } else {
      words.push(currentWord);
      currentWord = '';
    }
  }
  words.push(currentWord); // Add the last word

  var reversedWords = [];
  for (var j = 0; j < words.length; j++) {
    reversedWords.push(reverseWord(words[j]));
  }

  var reversedSentence = '';
  for (var k = 0; k < reversedWords.length; k++) {
    reversedSentence += reversedWords[k];
    if (k < reversedWords.length - 1) {
      reversedSentence += ' ';
    }
  }

  return reversedSentence;
}

var inputSentence = "This is a sunny day";
var reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);
