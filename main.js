function getLoginRight(login, password) {
  if (login === "tea" ){
console.log('you are login in')
  }
  else if (login != "tea"){
    console.log('your login is wrong')
  return login;
  } if (password == 123){
 console.log('your password right')
  } else if (password != 123){
     console.log('your password wrong')
    return password;
  } else {
    console.log('both are wrong')
    return login, password;
  }
}

getLoginRight("tea", 123);
getLoginRight("coffe", 123);
getLoginRight("coffe", 223);
