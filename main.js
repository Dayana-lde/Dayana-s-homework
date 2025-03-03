
function findVowels(str){
  const vowels =["a","e","i","o","u"];
  let count = 0 ;
  for(let i=0; i<str.length; i++){
    if(vowels.includes(str[i])){
   count++
    }
  }
  console.log(str);
  console.log(count);
}
findVowels("hello")
findVowels("why")
