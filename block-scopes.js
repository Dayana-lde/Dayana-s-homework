et globalVariable = "Я глобальная переменная!"; 
  console.log(globalVariable);
function blockscopes() {

  var functionVariable = "Я существую только в этой функции!";
  console.log(functionVariable);
  {
    let blockVariable = "Я существую только в этом блоке!";
    const anotherBlockVariable = "Я тоже существую в этом блоке!";
    console.log(blockVariable);
    console.log(anotherBlockVariable);
  }
}
blockscopes();
