function FarengateIntoCelsius( degreeFarengate){
let conversionOfTempCelsius = ((degreeFarengate - 32) * 5) / 9;
console.log("temperature from Celsius into Farengate " + conversionOfTempCelsius, "NNF- NNC");
}

function CelsiusIntoFarengate(degreeCelsius){
    let conversionOfTempFarengate = ((degreeCelsius * 9) / 5) + 32;
    console.log("temperature from Farengate into Celsius " + conversionOfTempFarengate, "NNC - NNF");
}
FarengateIntoCelsius(5)
CelsiusIntoFarengate(25)
