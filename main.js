function wearACoat(degree){
  if (degree > 30){
  console.log('wear a coat');
  }
  else if(degree > 0){
      console.log('wear a coat and a hat');
  }
  else if (degree === 0){
      console.log('stay inside');
  }
  else{
      console.log('wear whatever you want');
  }
}
wearACoat(50);
wearACoat(30);
wearACoat(0);
wearACoat(50);
