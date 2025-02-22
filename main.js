function findword(str){
  const words = str.split('');
  words.reverse();
  const word2 = words.join('');
  return word2;
}
console.log(findword("level"));
console.log(findword("noon"));
console.log(findword("deed"));
