function word(smth) {
  let word1 = smth.toString().split('');
  word1.reverse();
  let word2 = word1.join('');
if (smth.toString().toUpperCase() === word2.toUpperCase() ) {
      console.log("word is palindrome");
  } else {
      console.log("that is not a palindrome");
  }
}

word("bob");
word("Nan");
word("baby");
word(44);
word(48);
