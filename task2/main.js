const  DIGITS = Object.freeze({
  "0" : {
    "0" : "",
    "1" : "one",
    "2" : "two",
    "3" : "three",
    "4" : "four",
    "5" : "five",
    "6" : "six",
    "7" : "seven",
    "8" : "eight",
    "9" : "nine",
  },
  "1":{     //tenths
    "0" : "",
    "2" : "twenty",
    "3" : "thirty",
    "4" : "forty",
    "5" : "fifty",
    "6" : "sixty",
    "7" : "seventy",
    "8" : "eightty",
    "9" : "ninety",
  },
  "2" : {   //hundreds
    "0" : "",
    "1" : "one hundred",
    "2" : "two hundred",
    "3" : "three hundred",
    "4" : "four hundred",
    "5" : "five hundred",
    "6" : "six hundred",
    "7" : "seven hundred",
    "8" : "eight hundred",
    "9" : "nine hundred",
  }

})
const LESS_THEN_TWENTY = Object.freeze({ //reversed
    "01" : "ten ",
    "11" : "eleven ",
    "21" : "twelve ",
    "31" : "thirteen ",
    "41" : "fourteen ",
    "51" : "fiveteen ",
    "61" : "sixteen ",
    "71" : "seventeen ",
    "81" : "eighteen ",
    "91" : "nineteen ",
})

const  AMOUNTS = Object.freeze({
  "0" : "",
  "1" : "thousand ",
  "2" : "million ",
  "3" : "billion ",
  "4" : "trillion ",
  "5" : "quadrilion ",
})

const convert = number => {
  if(!Number.isFinite(number)) return "error";
  return number
    .toString()
    .split('')
    .reverse()
    .join('')
    .match(/\d{1,3}/g)
    .reduceRight(
      (acc, curr, index) =>
        acc + curr
        .split('')
        .reduce(
          (acc, curr, index) => {
            const value = acc.value + curr
            const word =  LESS_THEN_TWENTY[value] || `${DIGITS[index][curr]} ${acc.word}`   //check if 10 < number < 20
            return { value, word }
          } , { word : '', value: '' }
        )
        .word + AMOUNTS[index] , ''           
      )
    .trim()   //remove space in the end
}

module.exports = convert;