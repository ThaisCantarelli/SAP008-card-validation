const doubleLimit = 9;
const isDivisibleBy = 10;

const validator = {
  isValid(number) {
    const reverseNumber = number.split('').reverse();
    let sum = 0;

    for (let index = 0; index < reverseNumber.length; index++) {
      const currentNumber = Number(reverseNumber[index]);
      const isOdd = index % 2 !== 0;

      if (isOdd) {
        let double = currentNumber * 2;
        if (double > doubleLimit) {
          double -= doubleLimit;
        }

        sum += double;
      } else {
        sum += currentNumber;
      }
    }

    const isValidNumber = sum % isDivisibleBy === 0;
    return isValidNumber;

  },



  maskify(maskiNumber) {
    let ocultNumber = "";
    for (let index = 0; index < maskiNumber.length; index++) {
      if (index < (maskiNumber.length - 4)) {
        ocultNumber = ocultNumber + "#";
      } else {
        ocultNumber = ocultNumber + maskiNumber.charAt(index);
      }
    }
    return ocultNumber;
  },
}

export default validator;

