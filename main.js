let receipt = {
  recipeTitle:"Pie",
  serving:[100, 2, 3, 1],
  ingredients:["butter", "eggs","flouwer", "cherry"],
  directions:"preheat oven to 350 degrees. mix ingredients in a bowl. put your dough in fridge for about 30 min. Then make from dough a form for pie and after that in ready form add your sweet cherry."
}
console.log(receipt.directions);

 for(let i = 0; i <= receipt.serving.length; i++){
  console.log(receipt.serving[i] + " " + receipt.ingredients[i]);
  }
