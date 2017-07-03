StringIMC = (imc) =>{
        if(imc == '1'){
            return "imc < 18.5";
        }
        if(imc == '2'){
            return "imc >= 18.5 and <=25";
        }
        if(imc == '3'){
            return "imc > 25 and imc <= 30";
        }
        if(imc == '4'){
            return "imc > 30 and imc <=35";
        }
        if(imc == '5'){
            return "imc > 35 and imc <= 40";
        }
        if(imc == '6'){
            return "imc > 40";
        }
}

module.exports = (imc) => {
    return StringIMC
}