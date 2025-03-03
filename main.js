
function goForPresident(condition){
if (condition === 'Citizen of Kazakhstan by birth'){
    console.log('you are in');
} else if (condition === 'fluent in the state language' || condition === 'I have a higher education'){
    console.log('you are in');
} else if (condition === 'over 40'){
    console.log('you are in');
} else{
  console.log("i'm sorry you aren't allowed go for president")
}
}

goForPresident("Citizen of Kazakhstan by birth");
goForPresident("fluent in the state language");
goForPresident("over 40");
goForPresident("over 30");
