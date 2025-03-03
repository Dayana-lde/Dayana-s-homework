const paragraph =
  " the quick brown box jumps over the lazy dog. if the dog barked, was it really lazy?";
const searchTerm = "dog";
const first = paragraph.indexOf(searchTerm);
const second = paragraph.indexOf(searchTerm, first + 1);
console.log(first, second);
