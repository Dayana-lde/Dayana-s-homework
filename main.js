let dreamCompany = ["freelance", "Google", "Starbacks", "Microsoft", "Deloitte", "KPMG", "Police", "By myself trainer", "Visa", "EY"];
function findADreamJob(){
  for (let i = 0; i < dreamCompany.length ; i++){
    let num = i+1;
    if (num === 1){
      console.log( num + "st " + dreamCompany[i]);
    } else if (num === 2){
       console.log(num + "nd " + dreamCompany[i]);
    } else if (num === 3){
      console.log(num + "rd " + dreamCompany[i]);
    } else{
      console.log(num + "th " + dreamCompany[i]);
    }
  }
}
findADreamJob();
