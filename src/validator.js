const validator = {
  validateCreditCard: function(creditCardNumber){ //"4213456789542015"
    let arrayCreditCardNumber = Array.from(creditCardNumber); // arrayCreditCardNumber --> ['4', '2', '1', '3', '4', '5', '6', '7', '8', '9', '5', '4', '2', '0', '1', '5']

    for (let index = 0; index < arrayCreditCardNumber.length; index++) {
      arrayCreditCardNumber[index] = parseInt(arrayCreditCardNumber[index]);
    } // arrayCreditCardNumber --> [4, 2, 1, 3, 4, 5, 6, 7, 8, 9, 5, 4, 2, 0, 1, 5]

    arrayCreditCardNumber.reverse(); // arrayCreditCardNumber --> [5, 1, 0, 2, 4, 5, 9, 8, 7, 6, 5, 4, 3, 1, 2, 4]
  
    for (let index = 1; index < arrayCreditCardNumber.length; index = index + 2) {
      arrayCreditCardNumber[index] = arrayCreditCardNumber[index] * 2;
    }

    for (let index = 1; index < arrayCreditCardNumber.length; index = index + 2) {
      if(arrayCreditCardNumber[index] > 9){
        let newValueString = arrayCreditCardNumber[index].toString();
        let newValueNumber = parseInt(newValueString.charAt(0)) + parseInt(newValueString.charAt(1));
        arrayCreditCardNumber[index] = newValueNumber;
     
      }
    }

    let sumTotal = 0;
    for (let index = 0; index < arrayCreditCardNumber.length; index++) {
      sumTotal = sumTotal + arrayCreditCardNumber[index];
    }

    if(sumTotal > 0 && sumTotal%10 === 0){
      return true;
    }
    else{
      return false;
    }
  }
};

export default validator;
