Describe: wordCounter()

Test: "It should return 1 if a passage has jsut one word"
Code:
const text = "hello";
wordCounter(text);
Expected output: 1

Test: "It should return 2 if a passage has just 2 words."
Code:
const text = "hello there";
wordCounter(text);
Expected output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected output = 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("                ");
Expected output = 0

Test: "It should not count numbers as words."
Code: wordCounter("hello there 77 19");
Expected output: 2

Describe: numberOfOccurancesInText()

Test: "It should return 0 occurances of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurancesInText(word, text);
Expected output: 0

Test: "It should return 1 occurance of the word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurancesInText(word, text);
Expected output: 1

Test: "It should return 0 occurances of the word when the word and the text are different."
Code:
const text = "blue";
const word = "red";
numberOfOccurancesInText(word, text);
Expected output: 0

Test: "It should return the number of occurances of the word."
Code:
const text = "red blue red blue red blue";
const word = "red";
numberOfOccurancesInText(word, text);
Expected output: 3

Test: "It should return a match of the word regardless of case."
Code:
const text = "Red red RED blue";
const word = "Red";
numberOfOccurancesInText(word, text);
Expected output: 3

Test: "It should return a match regardless of punctuation."
Code:
const text = "Red red. RED!";
const word = "Red";
numberOfOccurancesInText(word, text);
Expected output: 3
