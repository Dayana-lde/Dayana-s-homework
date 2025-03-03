function wearACoat(degree){
  if (degree < 0){
  console.log('stay inside');
  }
  else if(degree < 30){
      console.log('wear a coat and a hat');
  }
  else if (degree < 50){
      console.log('wear a coat');
  }
  else{
      console.log('wear whatever you want');
  }
}
wearACoat(50);
wearACoat(40);
wearACoat(10);
wearACoat(-7);

// я поставила температуру в другом порядке, теперь не будет постоянного значения wear a coat
