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

Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
wordCounter(word, text);
Expected Output: 0

Describe: boldPassage()

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: "<p>yo</p>"

Test: "It should return a matching word in a b tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: "<p><b>hello</b></p>"

Test: "It should wrap words that match in `b` tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: "<p><b>hello</b> there</p>"

Describe: topThreeWords(array)
test: get the number of times the first element of an array occurs in that same array.
Code:
const text = "Hello I like saying hello.";
const wordArray = text.trim().split(" ");
wordArray[0] = "Hello";
expected output: 2

test: have the output say the first element of an array and how many times it occurs in that array.
Code:
const text = "Hello I like saying hello.";
const wordArray = text.trim().split(" ");
wordArray[0] = "Hello";
expected output: "Hello 2"

test: for each element in an array, output the number of times that element occurs in the array and what that element is
Code
const text = "Hello I like saying hello.";
const wordArray = text.trim().split(" ");
wordArray[0] = "Hello";
expected output: "Hello 2, I 1, like 1, saying 1, hello 2"

test: do not reprint repeated words
Code
const text = "Hello I like saying hello.";
const wordArray = text.trim().split(" ");
wordArray[0] = "Hello";
expected output: "Hello 2, I 1, like 1, saying 1,

test: only print the topmost occuring word And number of times it occurs
const text = "Hello I like saying hello.";
const wordArray = text.trim().split(" ");
wordArray[0] = "Hello";
expected output: "Hello 2